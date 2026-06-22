# Run this script from project root after AWS CLI is configured
# Requires: aws cli, npm

$ErrorActionPreference = "Stop"
$Region = "ap-south-1"
$LambdaDir = Join-Path $PSScriptRoot "..\lambda\job-application"
$ZipPath = Join-Path $LambdaDir "function.zip"

Write-Host "=== Step 1: Create DynamoDB table ===" -ForegroundColor Cyan
aws cloudformation deploy `
  --template-file (Join-Path $PSScriptRoot "dynamodb-table.yaml") `
  --stack-name cloudfirst-job-applications `
  --region $Region `
  --no-fail-on-empty-changeset

Write-Host "`n=== Step 2: Package Lambda ===" -ForegroundColor Cyan
Push-Location $LambdaDir
npm install --omit=dev
if (Test-Path $ZipPath) { Remove-Item $ZipPath -Force }
Compress-Archive -Path index.mjs, node_modules, package.json -DestinationPath function.zip -Force
Pop-Location

Write-Host "`nLambda zip created at: $ZipPath" -ForegroundColor Green
Write-Host "`n=== Next manual steps ===" -ForegroundColor Yellow
Write-Host "1. Upload function.zip to AWS Lambda (cloudfirst-job-application)"
Write-Host "2. Set env vars: APPLICATIONS_TABLE, HR_EMAIL, FROM_EMAIL"
Write-Host "3. Add IAM permissions for DynamoDB + SES"
Write-Host "4. Add POST /job-application route in API Gateway"
Write-Host "5. Deploy API to dev stage"
Write-Host "`nFull guide: backend/SETUP.md"
