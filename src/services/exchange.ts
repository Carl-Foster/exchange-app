import { v4 } from 'uuid'
import { Direction } from '../types/enums'
import { APIOrder, OrderMatch, OrderType } from '../types/interfaces'

import { ajax } from 'rxjs/ajax'
import { map } from 'rxjs/operators'

const URL = 'http://192.168.0.30:8000/contracts/1'

export function getDepth(direction: Direction) {
  const directionalCompare = (a: OrderType, b: OrderType) =>
    direction === Direction.buy
      ? b.price > a.price
      : a.price > b.price
  return ajax.getJSON<OrderType[]>(`${URL}/depth/${direction}`).pipe(
    map((orders) => orders.sort((a, b) => directionalCompare(a, b) ? 1 : -1).slice(0, 3)),
  )
}

export function placeOrder(order: APIOrder) {
  return ajax({
    url: `${URL}/orders`,
    method: 'post',
    body: {
      ...order, account_id: v4(),
    },
    headers: { 'Content-Type': 'application/json' },
    responseType: 'json',
  }).pipe(
    map((response): OrderMatch[] => response.response),
  )
}
