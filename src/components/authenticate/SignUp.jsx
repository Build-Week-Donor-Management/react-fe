import React, { useState } from "react";
// import { axiosWithAuth } from "../../utilities/axiosWithAuth";
import axios from "axios";
import { Segment, Form, Button, Select, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";

const accountOptions = [
  { key: "u", text: "User", value: "user" },
  { key: "b", text: "Boardmember", value: "board" },
  { key: "c", text: "Campaign", value: "campaign" }
];

const SignUp = () => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    organization: "",
    email: "",
    password: ""
  });

  const changeHandler = event => {
    setState({
      ...state,
      [event.target.name]: event.value
    });
  };
  const submitHandler = (event, state, props) => {
    event.preventDefault();
    axios
      .post("https://donation-token.herokuapp.com/donate/register/user", state)
      .then(res => {
        alert("An Account was created. Please Login.");
      })
      .then(res => {
        props.history.push("/login");
      })
      .catch(err => {
        console.log(err);
      });
    setState({
      username: "",
      password: "",
      type: "",
      email: "",
      phone: "",
      address: ""
    });
  };
  return (
    <div className="signUp-wrapper">
      <Segment raised compact>
        <div className="signup-cta">
          <h1>Sign Up Today!</h1>
        </div>

        <Form onSubmit={event => submitHandler(event, state)}>
          <Form.Field>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Register your Username"
              value={state.username}
              onChange={changeHandler}
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Register your password"
              value={state.password}
              onChange={changeHandler}
              required
            />
          </Form.Field>
          <Form.Field
            control={Select}
            options={accountOptions}
            label={{
              children: "Account type",
              htmlFor: "form-select-control-type"
            }}
            placeholder="Account type"
            search
            searchInput={{ id: "form-select-control-type" }}
            required
          />
          <Form.Field>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Register your Email"
              value={state.email}
              onChange={changeHandler}
              required
            />
          </Form.Field>

          <Form.Field>
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={state.phone}
              onChange={changeHandler}
            />
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={state.address}
              onChange={changeHandler}
            />
          </Form.Field>
          <Button>Submit</Button>
          <Link to="/login">
            <p>Already have an Account?</p>
          </Link>
        </Form>
      </Segment>
    </div>
  );
};
export default SignUp;