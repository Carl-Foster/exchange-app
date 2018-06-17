import { interval, merge, of, timer } from 'rxjs'
import { catchError, exhaustMap, filter, ignoreElements, map, mergeMap, pluck, takeUntil, tap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { MyEpic } from '..'
import { ViewPath } from '../../types/enums'
import { getDepthAction } from '../actions'

export const depth$: MyEpic = (action$, state$, { getDepth }) =>
  action$.pipe(
    filter(isActionOf(getDepthAction.request)),
    mergeMap((action) => timer(0, 1000).pipe(
      mergeMap(() => getDepth(action.payload).pipe(
        map((orders) => getDepthAction.success({ direction: action.payload, orders })),
        catchError((e) => of(getDepthAction.failure(e))),
      )),
      takeUntil(
        merge(
          action$.pipe(filter(isActionOf(getDepthAction.failure))),
          state$.pipe(
            map((state) => state.router.location),
            filter((location) => location.pathname !== ViewPath.dashboard),
          ),
        ),
      ),
    )),
  )

// export const logging$: MyEpic = (action$) => action$.pipe(
//   // tslint:disable-next-line:no-console
//   tap((action) => console.log(action)),
//   ignoreElements(),
// )
