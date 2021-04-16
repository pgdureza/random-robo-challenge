import { Box, Button, Typography } from '@material-ui/core'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRobotsSelector } from '../../hooks/useRobotsSelector'
import { recycle, ship } from '../../store/robots'
import RobotList from '../Robot/List'

const QARobots = () => {
  const dispatch = useDispatch()

  const { robots, isEmpty, isFetching } = useRobotsSelector()
  const [selected, setSelected] = useState<number[]>([])

  if (isEmpty) {
    return (
      <Box p={6}>
        <Typography>No more robots found.</Typography>
      </Box>
    )
  }
  if (isFetching) {
    return <div> loading... </div>
  }

  const onSelect = (selected: number) => {
    setSelected((currentSelected) => [...currentSelected, selected])
  }

  const onUnselect = (unselected: number) => {
    setSelected((currentSelected) =>
      currentSelected.filter((id) => id !== unselected)
    )
  }

  const onRecycle = () => {
    dispatch(recycle(selected))
    setSelected([])
  }

  return (
    <Box>
      <Box textAlign="left" p={3}>
        <Button
          color="inherit"
          variant="outlined"
          onClick={onRecycle}
          disabled={selected.length === 0}
        >
          Recycle
        </Button>
      </Box>
      <RobotList
        robots={robots}
        onSelect={onSelect}
        onUnselect={onUnselect}
        selected={selected}
        actions="qa"
      />
    </Box>
  )
}

export default QARobots
