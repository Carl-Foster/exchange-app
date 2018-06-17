import { combineReducers } from 'redux'
import { getType } from 'typesafe-actions'
import { MyReducer } from '..'
import { OrderType } from '../../types/interfaces'
import { placeTradeAction, tradeFormChange } from '../actions'

type Nullable<T> = {
  [K in keyof T]: T[K] | null
}

interface TradeState {
  form: Nullable<OrderType>
}

type HandleFormChange<T, K extends keyof T = keyof T> = (k: K) => MyReducer<T[K]>
const handleChange: HandleFormChange<TradeState['form']> = (key) => (state = null, action) => {
  switch (action.type) {
    case getType(tradeFormChange):
      return action.payload.field === key ? action.payload.value : state
    case getType(placeTradeAction.success):
      return null
    default: return state
  }
}

export const trade = combineReducers<TradeState>({
  form: combineReducers<TradeState['form']>({
    price: handleChange('price'),
    quantity: handleChange('quantity'),
  }),
})
