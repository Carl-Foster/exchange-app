import { RouterState } from 'connected-react-router'
import { combineReducers } from 'redux'
import { MyReducer } from '.'
import * as reducers from './reducers'

type ReducerState = {
    [K in keyof typeof reducers]: ReturnType<typeof reducers[K]>
}

export type RootState = ReducerState & { router: RouterState }

export const rootReducer: MyReducer<ReducerState> = combineReducers(reducers)
