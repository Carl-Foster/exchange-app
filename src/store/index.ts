import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory, createMemoryHistory } from 'history'
import { applyMiddleware, createStore, Reducer } from 'redux'
import { Epic } from 'redux-observable'
import { RootAction } from './root-action'
import { epicMiddleware, rootEpic, Services } from './root-epic'
import { rootReducer, RootState } from './root-reducer'

export type MyReducer<S> = Reducer<S, RootAction>
export type MyEpic = Epic<RootAction, RootAction, RootState, Services>

export function configureStore() {
  const history = process.env.WEB ? createBrowserHistory() : createMemoryHistory()
  const routerReducer = connectRouter(history)(rootReducer as any)
  const store = createStore(
    routerReducer,
    applyMiddleware(
      routerMiddleware(history),
      epicMiddleware,
    ),
  )
  epicMiddleware.run(rootEpic)
  return { store, history }
}
