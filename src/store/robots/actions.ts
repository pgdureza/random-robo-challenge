import { createAction } from '@reduxjs/toolkit'
import { IRobot } from '.'

export const fetch = createAction('robots/fetch')
export const fetchSuccess = createAction<IRobot[]>('robots/fetchSuccess')
export const fetchError = createAction<Error>('robots/fetchError')
export const extinguish = createAction<number>('robots/extinguish')
export const extinguishSuccess = createAction<IRobot>(
  'robots/extinguishSuccess'
)
export const recycle = createAction<number[]>('robots/recycle')
export const ship = createAction<number[]>('robots/ship')
export const addToShipment = createAction<number>('robots/addToShipment')
export const removeFromShipment = createAction<number>(
  'robots/removeFromShipment'
)
