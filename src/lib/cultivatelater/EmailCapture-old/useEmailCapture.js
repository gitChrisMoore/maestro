import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useEmailCapture = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    
    const handleEmailChange = (e) => {
      e.preventDefault();
      setEmail(e.target.value);
    };

    const handleEmailCaptureClick = async (e) => {
        e.preventDefault();
        // @TODO add validation
        console.log('email ', email)
        if (email) navigate('/enroll/password', {state: {email}});
    };

    return {
      email,
      handleEmailChange,
      handleEmailCaptureClick
    };  
};