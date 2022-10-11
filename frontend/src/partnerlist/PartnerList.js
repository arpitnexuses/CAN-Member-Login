import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { listAllPartner } from '../actions/userActions';
function PartnerList({history}) {
 const dispatch = useDispatch(); 
 const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userList = useSelector((state) => state.userList);
  const { users } = userList;

 useEffect(() => {
    dispatch(listAllPartner)
    if (!userInfo) {
      history.push("/");
    }
  }, [
    history,
    userInfo
  ]);
  return (
    <>
    <div>
       <h1> {userInfo.name} </h1>
       <h1>{users.city}</h1>
      {/* <table className="styled-table">
        <thead>
          <tr>
            <th>
              Sl No.
            </th>
            <th>
              Partner Name
            </th>
            <th>
              Company
            </th>
            <th>
              Country
            </th>
            <th>
              Details
            </th>
            <th>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {userInfo?.map((user) => (
            <tr key={user._id}>
              <td></td>
              <td>{user.name}</td>
              <td>{user.company}</td>
              <td>{user.country}</td>
              <td> 
                <input style={{ background: "lightgrey" }} className="button-31" type='button' value='View' 
                // onClick={() => { 
                //   setModelopen(true);
                //   setModelData(customer); 
                //   }} 
                  />
              </td>
              <td>
                <input style={{ background: "#FF4B2B", color: "white" }} className="button-31" type='button' value='Delete' />
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
    </>
  )
}

export default PartnerList