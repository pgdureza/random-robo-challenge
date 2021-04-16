import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useRobotsFetcher } from '../../hooks/useRobotsFetcher'
import Header from '../Header'
import QARobots from './Robots'

const QAPage = () => {
  useRobotsFetcher()
  return (
    <>
      <Header>
        <Link to="/shipping" component={Button} color="inherit">
          Proceed to Shipping
        </Link>
      </Header>
      <QARobots />
    </>
  )
}

export default QAPage
