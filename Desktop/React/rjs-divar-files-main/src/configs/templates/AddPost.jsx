import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react'
import { getCategory } from 'src/services/admin';
import { getCookie } from 'src/utils/cookie';
import {toast, Toaster} from "react-hot-toast"

import styles from "./AddPost.module.css"
function AddPost() {
    const [form, setForm] = useState({
        title: "",
        content: "",
        category: "",
        city: "",
        amount: null,
        images: null,
    });
    const { data }=useQuery(["get-categories"],getCategory);
    
    const changeHandler = (event) => {
        const name=event.target.name;
        if(name !== "images")  {
            setForm({...form, [name]: event.target.value});
        } else {
        setForm({...form,[name]:event.target.files[0]})
        }
    }
    const addHandler = (event) => {
        event.preventDefault();
         const formData = new FormData();
    
     for(let i in form) {
        formData.append(i, form[i]);
       
     }

   
     const token =getCookie("refreshToken");
     axios.post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
        headers: {
            "Content-Type":"multipart/form-data",
            Authorization: `bearer ${token}`,
        },
        
     })
     
     .then((res)=> console.log(res))
     .catch((error)=> console.log(error))
     console.log(token)
    };



  return (
  
    <form onChange={changeHandler} className={styles.form}>
        <h3>افزودن آگهی</h3>
        <label htmlFor='title'>عنوان</label>
        <input type="text" name="title" id="title"/>
        <label htmlFor='content'>توضیحات</label>
        <textarea type="content" id="content"/>
        <label htmlFor='amount'>قیمت</label>
        <input type="number" name="amount" id="amount"/>
        <label htmlFor='city'>شهر</label>
          <input type="text" name="city" id="city"/>
        <label htmlFor='category'>دسته بندی</label>
        <select name="category" id="category">
            {data?.data.map((i) =>(
                <option key={i._id} value={i._id}>
                           {i.name}
                </option>
         
            ))}
        </select>
        <label htmlFor='images'>عکس</label>
        <input type="file" name="images" id="images"/>
        <button onClick={addHandler}>ایجاد</button>
   <Toaster />   
    </form>
  )
}

export default AddPost