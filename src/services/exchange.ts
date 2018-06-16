import { Direction } from '../types/enums';
import { OrderType } from '../types/interfaces';
import { v4 } from 'uuid'

const URL = 'http://192.168.0.14:8000/contracts/1'

interface APIOrder extends OrderType {
  direction: Direction
}

export async function getDepth(direction: Direction): Promise<OrderType[]> {
  const response = await fetch(`${URL}/depth/${direction}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  const orders: APIOrder[] = await response.json()
  const compare = (a: APIOrder, b: APIOrder) => direction === Direction.buy ? b.price > a.price : a.price > b.price
  return orders.sort((a, b) => compare(a, b) ? 1 : -1)
}

export async function placeOrder(order: APIOrder) {
  const account_id = v4()
  const response = await fetch(`${URL}/orders`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...order, account_id })
  })
  const matches = await response.json()
  return matches
}