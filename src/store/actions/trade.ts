import { createAsyncAction, createStandardAction } from 'typesafe-actions'
import { Direction } from '../../types/enums'
import { APIOrder, FormUpdate, OrderMatch, OrderType } from '../../types/interfaces'

export const tradeFormChange = createStandardAction('TRADE_FORM_CHANGE')<FormUpdate<OrderType>>()
export const placeTradeAction = createAsyncAction(
  'PLACE_TRADE_REQUEST',
  'PLACE_TRADE_SUCCESS',
  'PLACE_TRADE_FAILURE',
)<APIOrder, OrderMatch[], Error>()
