import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { removeFromShipment } from '../../store/robots'

interface IProps {
  id: number
}

const RemoveFromShipment: React.FC<IProps> = ({ id }) => {
  const dispatch = useDispatch()
  const onClick = () => {
    dispatch(removeFromShipment(id))
  }
  return (
    <Button variant="contained" color="secondary" onClick={onClick}>
      Remove
    </Button>
  )
}

export default RemoveFromShipment
