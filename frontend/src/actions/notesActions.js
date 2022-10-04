import {
  CUSTOMER_CREATE_FAIL,
  CUSTOMER_CREATE_REQUEST,
  CUSTOMER_CREATE_SUCCESS,
  CUSTOMER_DELETE_FAIL,
  CUSTOMER_DELETE_REQUEST,
  CUSTOMER_DELETE_SUCCESS,
  CUSTOMER_LIST_FAIL,
  CUSTOMER_LIST_REQUEST,
  CUSTOMER_LIST_SUCCESS,
} from "../constants/notesConstants.js";
import axios from "axios";


export const createCustomerAction = 
  (fullname, dateofbirth, gender, country, city, smoker, nationality, coverageAmount, paymentterm, conditions) => async ( dispatch, getState ) => {
  try {
    dispatch({
      type: CUSTOMER_CREATE_REQUEST,
    });
    const {
      userLogin : { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `/api/customer/create`,
      { fullname, dateofbirth, gender, country, city, smoker, nationality, coverageAmount, paymentterm, conditions },
      config
    );

    dispatch({
      type: CUSTOMER_CREATE_SUCCESS,
      payload: data,
    });    

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: CUSTOMER_CREATE_FAIL,
      payload: message,
    });
  }
};
export const listCustomers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: CUSTOMER_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/customer`, config);

    dispatch({
      type: CUSTOMER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: CUSTOMER_LIST_FAIL,
      payload: message,
    });
  }
};

export const deleteNoteAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CUSTOMER_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/customer/${id}`, config);

    dispatch({
      type: CUSTOMER_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: CUSTOMER_DELETE_FAIL,
      payload: message,
    });
  }
};



export const listAllCustomers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: CUSTOMER_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/adminclient`, config);

    dispatch({
      type: CUSTOMER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: CUSTOMER_LIST_FAIL,
      payload: message,
    });
  }
};