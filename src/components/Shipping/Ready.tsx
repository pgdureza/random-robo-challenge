import { Box } from '@material-ui/core'
import { useRobotsSelector } from '../../hooks/useRobotsSelector'
import RobotList from '../Robot/List'
import ShippingComplete from './Complete'

const ShippingReady: React.FC = () => {
  const { forShipment } = useRobotsSelector()
  return (
    <>
      <RobotList robots={forShipment} actions="ship2" />
      <Box p={3} textAlign="right">
        <ShippingComplete />
      </Box>
    </>
  )
}

export default ShippingReady
