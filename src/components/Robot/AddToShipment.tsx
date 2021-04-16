import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { addToShipment } from '../../store/robots'

interface IProps {
  id: number
}

const RobotAddToShipment: React.FC<IProps> = ({ id }) => {
  const dispatch = useDispatch()
  const onClick = () => {
    dispatch(addToShipment(id))
  }
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      Add To Shipment
    </Button>
  )
}

export default RobotAddToShipment
