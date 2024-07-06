import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import AdminPage from 'src/pages/AdminPage';
import AuthPage from 'src/pages/AuthPage';
import DashboardPage from 'src/pages/DashboardPage';
import HomePage from 'src/pages/HomePage';
import PageNotFound from 'src/pages/PageNotFound';
import {useQuery} from "@tanstack/react-query"
import { getProfile } from 'src/services/user';
import Loader from 'src/components/modules/Loader';

function Router() {
    const {data, isLoading, error}= useQuery(["profile"], getProfile);
 
    if (isLoading) return <Loader />
  return (
    <Routes>
    <Route index element={<HomePage/>}/>
    <Route path="dashboard" element={data ?  <DashboardPage/> :< Navigate to="/auth" />}/>
    <Route path="auth" element={data ? <Navigate to="/dashboard" /> : <AuthPage/>} />
    <Route path="admin" element={
      data && data.data.role === "ADMIN" ?(
      <AdminPage/>
      ):(
      <Navigate to="/" />
      )
    }/>
    <Route path="*" element={<PageNotFound/>}/>
    <Route/>
    <Route/>
    </Routes>
  )
}

export default Router