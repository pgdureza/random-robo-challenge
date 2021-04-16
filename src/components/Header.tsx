import {
  AppBar,
  Box,
  createStyles,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
)

const Header: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          ROBOTS - QA
        </Typography>
        {children}
      </Toolbar>
    </AppBar>
  )
}

export default Header
