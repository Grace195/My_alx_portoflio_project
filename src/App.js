import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import AboutUs from "./pages/AboutUs/AboutUs"
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    
      <Router>
          <GlobalStyles />
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/aboutus' component={AboutUs} />
            <Route path='/products' component={Products} />
            <Route path='/sign-up' component={SignUp} />
          </Switch>
          <Footer />
      </Router>
        
    
  );
}

export default App;
