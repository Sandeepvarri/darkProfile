import './App.css';
import HomeComponent from './components/Home/HomeComponent';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
import ProjectComponent from './components/Projects/ProjectComponent';
import ContactComponent from './components/Contact/ContactComponent';
import NavigationComponent from './components/Navigation/NavigationComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationComponent />
        <div className='content-container'>
          <Switch>
            <Route exact path={['/', '/home']} component={HomeComponent} />
            <Route exact path='/projects' component={ProjectComponent} />
            <Route exact path='/contact' component={ContactComponent} />
            <Route path='*' component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
