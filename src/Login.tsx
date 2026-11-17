interface LoginProps {
    onSwitchToRegister: () => void;
}

function Login({ onSwitchToRegister }: LoginProps) {
    return (
  <>

   <div className="border border-gray-200 p-6 w-full shadow-sm max-w-sm mx-auto rounded-xl">
    <h2 className="text-xl font-bold mb-6 ">Welcome back</h2> 

    <form className="space-y-4 ">
        <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input type="email" className="w-full border border-gray-300 rounded-md p-2 outline-none " />
        </div>

        <div>
        <label className="block text-sm font-medium mb-2">Password</label>
        <input type="password" className="w-full border border-gray-300 rounded-md p-2 outline-none " />
        </div>
       
       <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md py-3">Login</button> 
    </form>

    <p className="text-center text-sm mt-5 text-gray-500">Don't have an account? <button  onClick={onSwitchToRegister} className="text-green-500 font-semibold">Register</button></p>
   </div>

  </>
    );
}

export default Login; 