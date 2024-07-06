import { useState } from "react"
import CheckOtpForm from "src/configs/templates/CheckOtpForm"
import SendOtpForm from "src/configs/templates/SendOtpForm"


function AuthPage() {
    const[step,setStep]=useState(1)
    const[mobile,setMobile]=useState("")
    const[code,setCode]=useState("")
  return (
    <div>
    {step ===1 && ( <SendOtpForm mobile={mobile} setMobile={setMobile} setStep={setStep}/>)}
    {step ===2 &&(<CheckOtpForm code={code} setStep={setStep} setCode={setCode} mobile={mobile}/>)}
    </div>
  
  )
}

export default AuthPage