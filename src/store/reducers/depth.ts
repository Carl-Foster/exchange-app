import { combineReducers } from 'redux'
import { getType } from 'typesafe-actions'
import { MyReducer } from '..'
import { Direction } from '../../types/enums'
import { OrderType } from '../../types/interfaces'
import { getDepthAction } from '../actions'

interface DepthState {
  [Direction.buy]: OrderType[]
  [Direction.sell]: OrderType[]
}

const handleDepthUpdate = (direction: Direction): MyReducer<OrderType[]> => (state = [], action) => {
  switch (action.type) {
    case getType(getDepthAction.success):
      return action.payload.direction === direction ? action.payload.orders : state
    default: return state
  }
}

export const depth = combineReducers<DepthState>({
  [Direction.buy]: handleDepthUpdate(Direction.buy),
  [Direction.sell]: handleDepthUpdate(Direction.sell),
})
