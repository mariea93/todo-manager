import {useState} from "react";
import Login from './Login';
import Register from './Register'; 

function App() {
    const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="min-h-screen flex items-center justify-center p-6"> 
    
   {isLogin ? <Login onSwitchToRegister={() => setIsLogin(false)} /> : <Register onSwitchToLogin={() => setIsLogin(true)} />}
    </div>
  )
}

export default App 