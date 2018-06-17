import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export type RootAction = ActionType<typeof actions>

type DiscriminateUnion<T, K extends keyof T, V extends T[K]> =
    T extends Record<K, V> ? T : never
export type GetAction<T extends RootAction['type']> = DiscriminateUnion<RootAction, 'type', T>
