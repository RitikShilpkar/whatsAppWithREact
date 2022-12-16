import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import Signin from './components/Signin';
import Signup from './components/Signup';
import './App.css'
import Whatsapp from './components/Whatsapp';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useState } from 'react';
import { useStateValue } from './context/userAuth';
import { UserAuthContextProvider } from './context/userAuth';
import Login from './components/Login';
function App() {
  const [ {user} , dispatch] = useStateValue();
  
  // const [user, setuser] = useState(null)
  return (
   <>
    <div className="app">
   
          {!user ? (
          <Login/>
):(
  <div className="app_body">

      <Router>
      <Sidebar user={user}/>
        <Routes>
        <Route path='/rooms/:roomId' element={<Chat/>}/>
        <Route path='/rooms/'/>
        </Routes>
      </Router>
      </div>
     )} 
   

      </div>

   
   </>
  );
}

export default App;
