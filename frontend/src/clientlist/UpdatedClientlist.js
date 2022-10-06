import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { deleteNoteAction, listCustomers } from "../actions/notesActions";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./list.css"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




function UpdatedClientlist({ history }) {

  const [modelopen, setModelopen] = useState(false);
  const [modelData, setModelData] = useState(null);
  const handleClose = () => setModelopen(false);

  const dispatch = useDispatch();

  const customerList = useSelector((state) => state.customerList);
  const { customers } = customerList; 

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const customerDelete = useSelector((state) => state.customerDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = customerDelete;

  useEffect(() => {
    dispatch(listCustomers());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    history,
    userInfo,
    loadingDelete,
    errorDelete,
    successDelete
  ]);

  return (
    <>
      <div>
        <table className="styled-table">
          <thead>
            <tr>
              <th>
                Sl No.
              </th>
              <th>
                Full Name
              </th>
              <th>
                Date of birth
              </th>
              <th>
                Amount Coverage
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
            {customers?.map(customer => (
              <tr key={customer._id}>
                <td></td>
                <td>{customer.fullname}</td>
                <td>{customer.dateofbirth}</td>
                <td>{customer.coverageAmount} Millions</td>
                <td> 
                  <input style={{ background: "lightgrey" }} className="button-31" type='button' value='View' 
                  onClick={() => { 
                    
                    setModelopen(true);
                    setModelData(customer); 
                    }} 
                    />
                </td>
                <td>
                  <input style={{ background: "#FF4B2B", color: "white" }} className="button-31" type='button' value='Delete' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        open={modelopen}
        onClose={handleClose}
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2" >
            {modelData.fullname}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Date of birth : {modelData.dateofbirth}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Gender : {modelData.gender}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Country : {modelData.country}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Nationality : {modelData.nationality}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            City : {modelData.city}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Smoker : {modelData.smoker}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Payment Term : {modelData.paymentterm}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            conditions : {modelData.conditions}
          </Typography>

        </Box>

      </Modal>
    </>
  )
}

export default UpdatedClientlist