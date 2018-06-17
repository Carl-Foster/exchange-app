import { combineEpics, createEpicMiddleware } from 'redux-observable'
import * as services from '../services'
import * as epics from './epics'
import { RootAction } from './root-action'
import { RootState } from './root-reducer'

export type Services = typeof services

const allEpics = Object.entries(epics).map(([, value]) => value)
export const rootEpic = combineEpics(...allEpics)
export const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState, Services>({
    dependencies: {
        ...services,
    },
})
