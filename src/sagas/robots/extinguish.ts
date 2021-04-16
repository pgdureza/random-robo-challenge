import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import {
  extinguish,
  fetchError,
  IRobot,
  extinguishSuccess,
} from '../../store/robots'

const callAPI = async (id: number) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_HOST_API}/robots/${id}/extinguish`
  )
  return data as IRobot
}

function* extinguishRobot(action: ReturnType<typeof extinguish>) {
  try {
    const updatedRobot: IRobot = yield call(callAPI, action.payload)
    yield put(extinguishSuccess(updatedRobot))
  } catch (e) {
    yield put(fetchError(e))
  }
}

function* watchExtinguishRobot() {
  yield takeLatest(extinguish.toString(), extinguishRobot)
}

export { watchExtinguishRobot }
