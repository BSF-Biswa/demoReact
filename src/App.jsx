import './App.css'
import Login from './Component/login';
import Signup from './Component/signup';
// import Accordian from './Component/Accordian';
import { Carousel } from './Component/Carousel';
import Demo from "./Component/Demo";
// import Grid from "./Component/Grid";
import {Routes,Route} from 'react-router-dom'
import Api from './Component/api';
//import SignUp from './Component/signup2';
import Api2 from './Component/Api2';
function App() {

  
  return (
    <>
     {/* <SignUp /> */}
      {/* <Api /> */}
      {/* <Login />
      <Signup /> */}
       {/* <Demo/>
       <Carousel/>
       <Accordian/>
       <Grid /> */}

       <Api2 />

      {/* <Routes>

          <Route path="/" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Demo/>}/> */}
          {/* <Route path="/signup" element={<Signup/>}/> */}
          {/* <Route path="/Car" element={<Carousel/>}/>
          <Route path="/Api" element={<Api/>}/>
          
          
      </Routes> */}

      {/* <Routes>
        <Route path="/Api2" element={<Api2/>}/>
      </Routes> */}
      
    </>
    
  )
}

export default App
