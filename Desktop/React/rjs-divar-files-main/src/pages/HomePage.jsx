import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Loader from 'src/components/modules/Loader'
import Main from 'src/configs/templates/Main'
import Sidebar from 'src/configs/templates/Sidebar'
import { getCategory } from 'src/services/admin'
import { getAllPosts } from 'src/services/user'
const  style={display:"flex"}
function HomePage() {
  const {data:posts ,isLoading:postLoading}=useQuery(["post-list"],getAllPosts);
  const { data:categories,isLoading:categoryLoading }=useQuery(["get-categories"],getCategory);

  return (
   <>
   {postLoading || categoryLoading ? (
   <Loader />):(
     <div style={style}>
     <Sidebar categories={categories} />
<Main posts={posts}/>
   </div>
   )}
   </>
  )
}

export default HomePage