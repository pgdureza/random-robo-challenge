import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import { IRobot } from '../../store/robots'
import RobotListItem from './ListItem'

interface IProps {
  robots: IRobot[]
  selected?: number[]
  onSelect?: (id: number) => void
  onUnselect?: (id: number) => void
  actions?: 'qa' | 'ship1' | 'ship2'
}

const RobotList: React.FC<IProps> = ({
  robots,
  onSelect,
  onUnselect,
  selected,
  actions,
}) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {onUnselect && onUnselect && <TableCell>Select</TableCell>}
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Sentience</TableCell>
            <TableCell>Wheels</TableCell>
            <TableCell>Tracks</TableCell>
            <TableCell>Number of Rotors</TableCell>
            <TableCell>Colour</TableCell>
            <TableCell>Status</TableCell>
            {actions && <TableCell>Actions</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {robots.map((props) => (
            <RobotListItem
              key={props.id}
              {...props}
              selected={selected?.includes(props.id)}
              onSelect={onSelect}
              onUnselect={onUnselect}
              actions={actions}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default RobotList
