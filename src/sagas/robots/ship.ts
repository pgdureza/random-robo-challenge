import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { fetchError, ship, fetch } from '../../store/robots'

const callAPI = async (ids: number[]) => {
  await axios.put(`${process.env.REACT_APP_HOST_API}/shipments/create`, {
    ids,
  })
}

function* shipRobots(action: ReturnType<typeof ship>) {
  try {
    yield call(callAPI, action.payload)
    yield put(fetch())
  } catch (e) {
    yield put(fetchError(e))
  }
}

function* watchShipRobots() {
  yield takeLatest(ship.toString(), shipRobots)
}

export { watchShipRobots }
