import { combineReducers } from 'redux'
import { MyReducer } from '.'
import * as reducers from './reducers'

export type RootState = {
    [K in keyof typeof reducers]: ReturnType<typeof reducers[K]>
}

export const rootReducer: MyReducer<RootState> = combineReducers(reducers)
