import React from 'react'; 
import { BrowserRouter , Router, Route, Routes} from 'react-router-dom'
import Landing from '../src/Pages/LandingPage/Landing';
import Auth from '../src/Pages/Web3AuthPage/Auth';

function App() {
  return (
  
    
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing/>} />
             
            
            <Route path="/auth" element={<Auth/>}/>
          </Routes>
        </BrowserRouter>
      
   
  )
}

export default App;



