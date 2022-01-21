---
title: 'How did I deploy csirin.com?'
date: '2022-01-10'
tags: ['JS', 'Typescript', 'React', 'AwsCdk']
---

I had not deployed any of my own applications to the internet until I brought this blog to life. Whenever the issue of 
deployment came to the fore in the projects I worked, I always stayed away from the topic of deployment because 
I felt it was difficult(!) and there was no situation that required me to work directly on the job. Still, my mouth was 
wide open against the [CloudFormation](https://aws.amazon.com/cloudformation/) files written.

```typescript
... // more code
Resources:
  VPC:
    Type: AWS::EC2::VPC
    Properties:
      CidrBlock: 10.0.0.0/16
      EnableDnsSupport: true
      EnableDnsHostnames: true
      InstanceTenancy: default
      Tags:
        - Key: Name
          Value: Windows Target VPC
  InternetGateway:
    Type: AWS::EC2::InternetGateway
  VPCGatewayAttachment:
    Type: AWS::EC2::VPCGatewayAttachment
    Properties:
      VpcId: !Ref VPC
      InternetGatewayId: !Ref InternetGateway
  SubnetA:
    Type: AWS::EC2::Subnet
    Properties:
      AvailabilityZone: us-east-1a
      VpcId: !Ref VPC
      CidrBlock: 10.0.0.0/24
      MapPublicIpOnLaunch: true
  RouteTable:
    Type: AWS::EC2::RouteTable
    Properties:
      VpcId: !Ref VPC
  InternetRoute:
    Type: AWS::EC2::Route
    DependsOn: InternetGateway
    Properties:
      DestinationCidrBlock: 0.0.0.0/0
      GatewayId: !Ref InternetGateway
      RouteTableId: !Ref RouteTable
... // more code
```
>  This code is only a part of a CloudFormation
file which its job deploying an EC2 instance...

Thanks to the [AWS CDK](https://aws.amazon.com/cdk/), 
I got rid of the fear of deployment and became able to deploy my own projects. Because CDK, without even changing the 
language I used in my project, allowed me to create the necessary resources in AWS and connect these resources among themselves.

---

## What resources did I use to deploy csirin.com?
- [Dockerfile](https://docs.docker.com/get-started/)
- [AWS](https://aws.amazon.com/cli/) & [CDK](https://aws.amazon.com/cdk/) CLI tools
- [React-Markdown](https://github.com/remarkjs/react-markdown)
- [Next.JS](https://nextjs.org/)

## How I used Dockerfile?
![](https://cdn-media-1.freecodecamp.org/images/1*F_Av332fsAf6RJ97gM2h8w.png)
> #### Photo by Victoire Joncheray / Unsplash

Since I used Next.JS in my project, I didn't need to build the project during
the development phase, but the pages had to be built during the deploy phase.
Therefore, I needed two different Dockerfiles. One is `Dockerfile_dev` which I
use to run on my own computer without building anything, and the other is `Dockerfile` which I use for deployment.
Separating the two in different places allowed me to develop my app faster. I couldn't wait
for the application to build pages every time I was working on the project... right?

---

## How I used AWS CDK?

```typescript
declare const cluster: ecs.Cluster;
const loadBalancedEcsService = new ecsPatterns.ApplicationLoadBalancedEc2Service(this, 'Service', {
  cluster,
  memoryLimitMiB: 1024,
  taskImageOptions: {
    image: ecs.ContainerImage.fromRegistry('test'),
    environment: {
      TEST_ENVIRONMENT_VARIABLE1: "test environment variable 1 value",
      TEST_ENVIRONMENT_VARIABLE2: "test environment variable 2 value",
    },
  },
});
```

Yes, this piece of code also creates an EC2 instance for me, as does the CloudFormation file above,
whose beginning and end I do not know... When I saw that CDK was relatively easier than writing my own CloudFormation, 
I decided that I wanted to use CDK and set up my pipeline for my deployment with CDK.

As I said before, I was always very nervous about deploy jobs, I didn't touch it even once until I understood what to do and how.
I guess there are people who feel the same as me... Now it was time to deploy. I needed to deploy my application I created to AWS.

But there was no need to be afraid anymore. Because CDK had given me the ability to write Typescript to create the CloudFormation I saw above. Since I know how to use Typescript, I went to [AWS-CDK Documentation](https://docs.aws.amazon.com/cdk/api/v2/) and started to examine the packages of the necessary services. By writing Typescript, I was able to use the AWS service I wanted and easily share their information with other AWS services. This way, I didn't go into the console and create permissions or services myself and link them together. This eliminated a lot of oversight. Although not for my blog, the fact that it can handle scaling dynamically and automatically this easily could give a lot of efficiency. Also having an ability to trigger my pipeline whenever I push my code into my Github Repo
was so nice and convenient.

Finally, here is my blog. 🎉🎉
