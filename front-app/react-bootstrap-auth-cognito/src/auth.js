import { Auth } from "aws-amplify";

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
    userPoolWebClientId: "",
};
