import React, { useState } from "react";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-zinc-950 text-white p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[120px]" />
      </div>

      {/* Main Card */}
      <div className="w-full max-w-md bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl relative z-10 overflow-hidden">
        {/* Animated Form Container */}
        <div className="p-8">
          {isLogin ? (
            <Signin onToggle={() => setIsLogin(false)} />
          ) : (
            <Signup onToggle={() => setIsLogin(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
