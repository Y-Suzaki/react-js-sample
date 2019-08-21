import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {getIdToken} from "../auth";
import axios from 'axios';
import { Auth } from "aws-amplify";

export default  class Logs extends React.Component {

    // Cognito認証ありのAPIGatewayを叩くサンプル
    handleConsole = async () => {
        const jwt = await getIdToken();
        console.log(jwt);

        const res = await axios.get("https://l7z13eb7ki.execute-api.us-west-2.amazonaws.com/dev/logs", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": jwt
            }
        });
        console.log(res.data);
    };

    constructor(props) {
      super(props);
      console.log(this.props);
      this.state = {
          user: "",
          password: "",
          registerUser: "",
          registerPassword: "",
          registerNewPassword: ""
      }
    };

    onChangeUser(e) {
        this.setState({"user": e.target.value})
    }

    onChangePassword(e) {
        this.setState({"password": e.target.value})
    }

    onChangeRegisterUser(e) {
        this.setState({"registerUser": e.target.value})
    }

    onChangeRegisterPassword(e) {
        this.setState({"registerPassword": e.target.value})
    }

    onChangeRegisterNewPassword(e) {
        this.setState({"registerNewPassword": e.target.value})
    }

    async login() {
        console.log(this.state);
        const user = await Auth.signIn(this.state.user, this.state.password);
        console.log(user)
    }

    async register() {
        console.log(this.state);
        await Auth.signUp({
            username: this.state.registerUser,
            password: this.state.registerPassword
        })
    }

    async changePassword() {
        console.log(this.state);
        const user = await Auth.signIn(this.state.registerUser, this.state.registerPassword);
        console.log(user);

        if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
            console.log("NEW_PASSWORD_REQUIRED");

            await Auth.completeNewPassword(
                user,               // the Cognito User Object
                this.state.registerNewPassword,
                {}
            );
        }
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="user">
                        <Form.Control type="text" placeholder="Enter user" onChange={this.onChangeUser.bind(this)} value={this.state.user}/>
                    </Form.Group>
                    <Form.Group controlId="user">
                        <Form.Control type="password" placeholder="Enter password" onChange={this.onChangePassword.bind(this)} value={this.state.password}/>
                    </Form.Group>
                    <Button onClick={this.login.bind(this)}>Cognito login</Button>
                </Form>
                <hr/>
                <Form>
                    <Form.Group controlId="user">
                        <Form.Control type="text" placeholder="Enter user" onChange={this.onChangeRegisterUser.bind(this)} value={this.state.registerUser}/>
                    </Form.Group>
                    <Form.Group controlId="user">
                        <Form.Control type="password" placeholder="Enter password" onChange={this.onChangeRegisterPassword.bind(this)} value={this.state.registerPassword}/>
                    </Form.Group>
                    <Form.Group controlId="user">
                        <Form.Control type="password" placeholder="Enter new password" onChange={this.onChangeRegisterNewPassword.bind(this)} value={this.state.registerNewPassword}/>
                    </Form.Group>
                    <Button onClick={this.changePassword.bind(this)}>Cognito change password</Button>
                </Form>
                <hr/>
                <Button onClick={this.handleConsole.bind(this)}>Api Call</Button>
            </div>
        )
    }
}