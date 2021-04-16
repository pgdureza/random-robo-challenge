import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas'
import logger from 'redux-logger'

import robotsReducer, { IRobotState } from './robots'

const sagaMiddleware = createSagaMiddleware()

interface IApplicationState {
  robots: IRobotState
}

export type { IApplicationState }

const store = configureStore({
  reducer: {
    robots: robotsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger).concat(sagaMiddleware),
})

sagaMiddleware.run(sagas)

export { store }
