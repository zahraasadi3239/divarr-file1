import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Loader from 'src/components/modules/Loader';
import { getCategory } from 'src/services/admin'
import styles from "./CategoryList.module.css"

function CategoryList() {
   

    const{isLoading,data,_id}=useQuery(["get-categories"],getCategory);
    console.log(isLoading,data,_id)
  return (
    <div className={styles.list}>
        {isLoading ?( 
    <Loader/> 
    ): (
        data.data.map((i)=>(
        <div key={i._id}>
    <img src={`${i.icon}.svg`}/>
    <h5>{i.name}</h5>
   
    <p>slug:{i.slug}</p>
    
    </div>
  ))
    )}
  
    </div>
  );
}

export default CategoryList