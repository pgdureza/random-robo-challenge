import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { extinguish } from '../../store/robots'

interface IProps {
  id: number
  disabled: boolean
}

const RobotExtinguish: React.FC<IProps> = ({ id, disabled }) => {
  const dispatch = useDispatch()
  const onClick = () => {
    dispatch(extinguish(id))
  }
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={onClick}
      disabled={disabled}
    >
      Extinguish
    </Button>
  )
}

export default RobotExtinguish
