import robotsReducer from './reducer'

interface IRobot {
  id: number
  name: string
  configuration: {
    hasSentience: boolean
    hasWheels: boolean
    hasTracks: boolean
    numberOfRotors: number
    colour: string
  }
  statuses: string[]
}

interface IRobotState {
  batch: IRobot[]
  isFetching: boolean
  error?: Error
  toBeShippedIds: number[]
}

export type { IRobot, IRobotState }
export * from './actions'
export default robotsReducer
