import "./App.css";
import { BrowserRouter as Router,Switch, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Dashboard from "./screens/MyNotes/Dashboard";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import { useEffect } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import Adminpage from "./screens/Admin/Adminpage";
import ManagerPage from "./screens/Manager/ManagerPage";
import PartnerPage from "./screens/Partner/PartnerPage";
import OnboardPage from "./screens/Onboard/Onboard";
import GenerateQuote from "./screens/generate-quote/GenerateQuote";
import ClientListPage from "./clientlist/ClientListPage";
import AdminCLientPage from "./clientlist/AdminClientPage";

import LoginScreen from "./screens/LoginScreen/LoginScreen";
import UpdatedClientlist from "./clientlist/UpdatedClientlist";
import UpdatedAdminClientlist from "./clientlist/UpdatedAdminClientlist";
import PartnerList from "./partnerlist/PartnerList";
import UploadPages from "./screens/uploadpage/UploadPages"
import NewHeader from "./components/NewHeader";

function App() {

  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
  return (
    <>
  <div>
  <Router>
    
    <main className="App">
      <Switch>
      <Route path="/register" component={RegisterScreen} />
      <Route path="/login" component={LoginScreen} exact/>
      <Route path="/" component={LoginScreen} exact />
      <div>
        <NewHeader/>   
      
        
       
       
        <Route
          path="/dashboard"
          component={Dashboard}/>
        <Route path="/profile" component={ProfileScreen} />
          <Route
          path="/protect"
          component={Adminpage}/>
          <Route 
          path="/manager"
          component={ManagerPage}/>
          <Route 
            path="/partner"
            component={PartnerPage}/>
            <Route 
            path="/onboard"
            component={OnboardPage}/>
            <Route
              path="/quotegenerator"
              component={GenerateQuote}/>
              <Route 
                path="/clientlist"
                component={UpdatedClientlist}/>
                <Route 
                path="/adminclient"
                component={UpdatedAdminClientlist}/>
                <Route 
                  path="/allpartners"
                  component={PartnerList}/>
                   <Route 
                  path="/uploaddoc"
                  component={UploadPages}/>
                    <Footer />
              

                </div>
        </Switch>

      </main>
  
  </Router>
    </div>
    </>
  );
}

export default App;
