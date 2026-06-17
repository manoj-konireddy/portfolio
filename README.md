# AWS Serverless Visitor Counter

## Overview

This project is a serverless visitor counter application built on AWS. The frontend is hosted on Amazon S3, while visitor counts are stored in Amazon DynamoDB. AWS Lambda processes requests and Amazon API Gateway exposes a REST endpoint for the frontend.

## Architecture

```text
Browser
   ↓
S3 Static Website
   ↓
JavaScript Fetch API
   ↓
API Gateway
   ↓
AWS Lambda
   ↓
DynamoDB
```

## AWS Services Used

* Amazon S3
* Amazon API Gateway
* AWS Lambda
* Amazon DynamoDB
* AWS IAM

## Features

* Static website hosting with Amazon S3
* Serverless backend using AWS Lambda
* REST API using API Gateway
* Visitor count storage in DynamoDB
* Real-time visitor count updates
* No servers to manage

## Project Structure

```text
aws-serverless-visitor-counter/
│
├── index.html
├── style.css
├── lambda_function.py
└── README.md
```

## DynamoDB Configuration

### Table Name

```text
visitor-counter
```

### Partition Key

```text
id (String)
```

### Sample Record

```json
{
  "id": "visitors",
  "count": 0
}
```

## Lambda Function

The Lambda function:

1. Reads the current visitor count from DynamoDB.
2. Increments the count by one.
3. Updates DynamoDB.
4. Returns the updated count as JSON.

Example Response:

```json
{
  "count": 10
}
```

## API Endpoint

Example:

```text
https://YOUR_API_ID.execute-api.YOUR_REGION.amazonaws.com/prod/count
```

## Website Integration

JavaScript fetches the visitor count from API Gateway and displays it on the webpage.

Example:

```javascript
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
      document.getElementById("counter").innerText = data.count;
  });
```

## Learning Outcomes

Through this project I learned:

* AWS serverless architecture
* API development with API Gateway
* AWS Lambda functions
* DynamoDB operations
* IAM permissions and roles
* Frontend and backend integration
* Cloud-native application deployment

## Author

Manoj Kumar Reddy Konireddy
