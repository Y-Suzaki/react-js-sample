import { Auth, I18n } from "aws-amplify";
import React from 'react';
import { AmplifyTheme } from 'aws-amplify';
import {
    SignUp,
    FormSection,
    SectionHeader,
    SectionBody,
    SectionFooter,
    InputRow,
    ButtonRow,
    Link,
} from 'aws-amplify-react';

export class MySignUp extends SignUp {
    signUp() {
        const { username, password } = this.inputs;
        const param = {
            username: username,
            password: password
        }
        Auth.signUp(param)
            .then(() => this.changeState('confirmSignUp', username))
            .catch(err => this.error(err));
    }

    showComponent(theme) {
        const { hide } = this.props;
        // if (hide && hide.includes(SignUp)) { return null; }

        return (
            <FormSection>
                <SectionHeader>{I18n.get('Sign Up Account')}</SectionHeader>
                <SectionBody>
                    <InputRow
                        autoFocus
                        placeholder={I18n.get('Username')}
                        key="username"
                        name="username"
                        onChange={this.handleInputChange}
                    />
                    <InputRow
                        placeholder={I18n.get('Password')}
                        type="password"
                        key="password"
                        name="password"
                        onChange={this.handleInputChange}
                    />
                    <ButtonRow onClick={this.signUp}>
                        {I18n.get('Sign Up')}
                    </ButtonRow>
                </SectionBody>
                <SectionFooter>
                    <div>
                        <Link onClick={() => this.changeState('confirmSignUp')}>
                            {I18n.get('Confirm a Code')}
                        </Link>
                    </div>
                    <div style={Object.assign({textAlign: 'right'}, theme.col6)}>
                        <Link onClick={() => this.changeState('signIn')}>
                            {I18n.get('Sign In')}
                        </Link>
                    </div>
                </SectionFooter>
            </FormSection>
        )
    }
};

export const getIdToken = async () => {
    // Refresh Token周りの制御も下記で自動にやってくれるらしいが、未確認
    const session = await Auth.currentSession();
    return session.getIdToken().getJwtToken();
};

export const signOut = async () => {
    await Auth.signOut();
};

export const authConfig = {
    region: "us-west-2",
    userPoolId: "us-west-2_7ahbXqGso",
    userPoolWebClientId: "175keeno8e83vrtdl2c4gt7hon",
};
