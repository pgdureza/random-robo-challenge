import { useRobotsSelector } from '../../hooks/useRobotsSelector'
import RobotList from '../Robot/List'

const ShippingPassedQA: React.FC = () => {
  const { qaPassed } = useRobotsSelector()
  return <RobotList robots={qaPassed} actions="ship1" />
}

export default ShippingPassedQA
