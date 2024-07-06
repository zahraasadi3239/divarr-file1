import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Loader from 'src/components/modules/Loader';
import { getPosts } from 'src/services/user'
import { sp } from 'src/utils/number';
import styles from "./PostList.module.css"
function PostList() {
    const baseURL=import.meta.env.VITE_BASE_URL;
    const{data,isLoading} = useQuery(["my-post-list"],getPosts);
    console.log(data)
  return (
    <div className={styles.list}>
        {isLoading ?(
            <Loader/>
        ): (
            <>
            
            <h3>آگهی های شما</h3>
            {data.data.posts.map((post) => (
                <div key={post._id} className={styles.post} >
                    <img src={`${baseURL}${post.images[0]}`} />
                    <div> 
                        <p>{post.options.title}</p>
                        <span>{post.options.content}</span>
                    </div>
                    <div className={styles.price}>
                        <p>{new Date(post.createdAt).toDateString("fa-IR")}</p>
                        <span>{sp(post.amount)}تومان</span>
                    </div>
                </div>
            ))}
            </>

        )}
        
    </div>
  )
}

export default PostList