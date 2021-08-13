import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/home'
import Prizing from './Pages/prizing'
import Rules from './Pages/rules'
import Terms from './Pages/terms'
import Collect from './Pages/collect'
import Ready from './Pages/ready'
import Draw from './Pages/draw'
import Prize from './Pages/prize'
import ThanksForPlaying from './Pages/thanksforplaying'
import ThanksForEntry from './Pages/thanksforentry'
import Game from './Pages/game'

function App() {
return (
<Router basename={process.env.PUBLIC_URL}>
  <Switch>
    <Route path='/' exact strict component={Home} />
    <Route path='/prizing' exact strict component={Prizing} />
    <Route path='/game' exact strict component={Game} />
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
