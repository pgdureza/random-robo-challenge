import { createReducer } from '@reduxjs/toolkit'
import { IRobotState } from '.'
import {
  fetch,
  fetchError,
  fetchSuccess,
  recycle,
  extinguishSuccess,
  addToShipment,
  ship,
  removeFromShipment,
} from './actions'

const initialState: IRobotState = {
  batch: [],
  isFetching: false,
  toBeShippedIds: [],
  error: undefined,
}

const robotsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetch, (state) => {
      state.isFetching = true
    })
    .addCase(fetchSuccess, (state, action) => {
      state.isFetching = false
      state.batch = action.payload
    })
    .addCase(fetchError, (state, action) => {
      state.isFetching = false
      state.error = action.payload
    })
    .addCase(recycle, (state, action) => {
      state.batch = state.batch.filter(
        (item) => !action.payload.includes(item.id)
      )
    })
    .addCase(extinguishSuccess, (state, action) => {
      const robot = state.batch.find((item) => item.id === action.payload.id)!
      robot.statuses = action.payload.statuses
    })
    .addCase(addToShipment, (state, action) => {
      state.toBeShippedIds.push(action.payload)
    })
    .addCase(removeFromShipment, (state, action) => {
      state.toBeShippedIds = state.toBeShippedIds.filter(
        (id) => id !== action.payload
      )
    })
    .addCase(ship, (state) => {
      state.toBeShippedIds = []
    })
})

export default robotsReducer
