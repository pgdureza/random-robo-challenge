import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { selectRobotIdsForShipment } from '../../store/robots/selectors'
import { IApplicationState } from '../../store'
import { ship } from '../../store/robots'

const ShippingComplete = () => {
  const dispatch = useDispatch()
  const { ids } = useSelector((state: IApplicationState) => ({
    ids: selectRobotIdsForShipment(state),
  }))
  const { push } = useHistory()
  const onClick = () => {
    dispatch(ship(ids))
    push('/')
  }
  return (
    <Button
      onClick={onClick}
      color="primary"
      variant="contained"
      disabled={ids.length === 0}
    >
      Ship Robots
    </Button>
  )
}

export default ShippingComplete
