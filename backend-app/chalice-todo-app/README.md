## Reference sites
* [Github](https://github.com/aws/chalice)
* [Githubの日本語](https://githubja.com/aws/chalice9)

## Set up
### Create AWS Configure
```
$ mkdir ~/.aws
$ cat >> ~/.aws/config
[default]
aws_access_key_id=YOUR_ACCESS_KEY_HERE
aws_secret_access_key=YOUR_SECRET_ACCESS_KEY
region=YOUR_REGION (such as us-west-2, us-west-1, etc)
```

### Chalice
* Install Chalice  
    `pip install chalice`
* Create New Project  
    `chalice new-project chalice-todo-app`
* Run Local Server  
    `chalice local`
* Deploy Module on AWS Environment  
    `chalice deploy`
* Delete Module  
    `chalice delete --stage dev`
