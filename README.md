# serverless-starter
Serverless Starter Kit in NodeJS

Run `npm install` to get started. You need the Serverless Framework cli tool, 


## Running locally:
You'll need the npm package to develop offline with `serverless-offline`: `npm install serverless-offline --save-dev`

```IS_OFFLINE=true sls offline start --stage dev```

## Testing with Jest

```npm install -g jest```

Tests are in the `tests` folder, and are written using Jest.

Run tests:
```npm test --coverage```

## Optional extras

### Offline Scheduling 

`npm install serverless-offline-scheduler --save-dev`

### Offline DynamoDB

`npm install serverless-dynamodb-local --save-dev`
`sls dynamodb install`

## Serverless Basics:


## Useful Resources

| Description | Link     |
| :------------- | :------------- |
| Intro       | [SitePoint](https://www.sitepoint.com/getting-started-node-js-aws-lambda/) |
| Serverless Docs | [AWS version](https://serverless.com/framework/docs/providers/aws/) |
| Official examples | [GH Repo](https://github.com/serverless/examples) |
| Serverless REST API with DynamoDB and offline support example | [GH Repo](https://github.com/serverless/examples/tree/master/aws-node-rest-api-with-dynamodb-and-offline)|
| CI/CD with Circle on serverless blog | [CI/CD with Circle](https://serverless.com/blog/ci-cd-workflow-serverless-apps-with-circleci/) |
| CI & CD from serverless blog|[Part 1](https://serverless.com/blog/cicd-for-serverless-part-1/) , [Part 2](https://serverless.com/blog/cicd-for-serverless-part-2/) |
| notes on dynamodb primary keys | [stackoverflow](https://stackoverflow.com/questions/27329461/what-is-hash-and-range-primary-key#27348364)|
| hands on serverless example | [GH repo + guide repo](https://github.com/shekhargulati/hands-on-serverless-guide/blob/master/01-aws-lambda-serverless-framework/03-building-rest-api-in-nodejs-with-lambda-gateway-dynamodb-serverless.md) |
| serverless offline plugin | [gh repo](https://github.com/dherault/serverless-offline) |
| Dynamo db local plugin | [gh repo](https://github.com/99xt/serverless-dynamodb-local) |
| aws-node-text-analysis-via-sns-post-processing example | [gh repo](https://github.com/serverless/examples/tree/master/aws-node-text-analysis-via-sns-post-processing) |
| Serving Dynamic HTML via API Gateway Example | [GH Repo](https://github.com/serverless/examples/tree/master/aws-node-serve-dynamic-html-via-http-endpoint) |
| serverless authentication boilerplate | [gh repo](https://github.com/laardee/serverless-authentication-boilerplate) |
| secured API example | [gh repo](https://github.com/pmuens/serverless-secured-api) |
| List of Serverless Resources | [GH Page](https://github.com/JustServerless/awesome-serverless) |
| Xavier Decupyer's Video Tutorials | [YouTube Videos](https://www.youtube.com/playlist?list=PLzvRQMJ9HDiSQMe68cti8cupI0mzLk1Gc) |
| Environment Vars | [Serverless Docs](https://serverless.com/framework/docs/providers/aws/guide/variables/) |
| Scheduling on Serverless | [docs](https://serverless.com/framework/docs/providers/aws/events/schedule/) |
| API Gateway events config in YAML | [docs](https://serverless.com/framework/docs/providers/aws/events/apigateway/) |
| Cloudwatch events triggers | [docs](https://serverless.com/framework/docs/providers/aws/events/cloudwatch-event/) |
