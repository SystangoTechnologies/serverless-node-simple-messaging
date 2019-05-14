# serverless-node-simple-messaging

Simple AWS lambda serverless function for sending emails using AWS SES

## Prerequisites
- [Get Amazon SES Production Access] (https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html)

## Setup
Run the following commands
```sh
$ npm install -g serverless # Install serverless globally
$ serverless config credentials --provider aws --key <AWS Access Key ID> --secret <AWS Secret Access Key> # Setting up default aws credentials
$ cd aws-serverless-messaging
$ npm install # Installing dependency
```

## Deployment
```sh
$ serverless deploy # Deploying serverless function to aws
```

By this command `serverless deploy` you should be able to see the lambda function in your aws lambda dashboard and it should have returned an endpoint and api_key in your terminal keep these for now.

Setup the following variables into your aws lambda function 
- ACCESS_KEY_ID (AWS account access key)
- SECRET_ACCESS_KEY (AWS account secret key)
- API_VERSION (API version for AWS SES)
- REGION (AWS SES region as it's not supported in all the region for now)

## Running

Run ```export MY_API_KEY=<any random key value for your lambda function>```

Make a POST API call to the endpoint and send x-api-key into headers with the api_key value returned after deploy command. The API supports the following body parameters
- toAddresses (Array of valid email addresses)
- bccAddresses (Array of valid email addresses, optional)
- ccAddresses (Array of valid email addresses, optional)
- textBody (Text email body)
- body (HTML email body)
- subject (Email subject)
- sender (Sender email)

For example -
```
{
	"toAddresses": ["toemail@example.com"],
	"textBody": "Hello",
	"body": "Hello",
	"subject": "Subject"
	"sender": "senderemail@example.com"
}
```

## Running by postman collection

- Import the postman collection and set the endpoint and x-api-key and make a hit.

## Contributors

[Sparsh Pipley](https://in.linkedin.com/in/sparsh-pipley-6ab0b1a4/)

## License

Built under [MIT](http://www.opensource.org/licenses/mit-license.php) license.

