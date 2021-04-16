import { useSelector } from 'react-redux'
import { IApplicationState } from '../store'
import {
  selectRobots,
  selectIsFetchingRobots,
  selectFactorySeconds,
  selectQAPassed,
  selectRobotsForShipment,
} from '../store/robots/selectors'

const useRobotsSelector = () => {
  const {
    robots = [],
    isFetching,
    forShipment,
    qaPassed,
    factorySeconds,
  } = useSelector((state: IApplicationState) => ({
    robots: selectRobots(state),
    isFetching: selectIsFetchingRobots(state),
    factorySeconds: selectFactorySeconds(state),
    qaPassed: selectQAPassed(state),
    forShipment: selectRobotsForShipment(state),
  }))

  return {
    isEmpty: !isFetching && robots.length === 0,
    robots,
    isFetching,
    factorySeconds,
    qaPassed,
    forShipment,
  }
}

export { useRobotsSelector }
