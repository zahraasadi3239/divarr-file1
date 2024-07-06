import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { checkOtp } from 'src/services/auth';
import { getProfile } from 'src/services/user';
import { setCookie } from 'src/utils/cookie';
import styles from "./CheckOtp.module.css"
function CheckOtpForm({code,setStep,setCode,mobile}) {
  const navigate = useNavigate()
  const {refetch}= useQuery(["profile"], getProfile);
  const submitHandler= async(event)=>{
    event.preventDefault();
    if(code.length !==5) return;
    const {response,error}=await checkOtp(mobile,code);
    console.log({response,error})
    if(response) {
      setCookie(response.data);
    navigate("/"); 
    refetch();
    }
    if(error){
      console.log(error)
    }
  }
  return (
  <form onSubmit={submitHandler} className={styles.form }>
<p>تایید کد اس ام اس شده</p>
<span>کدپیامک شده به شماره«{mobile}»راواردکنید.</span>
<label htmlFor='input'>کدتاییدراواردکنید</label>
<input type="text" id="input" placeholder='کدتایید'
 value={code} onChange={(e)=>setCode(e.target.value)}/>
<button type='submit'>ورود</button>
<button type='submit' onClick={()=>setStep(1)} className={styles.backButton}> تغییرشماره موبایل</button>
  </form>
  )
}

export default CheckOtpForm