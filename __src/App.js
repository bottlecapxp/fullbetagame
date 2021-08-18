import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/home'
import Prizing1 from './Pages/prizing-1'
import Prizing2 from './Pages/prizing-2'
import Rules from './Pages/rules'
import Terms from './Pages/terms'
import Collect from './Pages/collect'
import Ready from './Pages/ready'
import Draw from './Pages/draw'
import Prize from './Pages/prize'
import ThanksForPlaying from './Pages/thanksforplaying'
import ThanksForEntry from './Pages/thanksforentry'

function App() {
return (
<Router>
  <Switch>
    <Route path='/' exact strict component={Home} />
    <Route path='/prizing-1' exact strict component={Prizing1} />
    <Route path='/prizing-2' exact strict component={Prizing2} />
    <Route path='/rules' exact strict component={Rules} />
    <Route path='/terms' exact strict component={Terms} />
    <Route path='/collect' exact strict component={Collect} />
    <Route path='/ready' exact strict component={Ready} />
    <Route path='/draw' exact strict component={Draw} />
    <Route path='/prize' exact strict component={Prize} />
    <Route path='/thanksforplaying' exact strict component={ThanksForPlaying} />
    <Route path='/thanksforentry' exact strict component={ThanksForEntry} />
  </Switch>
</Router>

)

}

export default App;
