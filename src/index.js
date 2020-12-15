import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/home';
import Services from './screens/services';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebFont from 'webfontloader';
import Education from './screens/education';
import Balayage from './screens/balayage';
import Extensions from './screens/extension';
import Business from './screens/business';
import Photography from './screens/photoclass';
import SideBar from './components/SideBar';
import Faqs from './screens/faq';
import NotFound from './components/NotFoundPage';


WebFont.load({
  google: {
    families: ['Allura', 'sans-serif', 'Alex_Brush', 'Poiret_One', 'Forum', 'Lora', 'Antic_Slab', 'Old_Standard_TT', 'Spartan']
  }
});




function App() {
  return (
  <div className='App'>
    <Router>
    <SideBar />
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/educationforprofessionals' component={Education}/>
      <Route path='/services' component={Services}/>
      <Route exact path='/balayage' component={Balayage} />
      <Route exact path='/extensions' component={Extensions} />
      <Route exact path='/business' component={Business} />
      <Route exact path='/photography' component={Photography} />
      <Route exact path='/faqs' component={Faqs} />
      <Route component={NotFound} />
    </Switch>
  </Router>
  </div>
  );
}
  



ReactDOM.render(<App />,
  document.getElementById('root'));

  export default App;


