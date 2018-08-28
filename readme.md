# Alexa Skill Commercial


## First-Time-Only Setup
1. Install [Node.js](https://nodejs.org/en/)
    - If you are only using Node.js for Lambda development, consider installing the [version of Node.js](https://nodejs.org/en/download/releases/) that matches the [supported Lambda version](http://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html) which is v6.10
    - Installing Node.js will also install Node Package Manager (npm)
2. Create an [Amazon Web Service account](https://aws.amazon.com/)
3. Create a user instead of the AWS account root user: [Creating Your First IAM Admin User and Group](http://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html) (save the .csv file locally)
4. Install AWS CLI: [Installing the AWS Command Line Interface](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)
5. Configure AWS locally: [Quick Configuration](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)
    ```bash
    $ aws configure
    AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
    AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
    Default region name [None]: us-east-1
    Default output format [None]: json
    ```


## Quick Setup

1. Clone project repository. use 

    ```bash
    $ git clone https://git-codecommit.us-east-1.amazonaws.com/v1/repos/AlexaCommercial
    $ cd AlexaResidential
    
    ```

2. Deploying Aws lambda development version

    ```bash
    $ ./publish_lambda.sh commercialAlexadev
    ```
    
3. Deploying Aws lambda production version

    ```bash
    $ ./publish_lambda.sh dev_commercial
    ```


### Testing Code Format
The purpose of this test is to test the code format.

```bash
$ ./format.sh
```

### Unit Tests
The purpose of unit tests is to test code independently of other code.

[Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/) are used for this type of testing. Consult their documentation for details.



```bash
$ ./test.sh 
 ```

