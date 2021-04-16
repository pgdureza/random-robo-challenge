import { useRobotsSelector } from '../../hooks/useRobotsSelector'
import RobotList from '../Robot/List'

const ShippingFactorySeconds: React.FC = () => {
  const { factorySeconds } = useRobotsSelector()

  return <RobotList robots={factorySeconds} actions="ship1" />
}

export default ShippingFactorySeconds
