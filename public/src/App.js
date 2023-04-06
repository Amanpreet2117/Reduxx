import logo from './logo.svg';
import './App.css';

import Dataapi from './Components/Dataapi';
import Apicontainer from './Contaner/Apicontainer';
// import { Store } from 'redux';
import store from './Store/store';

import { Provider } from 'react-redux';
// import { Provider } from 'react';
import Addcart from './Components/Addcart';
import Viewredux from './Components/Viewredux';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './Components/Header';
// import Viewredux from './Components/Viewredux';
// import Dataapi from './Components/Dataapi';
function App() {
  
  return (

   <>
   <Provider store={store}>
    <Router>
      <Header/>
      <Routes>
      <Route path="/viewredux" element={<Viewredux/>}/>
      <Route path="/" element={<Dataapi/>}/>
      <Route path="/Dataapi" element={<Dataapi/>}/>


   {/* <Viewredux/>
   <Addcart/>
    <Dataapi/> */}
    </Routes>
    </Router>
   </Provider>
   </>
  );
}

export default App;
