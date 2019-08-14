# Setup
## Cognito
* UserPool、AppClient作成
    * CloudFormationにて作成
    * UserPoolIdとAppClientIdをメモしておく
* Domainの設定
    * Domain Prefix
        * ys-dev-web-userpool
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