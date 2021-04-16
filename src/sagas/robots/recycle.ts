import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { recycle, fetchError, IRobot, fetchSuccess } from '../../store/robots'

const callAPI = async (recycleRobots: number[]) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_HOST_API}/robots/recycle`,
    {
      recycleRobots,
    }
  )
  return data as IRobot[]
}

function* recycleRobots(action: ReturnType<typeof recycle>) {
  try {
    const robots: IRobot[] = yield call(callAPI, action.payload)
    yield put(fetchSuccess(robots))
  } catch (e) {
    yield put(fetchError(e))
  }
}

function* watcRecycleRobots() {
  yield takeLatest(recycle.toString(), recycleRobots)
}

export { watcRecycleRobots }
