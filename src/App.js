import {Route, Switch, Redirect} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import NotFound from './components/NotFoundRoute'
import JobItemDetailsRoute from './components/JobItemDetailsRoute'
import JobsRoute from './components/JobsRoute'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginRoute} />
    <ProtectedRoute exact path="/" component={HomeRoute} />
    <ProtectedRoute exact path="/jobs" component={JobsRoute} />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetailsRoute} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
