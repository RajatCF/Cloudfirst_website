# AWS Setup — Job Applications

Complete guide to create the database table and deploy the backend.

---

## Step 1: Create DynamoDB Table

### Option A — AWS Console (easiest)

1. Open [AWS DynamoDB Console](https://ap-south-1.console.aws.amazon.com/dynamodbv2/home?region=ap-south-1#tables)
2. Click **Create table**
3. Fill in:
   - **Table name:** `cloudfirst-job-applications`
   - **Partition key:** `applicationId` (String)
   - **Table settings:** Default settings
   - **Capacity mode:** On-demand
4. Click **Create table**

### Option B — AWS CLI

```bash
aws dynamodb create-table \
  --table-name cloudfirst-job-applications \
  --attribute-definitions AttributeName=applicationId,AttributeType=S \
  --key-schema AttributeName=applicationId,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST \
  --region ap-south-1
```

### Option C — CloudFormation

```bash
aws cloudformation deploy \
  --template-file backend/infrastructure/dynamodb-table.yaml \
  --stack-name cloudfirst-job-applications \
  --region ap-south-1
```

---

## Step 2: Deploy Lambda Function

1. Go to [AWS Lambda Console](https://ap-south-1.console.aws.amazon.com/lambda/home?region=ap-south-1)
2. Click **Create function**
3. Settings:
   - **Name:** `cloudfirst-job-application`
   - **Runtime:** Node.js 20.x
   - **Architecture:** x86_64
4. Click **Create function**

### Upload code

```bash
cd backend/lambda/job-application
npm install
# On Windows PowerShell:
Compress-Archive -Path index.mjs, node_modules, package.json -DestinationPath function.zip -Force
```

Upload `function.zip` in Lambda → **Code** → **Upload from** → **.zip file**

### Environment variables (Lambda → Configuration → Environment variables)

| Key | Value |
|---|---|
| `APPLICATIONS_TABLE` | `cloudfirst-job-applications` |
| `HR_EMAIL` | `rajat.sharma@cloudfirst.tech` |
| `FROM_EMAIL` | Your verified SES email (e.g. `noreply@cloudfirst.tech`) |

### IAM permissions (Lambda → Configuration → Permissions → Role)

Add this policy to the Lambda execution role:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["dynamodb:PutItem"],
      "Resource": "arn:aws:dynamodb:ap-south-1:YOUR_ACCOUNT_ID:table/cloudfirst-job-applications"
    },
    {
      "Effect": "Allow",
      "Action": ["ses:SendRawEmail", "ses:SendEmail"],
      "Resource": "*"
    }
  ]
}
```

Replace `YOUR_ACCOUNT_ID` with your AWS account ID.

---

## Step 3: Add API Gateway Route

Your existing API: `wefll4iita.execute-api.ap-south-1.amazonaws.com`

1. Open [API Gateway Console](https://ap-south-1.console.aws.amazon.com/apigateway/main/apis?region=ap-south-1)
2. Select the API used by your contact form (`wefll4iita`)
3. Add route:
   - **Method:** `POST`
   - **Path:** `/job-application`
   - **Integration:** Lambda function `cloudfirst-job-application`
4. Also add `OPTIONS` on same path for CORS
5. **Deploy API** to `dev` stage

Test URL:
```
POST https://wefll4iita.execute-api.ap-south-1.amazonaws.com/dev/job-application
```

---

## Step 4: Verify SES Email

1. Open [AWS SES Console](https://ap-south-1.console.aws.amazon.com/ses/home?region=ap-south-1)
2. Verify `FROM_EMAIL` (sender)
3. Verify `rajat.sharma@cloudfirst.tech` (or move SES out of sandbox mode for production)

---

## Step 5: Test

Submit a test application from:
- `/current-openings`
- `/company/careers`

Then check:
1. DynamoDB table has a new row
2. `rajat.sharma@cloudfirst.tech` received email with resume
3. Applicant received thank-you email

---

## What gets saved in DynamoDB

| Field | Description |
|---|---|
| applicationId | Unique ID |
| name | Full name |
| email | Email |
| phone | Phone |
| position | Job title |
| positionId | Job slug |
| linkedin | LinkedIn URL |
| message | Cover letter |
| resumeFileName | e.g. resume.pdf |
| resumeContentType | e.g. application/pdf |
| source | Website hostname |
| ip | Applicant IP |
| createdAt | Timestamp |
| status | `new` |

Resume file goes to HR via email attachment, not stored in DynamoDB.
