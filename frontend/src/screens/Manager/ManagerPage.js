import React ,{useEffect} from 'react'
import MainScreen from "../../components/MainScreen";
import { useSelector } from "react-redux";
import { usePermissions } from 'react-admin';

function ManagerPage({history}) {
    const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if ( !userInfo ){
      history.push("/login");}    
     if (userInfo.role === "manager")
      history.push("/manager");
   },[history,userInfo])
  
  
  return (
    <MainScreen className="mainsc" title={`Welcome Manager ${userInfo && userInfo.name}..`}/>
  )
}

export default ManagerPage;