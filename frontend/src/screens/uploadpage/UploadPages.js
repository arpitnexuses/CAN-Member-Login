import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { listCustomers, updateCustomer } from "../../actions/notesActions.js";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "../../clientlist/list.css"


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




function UploadPages({ history }) {
  const [modelopen, setModelopen] = useState(false);
  const [modelData, setModelData] = useState("");
  const [quotedocument, setQuoteDocument] = useState();
  const [fullname, setFullname] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [nationality, setNationality] = useState("");
  const [city, setCity] = useState("");
  const [smoker, setSmoker] = useState("");
  const [coverageAmount, setCoverageAmount] = useState("");
  const [paymentterm, setPaymentTerm] = useState("");
  const [conditions, setConditions] = useState("");
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
    else {
    }
  }, [
    history,
    userInfo,

    loadingDelete,
    errorDelete,
    successDelete
  ]);
  const fileDetails = (quotedocument) => {
 
    const data = new FormData();
    data.append("file", quotedocument);
    data.append("upload_preset", "notezipper");
    data.append("cloud_name", "piyushproj");
    fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setQuoteDocument(data.url.toString());
        console.log(quotedocument);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCustomer({fullname, dateofbirth, gender, country, city, smoker, nationality, coverageAmount, paymentterm, conditions, quotedocument}));
  };

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
                Details
              </th>
              <th>
                Action
              </th>
              <th>
                Upload
              </th>
            </tr>
          </thead>
          <tbody>
            {customers?.map(customer => (
              <tr key={customer._id}>
                <td></td>
                <td>{customer.fullname}</td>

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
                <td>
                  <form onSubmit={onSubmit}>
                    <input style={{ background: "transparent", color: "red" }} id='file' className="button-39" type='file' name='file' onChange={(e) => fileDetails(e.target.files[0])} />
                    <button className="button-90">Submit</button>
                  </form>
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


      <input type="hidden" className='hide' value={fullname} onChange={(e) => setFullname(e.target.value)}/>                
    <input type="hidden" className='hide' value={dateofbirth} onChange={(e) => setDateofbirth(e.target.value)}/>
    <input type="hidden" className='hide' value={gender} onChange={(e) => setGender(e.target.value)}/>
    <input type="hidden" className='hide' value={city} onChange={(e) => setCity(e.target.value)}/>
    <input type="hidden" className='hide' value={country} onChange={(e) => setCountry(e.target.value)}/>
    <input type="hidden" className='hide' value={nationality} onChange={(e) => setNationality(e.target.value)}/>
    <input type="hidden" className='hide' value={smoker} onChange={(e) => setSmoker(e.target.value)}/>
    <input type="hidden" className='hide' value={coverageAmount} onChange={(e) => setCoverageAmount(e.target.value)}/>
    <input type="hidden" className='hide' value={paymentterm} onChange={(e) => setPaymentTerm(e.target.value)}/>
    <input type="hidden" className='hide' value={conditions} onChange={(e) => setConditions(e.target.value)}/>

    </>
  )
}

export default UploadPages;