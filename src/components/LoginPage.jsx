import React from 'react';
import Header from './Header';
const LoginPage = () => {
  return (
    <div className="bg-black h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-gradient-to-r from-customblack1 to-customblack2 rounded-lg p-8 text-white w-full max-w-md">
 
          <h2 className="text-lg font-semibold text-center mb-4">Create a new account</h2>

      
          <button onClick={()=>{
            // window.location.href="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https%3A%2F%2Ffrontend.com"
            window.location.href="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173/onebox"

          }} className="flex items-center justify-center w-full p-3 bg-gray-800 rounded-md mb-4 hover:bg-gray-700">
            <img
              src="/google-logo.png"
              className="h-6 w-6 mr-2"
              alt="Google Icon"
            />
            Sign Up with Google
          </button>

        
          <button className="w-full py-2 content-center bg-gradient-to-r from-customblue1 to-customblue2 rounded-md text-white ">
            Create an Account
          </button>

     
          <div className="mt-4 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <a href="#" className="text-blue-400 hover:underline">Sign In</a>
            </p>
          </div>
        </div>
      </div>
   
      <footer className="text-center text-gray-500 py-4">
        © 2023 ReachInbox. All rights reserved.
      </footer>
    </div>
  );
};

export default LoginPage;
