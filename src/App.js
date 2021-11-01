
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import Navbar from './Components/Navbar/Navbar';
import AddPackeges from './pages/AddPackeges/AddPackeges';
import Booking from './pages/Booking/Booking';
import Home from './pages/Home/Home';
import SignIn from './pages/Login/Login';
import MyTrips from './pages/MyTrips/MyTrips';

import PrivateRoute from './Components/Hooks/PrivateRoute';


import NotFound from './pages/NotFound/NotFound';
import Footer from './Footer/Footer';





function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/"> <Home></Home> </Route>
            <Route path="/home"> <Home></Home> </Route>
            <Route path="/login"> <SignIn></SignIn> </Route>
            <Route path="/addPackeges"> <AddPackeges></AddPackeges> </Route>
            <PrivateRoute path="/packege/:packegeId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/myTrips">
              <MyTrips></MyTrips>
            </PrivateRoute>

            
            <Route path="*"> <NotFound></NotFound> </Route>


          </Switch>
          <Footer></Footer>



        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
