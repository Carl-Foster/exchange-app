import { createAsyncAction } from 'typesafe-actions'
import { Direction } from '../../types/enums'
import { OrderType } from '../../types/interfaces'

export const getDepthAction = createAsyncAction(
  'GET_DEPTH_REQUEST',
  'GET_DEPTH_SUCCESS',
  'GET_DEPTH_FAILURE',
)<Direction, { direction: Direction, orders: OrderType[] }, Error>()
