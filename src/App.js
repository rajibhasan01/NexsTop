import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';

import Register from './Pages/Login/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Header/Navbar';
import NotFound from './Pages/NotFound/NotFound';
import ServiceProvider from './Pages/ServiceProvider/ServiceProvider';
import Guides from './Pages/Guides/Guides/Guides';
import GuideDetails from './Pages/Guides/GuideDetails/GuideDetails';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import SingleServiceDetails from './Pages/SingleServiceDetails/SingleServiceDetails';



function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/servicesprovider' component={ServiceProvider} />
            <Route path='/guides' component={Guides} />
            <Route path='/guide/:drID' component={GuideDetails} />
            <PrivateRoute path='/tourplaces/:tourID'>
              <SingleServiceDetails />
            </PrivateRoute>
            <Route path='*' component={NotFound} />

          </Switch>
          <Footer />
        </Router>
      </ AuthProvider>
    </>
  );
}

export default App;
