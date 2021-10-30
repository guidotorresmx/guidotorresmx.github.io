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
Once your awesome Hexo static website is up and running, you may want to deploy somewhere (unless is something you really don't want to share, such as the last letter you wrote for your ex just before she dumped you for a way more qualified cloud engineer, amerite?). so there are multiple choices, but as yet another AWS enthusiast, obiously I'm going to introduce you to the github + github actions + route53 + s3 + CloudFront; Ignore the fact that github is now yet another service property of Microsoft (😡) and just follow me on this one, because publishing your website using github will bring you up some useful features.

# AWS setup
For starter, you have to go to [AWS console webapp][aws]

  [aws]: https://console.aws.amazon.com/console/ "aws console"
