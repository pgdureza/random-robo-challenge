import { createSelector } from 'reselect'
import { IApplicationState } from '..'

export const selectRobots = (state: IApplicationState) => state.robots.batch

export const selectIsFetchingRobots = (state: IApplicationState) =>
  state.robots.isFetching

export const selectRobotIdsForShipment = (state: IApplicationState) =>
  state.robots.toBeShippedIds

export const selectRobotsForShipment = createSelector(
  selectRobotIdsForShipment,
  selectRobots,
  (ids, robots) => robots.filter((robot) => ids.includes(robot.id))
)

export const selectFactorySeconds = createSelector(
  selectRobots,
  selectRobotIdsForShipment,
  (robots, idsForShipment) =>
    robots.filter(
      (robot) =>
        !idsForShipment.includes(robot.id) &&
        (robot.statuses.includes('loose screws') ||
          robot.statuses.includes('paint scratched') ||
          robot.statuses.includes('rusy'))
    )
)

export const selectQAPassed = createSelector(
  selectRobots,
  selectRobotIdsForShipment,
  (robots, idsForShipment) =>
    robots.filter(
      (robot) =>
        !idsForShipment.includes(robot.id) &&
        !robot.statuses.includes('loose screws') &&
        !robot.statuses.includes('paint scratched') &&
        !robot.statuses.includes('rusy')
    )
)
