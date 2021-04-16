import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetch } from '../store/robots/actions'

const useRobotsFetcher = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetch())
  }, [])
}

export { useRobotsFetcher }
