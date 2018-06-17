import { v4 } from 'uuid'
import { Direction } from '../types/enums'
import { OrderType } from '../types/interfaces'

import { ajax } from 'rxjs/ajax'
import { map } from 'rxjs/operators'

const URL = 'http://192.168.0.30:8000/contracts/1'

interface APIOrder extends OrderType {
  direction: Direction
}

export function getDepth(direction: Direction) {
  const directionalCompare = (a: OrderType, b: OrderType) =>
    direction === Direction.buy
      ? b.price > a.price
      : a.price > b.price
  return ajax.getJSON<OrderType[]>(`${URL}/depth/${direction}`).pipe(
    map((orders) => orders.sort((a, b) => directionalCompare(a, b) ? 1 : -1)),
  )
}

export async function placeOrder(order: APIOrder) {
  const response = await fetch(`${URL}/orders`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...order, account_id: v4() }),
  })
  const matches = await response.json()
  return matches
}
