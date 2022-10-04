import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import "./generateQoute.css"
import Slider from '@mui/material/Slider'
import { createCustomerAction } from "../../actions/notesActions.js";
import { Link } from 'react-router-dom';


function GenerateQuote ({ history }) {

    const [fullname, setFullname] = useState("");
    const [dateofbirth, setDateofbirth] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [nationality, setNationality] =useState("");
    const [city, setCity] = useState("");
    const [smoker, setSmoker] = useState("");
    const [coverageAmount, setCoverageAmount] = useState("");  
    const [paymentterm, setPaymentTerm] = useState("");
    const [conditions, setConditions] = useState("");

    const dispatch = useDispatch();

    const customerCreate = useSelector((state) => state.customerCreate);
    const { customer } = customerCreate;
    console.log(customer);

    const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

    const onChangeValue=(e)=> {
        setGender(e.target.value);
        console.log(e.target.value);
    }
    const handleSmoker=(e)=> {
        setSmoker(e.target.value); 
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (!fullname, !dateofbirth, !gender, !country, !city, !smoker, !nationality, !coverageAmount, !paymentterm, !conditions) return;
        dispatch(createCustomerAction(fullname, dateofbirth, gender, country, city, smoker, nationality, coverageAmount, paymentterm, conditions ));

        console.log(fullname)
        history.push("./quotegenerator"); 
      };
    return (
        <>

            <div className='p-5 text-center bg-light'>
                <h1 className='mb-3'>Quote Generator</h1>
                <h4 className='mb-3'>No hassles, and no headaches. Generate policy quotes, easily.</h4>
                <h6 className='mb-3'>Get Personalized Life Insurance Policy Quotes For Your Clients</h6>
            </div>

            <Card body className='card'>
                <h2 className='fhead'>PARTNER DETAILS</h2>
                <Form classname="genform">
                    <Form.Group >

                        <Form.Control
                            id="genform"
                            classname="genform"
                            type="string"
                            placeholder="Partner's Full Name"
                            value={userInfo.name}
                            disabled
                        //   value={country}
                        //   onChange={(e) => setCountry(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group>

                        <Form.Control
                            id="genform2"
                            classname="genform"
                            type="string"
                            placeholder="Partner's Email Address"
                            value={userInfo.email}
                            disabled
                        //   value={country}
                        //   onChange={(e) => setCountry(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    </Form>
           
                <div className="policyh"><h2>POLICY OWNER ILLUSTRATION</h2></div>
                <Form classname="genform" onSubmit={submitHandler}>
                    <Form.Group>

                        <Form.Control
                            id="genform"
                            className="genform"
                            type="string"
                            placeholder="Full Name"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label id="leb" className='leb' style={{ textAlign: "start" }}>Date of birth</Form.Label>
                        <Form.Control
                            id="genform2"
                            className="genform4"
                            type="date"

                            placeholder="Date of birth"
                            value={dateofbirth}
                            onChange={(e) => setDateofbirth(e.target.value)}
                        ></Form.Control>
                        <Form.Group >
                            <Form.Label id="lebg" className='lebg'>Gender</Form.Label>

                            <br />
                            <div className="radio" onChange={onChangeValue}>
                                <Form.Check
                                    inline
                                    label="Male"
                                    name="group1"
                                    type="radio"
                                    value="Male"
                                    checked={gender === "Male"}

                                />
                                <Form.Check
                                    inline
                                    label="Female"
                                    name="group1"
                                    type="radio"
                                    value="Female"
                                    checked={gender === "Female"}
                                />
                                <Form.Check
                                    inline
                                    label="other"
                                    name="group1"
                                    type="radio"
                                    value="other"
                                    checked={gender === "other"}
                                />
                            </div>
                        </Form.Group>
                    </Form.Group>
        
             
                    <Form.Group>
                    <Form.Label id="lebg" className='lebc'>Country</Form.Label>
                        <Form.Control
                            id="genformc"
                            classname="genform"
                            type="string"
                            placeholder="Country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label id="lebg" className='lebc'>Nationality</Form.Label>
                        <Form.Control
                            id="genformc"
                            classname="genform"
                            type="string"
                            placeholder="Nationality"
                            value={nationality}
                            onChange={(e) => setNationality(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label id="lebg" className='lebc'>City</Form.Label>
                        <Form.Control
                            id="genformc"
                            classname="genform3"
                            type="string"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id="lebg" className='lebg'>Smoker</Form.Label>

                        <br />
                        <div className="radio" onChange={handleSmoker}>
                            <Form.Check
                                inline
                                label="Yes"
                                name="group2"
                                type="radio"
                                value="yes"
                                checked={smoker === 'yes'}


                            />
                            <Form.Check
                                inline
                                label="No"
                                name="group2"
                                type="radio"
                                value="no"
                                checked={smoker === 'no'}
                            />
                        </div>
                    </Form.Group>

         
                    <Form.Label id="lebge" className='lebg'>Amount of Coverage Required</Form.Label><br />
                    <Form.Label id="minip" className='minip'>in Million</Form.Label>
                    <div className="covera">
                        <div>
                            <Form.Label id="minip" className='minip'>1=Million</Form.Label>
                        </div>
                        <div>
                            <Form.Label id="minip" className='minip'>100=Million</Form.Label>
                        </div>
                    </div>
                    <br />
                    <Slider id="range" defaultValue={50} aria-label="Default" valueLabelDisplay="auto" onChange={(event) => setCoverageAmount(event.target.value)} />
                    <Form.Group>
                        <Form.Control as="select" className="drop" value={paymentterm} onChange={(event) => setPaymentTerm(event.target.value)}> 
                            <option value="Select Payment Term">Select Payment Term</option>
                            <option value="Multi Pay">Multi Pay</option>
                            <option value="Single Pay">Single Pay</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group >
                    <Form.Label id="lebg" className='lebg'>Pre-existing Conditions</Form.Label>
                        <Form.Control
                            as="textarea"
                            id="textbo"
                            className="textbo"
                            type="string"
                            value={conditions}
                            onChange={(event) => setConditions(event.target.value)}
                            placeholder="Any Pre-existing Conditions"
                        ></Form.Control>
                    </Form.Group>
           
                <div className="d-grid gap2">
      <Button variant="primary" size="lg" className="gap1" onClick={submitHandler}>
        GENERATE QUOTE
      </Button>
      <Link to="/clientlist">
      <Button variant="primary" size="lg" className="gap2">
        CLIENT LIST
      </Button>
      </Link>
      </div>     </Form>
            </Card>
        </>
    )
}

export default GenerateQuote;