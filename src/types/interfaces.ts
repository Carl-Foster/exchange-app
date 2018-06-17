import { Direction } from './enums'

export interface OrderType {
  quantity: number
  price: number
}

export interface OrderMatch {
  quantity_matched: number
  price_matched: number
}

export interface APIOrder extends OrderType {
  direction: Direction
}

export interface FormUpdate<T, K extends keyof T = keyof T> {
  field: K
  value: T[K]
}
