import React from 'react'
import { sendOtp } from 'src/services/auth';
import styles from "./SendOtpForm.module.css"

function SendOtpForm({mobile,setMobile,setStep}) {
  const submitHandler= async(event) => {
    event.preventDefault();

   if(mobile.length !==11) return;

   const { response, error} =await sendOtp(mobile);

if(response) setStep(2);
if(error) console.log(error.response.data.message);
   
console.log({ response, error});
  }
  return (
    <form onSubmit={submitHandler} className={styles.form}>
        <p>ورود به حساب کاربری</p>
        <span>برای استفاده از امکانات دیوار،
          لطفاشماره موبایل خودراواردکنید.کدتاییدبه این شماره پیامک خواهدشد.
          </span>
          <label htmlFor="input">شماره موبایل خودراواردکنید</label>
          <input type="text" placeholder='شماره موبایل'
           value={mobile} onChange={(e)=>setMobile(e.target.value)} id="input" />
    <button type='submit'>ارسال کد تایید</button>
    </form>

  )
}

export default SendOtpForm