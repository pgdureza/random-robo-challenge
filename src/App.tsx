import 'dotenv'
import { Provider } from 'react-redux'
import { store } from './store'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import QAPage from './components/QA/Page'
import ShippingPage from './components/Shipping/Page'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/shipping">
            <ShippingPage />
          </Route>
          <Route path="/">
            <QAPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
