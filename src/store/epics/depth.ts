import { empty, interval, of } from 'rxjs'
import { catchError, exhaustMap, filter, ignoreElements, map, mergeMap, takeUntil, tap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { MyEpic } from '..'
import { getDepthAction } from '../actions'

export const depth$: MyEpic = (action$, _, { getDepth }) =>
    action$.pipe(
        filter(isActionOf(getDepthAction.request)),
        exhaustMap((action) => interval(1000).pipe(
            mergeMap(() => getDepth(action.payload).pipe(
                map((orders) => getDepthAction.success(orders)),
                catchError((e) => of(getDepthAction.failure(e))),
            )),
            takeUntil(action$.pipe(
                filter(isActionOf(getDepthAction.failure)),
            )),
        )),
    )

export const logging$: MyEpic = (action$) => action$.pipe(
    // tslint:disable-next-line:no-console
    tap((action) => console.log(action)),
    ignoreElements(),
)
