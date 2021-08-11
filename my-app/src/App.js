import NavBar from './component/NavBar'
import{BrowserRouter} from 'react-router-dom'
import{Route,Switch} from 'react-router-dom'
import Todo from './component/Todo'
import Login from './component/Login';
import Signup from './component/Signup';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route  exact path="/">
          <Todo/> 
        </Route>
        <Route path="/login">
          <Login/> 
        </Route>
        <Route path="/signup">
          <Signup/> 
        </Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
