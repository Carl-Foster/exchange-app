import { applyMiddleware, createStore, Reducer } from 'redux'
import { Epic } from 'redux-observable'
import { RootAction } from './root-action'
import { epicMiddleware, rootEpic, Services } from './root-epic'
import { rootReducer, RootState } from './root-reducer'

export type MyReducer<S> = Reducer<S, RootAction>
export type MyEpic = Epic<RootAction, RootAction, RootState, Services>

export function configureStore() {
    const store = createStore(rootReducer, applyMiddleware(epicMiddleware))
    epicMiddleware.run(rootEpic)
    return store
}
