import Header from '../Header'
import ShippingPassedQA from './PassedQA'
import ShippingReady from './Ready'
import ShippingFactorySeconds from './FactorySeconds'
import { Button, Tab, Tabs } from '@material-ui/core'
import { useState } from 'react'
import { useRobotsFetcher } from '../../hooks/useRobotsFetcher'
import { Link } from 'react-router-dom'

const ShippingPage = () => {
  useRobotsFetcher()

  const [value, setValue] = useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      <Header>
        <Link to="/" component={Button} color="inherit">
          Back to QA
        </Link>
      </Header>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        <Tab label="Passed QA" />
        <Tab label="Factory Seconds" />
        <Tab label="Ready to Ship" />
      </Tabs>
      {value === 0 && <ShippingPassedQA />}
      {value === 1 && <ShippingFactorySeconds />}
      {value === 2 && <ShippingReady />}
    </>
  )
}

export default ShippingPage
