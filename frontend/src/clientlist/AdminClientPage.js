import React ,{useEffect} from 'react'
import MainScreen from "../components/MainScreen.js";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { useSelector , useDispatch} from "react-redux";
import { deleteNoteAction, listAllCustomers } from "../actions/notesActions";
import ReactMarkdown from "react-markdown";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function AdminCLientPage({history})  {
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
    dispatch(listAllCustomers());
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
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
  };

  return (
    <MainScreen className="mainsc" title={`Welcome to AdminPartner List`}>
      {customers?.map((customer) => (
          <Accordion >
            <Card style={{ margin: 10 }} >
              <Card.Header style={{ display: "flex" }}>
                <span
                  // onClick={() => ModelShow(note)}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  <Accordion.Toggle
                    as={Card.Text}
                    variant="link"
                    eventKey="0"
                  >
                    {customer.fullname}
                  </Accordion.Toggle>
                </span>

                <div>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(customerList._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <h4>
                    <Badge variant="success">
                      Amount Coverage - {customer.coverageAmount} Millions
                    </Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p>Partner Name : {customer.partner}</p>
                    <p>Date of birth : {customer.dateofbirth}</p>
                    <p>Gender : {customer.gender}</p>
                    <p>Country : {customer.country}</p>
                    <p>Nationality : {customer.nationality}</p>
                    <p>City : {customer.city}</p>
                    <p>Smoker : {customer.smoker}</p>
                    <p>Payment Term : {customer.paymentterm}</p>
                    <p>Conditions : {customer.conditions}</p>
                    <footer className="blockquote-footer">
                      Created on{" "}
                      <cite title="Source Title">
                        {customer.createdAt.substring(0, 10)}
                      </cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))}

</MainScreen>


  )
}

export default AdminCLientPage