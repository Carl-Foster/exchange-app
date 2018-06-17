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

const handleDepthUpdate: MyReducer<DepthState[Direction.buy | Direction.sell]> = (state: OrderType[] = [], action) => {
    switch (action.type) {
        case getType(getDepthAction.success):
            return action.payload
        default: return state
    }
}

export const depth = combineReducers<DepthState>({
    [Direction.buy]: handleDepthUpdate,
    [Direction.sell]: handleDepthUpdate,
})
