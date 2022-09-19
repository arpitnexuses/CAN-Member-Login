import React ,{useEffect} from 'react'
import MainScreen from "../../components/MainScreen";
import { useSelector } from "react-redux";
import { usePermissions } from 'react-admin';

function Adminpage({history}) {
    const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
  },[history,userInfo])
  
  
  return (
    <MainScreen className="mainsc" title={`Welcome Admin ${userInfo && userInfo.name}..`}/>
  )
}

export default Adminpage