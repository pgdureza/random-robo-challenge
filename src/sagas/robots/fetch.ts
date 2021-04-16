import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { fetch, fetchError, fetchSuccess, IRobot } from '../../store/robots'

const callAPI = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_HOST_API}/robots`)
  return data as IRobot[]
}

function* fetchRobots(action: ReturnType<typeof fetch>) {
  try {
    const robots: IRobot[] = yield call(callAPI)
    yield put(fetchSuccess(robots))
  } catch (e) {
    yield put(fetchError(e))
  }
}

function* watchFetchRobots() {
  yield takeLatest(fetch.toString(), fetchRobots)
}

export { watchFetchRobots }
