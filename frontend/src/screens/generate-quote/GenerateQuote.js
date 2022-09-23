import React ,{useEffect} from 'react'
import MainScreen from "../../components/MainScreen";
import { useSelector } from "react-redux";
import { usePermissions } from 'react-admin';

function GenerateQuote({history}) {
    const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (!userInfo){
      history.push("/login");}    
   },[history,userInfo])
  
  
  return (
    <MainScreen className="mainsc" title={`Welcome to GenerateQuote ${userInfo && userInfo.name}..`}/>
  )
}

export default 
GenerateQuote;