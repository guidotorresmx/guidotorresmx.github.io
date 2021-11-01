---
title: Deploying static websites with S3 and Github actions
date: 2021-10-30 04:55:39
id: 1635584139
tags:
  - hexo
  - AWS
  - S3
  - github
  - git
  - CI/CD
categories:
  - CI/CD
  - AWS
  - hexo
keywords: hexo, github, aws, s3
description: description
---
---
# Intro
Once your awesome Hexo static website is up and running, you may want to deploy it so everybody on the internet can actually read it. fortunately, there are multiple choices, but being myself a humble AWS ~~brainwashed~~ enthusiast, I'm going to introduce you to the github + github actions + route53 + s3 + CloudFront.

Note: Ignore the fact that github is now another service property of ~~the devil himself in the shape of a corporation~~ Microsoft and just follow me on this one, because publishing your website using github will bring you up some useful features.

# AWS setup
First things first, you have to go to [AWS console webapp][aws] and create your AWS account, and set up a specific user for this task; you must not use your root account!

## Step 1: Create a new user
Once you'd created your AWS account, go on and sign in, you will see a nice interface, with a top search omnibar. proceed and type IAM.

![AWS search bar and IAM](iam.png)

Then go to __users__ on the left panel under __access management__ and click on __add Users__; you just have to add a username, and a password policy.

![AWS new user and password policy](iam-user-setup.png)

## Step 2: Attach necessary policies
After clicking next, you will have to add attach the actual policies for your new user, type the services you need and check each one of them in the contiguous box. For the purpose of this walkthrough, the needed policies are the following:
- CLoudFrontFullAccess
- Route53FullAccess
- S3FullAccess

 ![AWS new users policies](iam-policies.png)





[aws]: https://console.aws.amazon.com/console/ "aws console"
