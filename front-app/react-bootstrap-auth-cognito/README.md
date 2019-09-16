# Setup
## Cognito
* UserPool、AppClient作成
    * CloudFormationにて作成
    * UserPoolIdとAppClientIdをメモしておく
* Domainの設定
    * Domain Prefix
        * ys-dev-web-userpool
    * CLIで作成する場合
      ```
      aws cognito-idp create-user-pool-domain \
        --domain ys-dev-web \
        --user-pool-id us-west-2_xxxxxxxx \
        --region us-west-2
      ```
* App client settingsの設定
    * Enabled Identity Providers
        * Cognito User Pool
    * Callback URL(s)
        * http://localhost:3000/callback
    * Sign out URL(s)
        * http://localhost:3000/
    * Allowed OAuth Flows  
        * Authorization code grant
            * Refreshトークンが入手可能
    * Allowed OAuth Scopes  
        * 全てチェックON
    * CLIで作成する場合
      ```
      aws cognito-idp update-user-pool-client \
        --user-pool-id us-west-2_xxxxxxxx \
        --client-id xxxxxxxx \
        --supported-identity-providers "COGNITO" \
        --allowed-o-auth-flows "code" \
	    --allowed-o-auth-scopes "phone" "openid" "email" "profile" "aws.cognito.signin.user.admin" \
	    --allowed-o-auth-flows-user-pool-client
	    --callback-urls '["http://localhost:3000/callback"]' \
	    --logout-urls '["http://localhost:3000"]' \
	    --region us-west-2
      ```

# 実装メモ
## Sign Up時
```
async register() {
    console.log(this.state);
    await Auth.signUp({
        username: this.state.registerUser,
        password: this.state.registerPassword
    })
}
``` 
↓
ユーザーのSignupを許可していないとエラーになる

## Cognitoの管理画面からユーザー作成した場合
* 画面からユーザーを作成
    * 一時パスワードは空にすれば自動生成される
* 作成後のCognitoステータス
    * FORCE_CHANGE_PASSWORD
* InvitationをONにすると、以下のメッセージがメールに送られる
    ```
    Your username is xxxxx@gmail.com and temporary password is xxxxx.
    ```
    * From: no-reply@verificationemail.com
* 一時パスワードを使用してログインする
    * NEW_PASSWORD_REQUIREDが返され、ログイン状態にはならない

# 参照URL
* [SPAからCognito User Poolに管理者としてユーザーを登録する 〜Cognito + Lambda + API Gateway + Angular〜](https://dev.classmethod.jp/cloud/aws/cognito-admin-create-user-2/)