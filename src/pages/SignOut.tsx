
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/components/AuthProvider";

const SignOut = () => {
  const { signOut } = useAuth();
  
  useEffect(() => {
    const performSignOut = async () => {
      await signOut();
    };
    
    performSignOut();
  }, [signOut]);
  
  return <Navigate to="/signin" replace />;
};

export default SignOut;
