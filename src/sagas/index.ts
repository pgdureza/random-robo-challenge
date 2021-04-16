import { fork } from 'redux-saga/effects'
import {
  watchFetchRobots,
  watcRecycleRobots,
  watchExtinguishRobot,
  watchShipRobots,
} from './robots'

export default function* rootSaga() {
  yield fork(watchFetchRobots)
  yield fork(watcRecycleRobots)
  yield fork(watchExtinguishRobot)
  yield fork(watchShipRobots)
}
