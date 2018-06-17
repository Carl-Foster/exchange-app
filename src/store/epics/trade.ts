import { goBack } from 'connected-react-router'
import { merge, of } from 'rxjs'
import { catchError, filter, map, mapTo, mergeMap, withLatestFrom } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { MyEpic } from '..'
import { placeTradeAction } from '../actions'

export const trade$: MyEpic = (action$, state$, { placeOrder }) =>
  action$.pipe(
    filter(isActionOf(placeTradeAction.request)),
    mergeMap(({ payload }) =>
      placeOrder({ ...payload }).pipe(
        map((matches) => placeTradeAction.success(matches)),
        catchError((e) => of(placeTradeAction.failure(e))),
      ),
    ),
  )

export const tradeSuccess$: MyEpic = (action$) => {
  const successfulTrade$ = action$.pipe(
    filter(isActionOf(placeTradeAction.success)),
  )

  const goBackToPrevious = successfulTrade$.pipe(
    map(() => goBack()),
  ) as any

  return merge(goBackToPrevious)
}
