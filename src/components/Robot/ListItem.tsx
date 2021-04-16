import {
  TableCell,
  TableRow,
  Chip,
  createStyles,
  makeStyles,
  Theme,
  Checkbox,
} from '@material-ui/core'
import { IRobot } from '../../store/robots'
import RobotAddToShipment from './AddToShipment'
import RobotRemoveFromShipment from './RemoveFromShipment'
import RobotExtinguish from './Extinguish'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chip: {
      margin: theme.spacing(0.5),
    },
  })
)

interface IProps extends IRobot {
  selected?: boolean
  onSelect?: (id: number) => void
  onUnselect?: (id: number) => void
  actions?: string
}

const RobotListItem: React.FC<IProps> = ({
  id,
  configuration,
  name,
  statuses,
  selected,
  onSelect,
  onUnselect,
  actions,
}) => {
  const classes = useStyles()

  const onClick = () => {
    if (selected) {
      onUnselect?.(id)
    } else {
      onSelect?.(id)
    }
  }

  const isRecyclable =
    (configuration.numberOfRotors < 3 || configuration.numberOfRotors) > 8 ||
    configuration.colour === 'blue' ||
    (configuration.hasWheels && configuration.hasTracks) ||
    (configuration.hasSentience && statuses.includes('screws loose')) ||
    statuses.includes('on fire')

  return (
    <TableRow>
      {onUnselect && onUnselect && (
        <TableCell padding="checkbox">
          <Checkbox
            checked={selected}
            onClick={onClick}
            disabled={!isRecyclable}
          />
        </TableCell>
      )}
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{configuration.hasSentience ? 'Yes' : 'No'}</TableCell>
      <TableCell>{configuration.hasWheels ? 'Yes' : 'No'}</TableCell>
      <TableCell>{configuration.hasTracks ? 'Yes' : 'No'}</TableCell>
      <TableCell>{configuration.numberOfRotors}</TableCell>
      <TableCell>{configuration.colour}</TableCell>
      <TableCell>
        {statuses.map((status: string) => (
          <Chip className={classes.chip} key={status} label={status} />
        ))}
      </TableCell>
      {actions && (
        <TableCell width="200">
          {actions === 'qa' && (
            <RobotExtinguish id={id} disabled={!statuses.includes('on fire')} />
          )}
          {actions === 'ship1' && <RobotAddToShipment id={id} />}
          {actions === 'ship2' && <RobotRemoveFromShipment id={id} />}
        </TableCell>
      )}
    </TableRow>
  )
}

export default RobotListItem
