import React ,{useEffect} from 'react'
import MainScreen from "../../components/MainScreen";
import { useSelector } from "react-redux";
import { usePermissions } from 'react-admin';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Adminpage({history}) {

    const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (!userInfo ){
      history.push("/login");}    
     
   },[history,userInfo])
  
  
  return (
    <MainScreen className="mainsc" title={`Welcome Admin ${userInfo && userInfo.name}..`}>
             <Link to="/adminclient">
             <Button variant="primary" size="lg" className="gap2">
       ALL CLIENT LIST
      </Button>
      </Link>

    </MainScreen>
  )
}

export default Adminpage