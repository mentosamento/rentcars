import React, { useEffect, useRef, useState } from 'react'
import { auth } from '../../firebase';
import { PhoneAuthProvider, RecaptchaVerifier, signInWithCredential, signInWithPhoneNumber } from 'firebase/auth';
import "./AddMain.css"
import OtpInput from 'react-otp-input';
import PhoneInput from 'react-phone-input-2';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { useNavigate } from 'react-router-dom';


function AddMain() {
  const [step1, setStep1] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [back, setBack] = useState(true);
  const [verificationId, setVerificationId] = useState("");
  const recaptchaRef = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
    if (phoneNumber.length != 12) {
      setButtonEnabled(false);
    }
    else {
      setButtonEnabled(true);
    }
  }, [phoneNumber])


    const handleSendOtp = (phone) => {
      console.log(phone);
      if (recaptchaRef.current) {
          recaptchaRef.current.innerHTML = "<div id='recaptcha-verifier'></div>"
      }

      const verifier = new RecaptchaVerifier(auth, "recaptcha-verifier", {
          size: "invisible"
      });

      signInWithPhoneNumber(auth, phone, verifier)
      .then(confirmationResult => {
          setVerificationId(confirmationResult.verificationId);
      })
      .catch(error => {
          console.error("Error Sending OTP", error);
      });
    }

    const handleVerifyOTP = () => {
        const credentials = PhoneAuthProvider.credential(verificationId, verificationCode);
        signInWithCredential(auth ,credentials)
        .then(userCredential => {
            console.log("User logged in", userCredential);
            console.log("Your phone number: ", userCredential.user.phoneNumber);
            changeDirectory();
        })
        .catch(error => {
            console.error("The fuck", error);
            setBack(true);
        })


    }

    const changeDirectory = async () => {
      
      await navigate("/search");
    }

    useEffect(() => {
      if (verificationCode.length == 6) {
        setBack(false);
        handleVerifyOTP();
      }
    }, [verificationCode])

  
  function FirstPage() {

    
    return (
      <React.Fragment>
        <h1 className='title-1'>Hesaba giriş</h1>
        <h2 className='subtitle-1'>SMS kodu daxil edin</h2>
        <OtpInput
          value={verificationCode}
          onChange={setVerificationCode}
          
          numInputs={6}
          renderSeparator={<div style={{width: "2%"}}></div>}
          renderInput={(props) => <input {...props} style={{fontSize: "2.2rem", width: "11%", textAlign: "center", paddingTop: "2.5%", paddingBottom: "2.5%", borderRadius: "6px", borderWidth: "2px", borderColor: "#d1d1d1", borderStyle: "solid", fontFamily: "Inter"}}/>}
          containerStyle={{justifyContent: "center", marginTop: "7%"}}/>
      </React.Fragment>
    )
  }

  function SecondPage() {
    return (
      <React.Fragment>
        <h1 className='title-1'>Hesaba giriş</h1>
        <h2 className='subtitle-1'>Telefon nömrənizi daxil edin</h2>
        <PhoneInput
        country="az"
        placeholder="Enter phone number"
        countryCodeEditable={true}
        value={phoneNumber}
        onChange={(phone) => {setPhoneNumber(phone)}}
        inputStyle={{marginTop: "6%",width: "85%", fontSize: "1.05rem", fontFamily: "Inter", paddingTop: "2.2%", paddingBottom: "2.2%", paddingLeft: "3%", borderRadius: "12px", borderStyle: "solid", borderColor: "#d1d1d1", paddingRight: "2%"}}
        specialLabel={""}
        
        
        />
        <button 
        className='sms-button'
        onClick={() => {handleSendOtp("+" +  phoneNumber);setStep1(false)}}
        style={{opacity: buttonEnabled ? "1" : "0.6", cursor: buttonEnabled ? "pointer" : "unset"}}
        disabled={buttonEnabled ? false : true}>
          SMS göndər
        </button>
        
      </React.Fragment>
    )
  }


  return (
    <>
    <div className="arrowback" style={{visibility: step1 ? "hidden" : "visible"}} onClick={() => { if (back) {setStep1(true)}}} >
        <MaterialIcon icon="arrow_back" size={35} color="#858585" />
    </div>
    <div className='add-main-container'>
      <div ref={ recaptchaRef }></div>
      <div className='choose-reg-type'>
        {step1 ? SecondPage() : FirstPage()}
      </div>
    </div>
    </>
    
  )
};

export default AddMain;