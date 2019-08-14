import React from 'react';
import Button from 'react-bootstrap/Button'
import {getIdToken} from "../auth";
import axios from 'axios';

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
      console.log(this.props)
    };


    render() {
        return (
            <div>
                <Button onClick={this.handleConsole.bind(this)}>Api Call</Button>
            </div>
        )
    }
}