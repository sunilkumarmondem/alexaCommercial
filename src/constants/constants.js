
var constants = Object.freeze({
  // app id
  // appId: 'amzn1.ask.skill.e04695ff-b363-4ead-8cd3-647f321b70fc',
  appId: 'amzn1.ask.skill.38f8769a-f5f0-42d3-9ee8-e584ded6859d',

  // Dynamodb table Name
  // dynamoDBTableName: 'caireaLenzzzUsers',
  dynamoDBTableName: process.env.DYNAMODB_NAME,

  // Skill States TODO: add new states for address lookup and video usage and such
  states: {
    ONBOARDING: '',
    MAIN: '_MAIN',
    BUILD: '_BUILD'
  }

})

// changed this 2.2.18 exports.constants = constants;

module.exports = constants
