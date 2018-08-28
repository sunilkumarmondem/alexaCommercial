const context = require('aws-lambda-mock-context')
var expect = require("chai").expect;
var index = require('../../src/index')
const ctx = context();
describe('Testing cancel request', function() {
    var speechResponse = null;
    var speechError = null;
    before(function(done) {
        index.handler({
  "version": "1.0",
  "session": {
    "new": false,
    "sessionId": "amzn1.echo-api.session.da575e91-d3e4-49ea-aba2-86c5aeb99e24",
    "application": {
      "applicationId": "amzn1.ask.skill.45f8b1c1-af62-44bc-87d5-7a2973f96053"
    },
    "user": {
      "userId": "amzn1.ask.account.AFC6YMRKUKH6QLMZMSE6H3MKNKANYXJ45KFYGPWWYNA6JQSN2D77OKP73I4TS5CR34CJ5ZQN6KK2V6NKEDFCK63XSVTO5PWUZV4QSDY5N3J3GNRST7IZF27UT24XLHGT3MDETX25GNYAVIKLY5KKIVZCOO3WQPBEDH3ROVTL2JGFIYLVW32F2VIOBLKZWX5KO4DW3LGK6U5WUVY",
      "accessToken": "Z7pdYrlYUXJ8xj78zho92glG8Itgia"
    }
  },
  "context": {
    "Display": {
      "token": "listToken"
    },
    "System": {
      "application": {
        "applicationId": "amzn1.ask.skill.45f8b1c1-af62-44bc-87d5-7a2973f96053"
      },
      "user": {
        "userId": "amzn1.ask.account.AFC6YMRKUKH6QLMZMSE6H3MKNKANYXJ45KFYGPWWYNA6JQSN2D77OKP73I4TS5CR34CJ5ZQN6KK2V6NKEDFCK63XSVTO5PWUZV4QSDY5N3J3GNRST7IZF27UT24XLHGT3MDETX25GNYAVIKLY5KKIVZCOO3WQPBEDH3ROVTL2JGFIYLVW32F2VIOBLKZWX5KO4DW3LGK6U5WUVY",
        "accessToken": "Z7pdYrlYUXJ8xj78zho92glG8Itgia"
      },
      "device": {
        "deviceId": "amzn1.ask.device.AF776N3GAYGWBFBOUUTSIXGN3XK7LHIBKNKRPTDV4EWFZOA2UN23ZX2RHXSG46IPZ5BSQ6GLJM55X5MUCJSXD5EULI3ZMVNS277Q5ZQWVEWZKHHK4CAMD3MSQRLPZLU4ZGN56KDXOR7AQXXBSNB647ZV6PLQ",
        "supportedInterfaces": {
          "Display": {
            "templateVersion": "1.0",
            "markupVersion": "1.0"
          }
        }
      },
      "apiEndpoint": "https://api.amazonalexa.com",
      "apiAccessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJhdWQiOiJodHRwczovL2FwaS5hbWF6b25hbGV4YS5jb20iLCJpc3MiOiJBbGV4YVNraWxsS2l0Iiwic3ViIjoiYW16bjEuYXNrLnNraWxsLjQ1ZjhiMWMxLWFmNjItNDRiYy04N2Q1LTdhMjk3M2Y5NjA1MyIsImV4cCI6MTUzNDc2MzA3OSwiaWF0IjoxNTM0NzU5NDc5LCJuYmYiOjE1MzQ3NTk0NzksInByaXZhdGVDbGFpbXMiOnsiY29uc2VudFRva2VuIjpudWxsLCJkZXZpY2VJZCI6ImFtem4xLmFzay5kZXZpY2UuQUY3NzZOM0dBWUdXQkZCT1VVVFNJWEdOM1hLN0xISUJLTktSUFREVjRFV0ZaT0EyVU4yM1pYMlJIWFNHNDZJUFo1QlNRNkdMSk01NVg1TVVDSlNYRDVFVUxJM1pNVk5TMjc3UTVaUVdWRVdaS0hISzRDQU1EM01TUVJMUFpMVTRaR041NktEWE9SN0FRWFhCU05CNjQ3WlY2UExRIiwidXNlcklkIjoiYW16bjEuYXNrLmFjY291bnQuQUZDNllNUktVS0g2UUxNWk1TRTZIM01LTktBTllYSjQ1S0ZZR1BXV1lOQTZKUVNOMkQ3N09LUDczSTRUUzVDUjM0Q0o1WlFONktLMlY2TktFREZDSzYzWFNWVE81UFdVWlY0UVNEWTVOM0ozR05SU1Q3SVpGMjdVVDI0WExIR1QzTURFVFgyNUdOWUFWSUtMWTVLS0lWWkNPTzNXUVBCRURIM1JPVlRMMkpHRklZTFZXMzJGMlZJT0JMS1pXWDVLTzREVzNMR0s2VTVXVVZZIn19.JSIIEAljUwJ9K0GafTajEYvHclg4jtdLBZ-gwI8oGFZy8bTcNN93BvGymChcmt9yR_wiflhfl8KnfXnsjiWNBxOOkrvJn9QTYbWwXv3LHdrx8cBfuEh9A9ZMBODr5JbXGWDEcVjQALbz9g9inMYlZ0VjX5mS0_pk_Mn195CSPyfRgw5UkXKlIWKGjLcSzqrYaq3XA0P3pS4D2ZKIXRkRjc9ddvHiEBoyp-PGYh0NYpWXl42d6FHgSGcNnulGHFhtB3i_MBUWt0gku1d03gCxHoA6vAF-jD1RRMjC49jFGCfCen4TnUzBwXKGW34zeEQapc56BpmI-_WYKBgR6dQDBA"
    }
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "amzn1.echo-api.request.e063dd6f-a8b9-4331-bbab-a2b357294ec2",
    "timestamp": "2018-08-20T10:04:39Z",
    "locale": "en-US",
    "intent": {
      "name": "talkBuilding",
      "confirmationStatus": "NONE",
      "slots": {
        "buildingTrait": {
          "name": "buildingTrait",
          "value": "area",
          "resolutions": {
            "resolutionsPerAuthority": [
              {
                "authority": "amzn1.er-authority.echo-sdk.amzn1.ask.skill.45f8b1c1-af62-44bc-87d5-7a2973f96053.BUILDING_ATTRIBUTES",
                "status": {
                  "code": "ER_SUCCESS_MATCH"
                },
                "values": [
                  {
                    "value": {
                      "name": "Area",
                      "id": "area"
                    }
                  }
                ]
              }
            ]
          },
          "confirmationStatus": "NONE"
        }
      }
    },
    "dialogState": "STARTED"
  }
}, ctx);
        ctx.Promise
            .then(response => {
                speechResponse = response;
                console.log(speechResponse);
                done();
            })
            .catch(error => {
                speechError = error;
                done();
            })
    })
    describe("response structure", function() {
        it("should not have error", function() {
            expect(speechError).to.be.null;
        })
        it("speechResponse", function() {
            expect(speechResponse).to.be.not.null;
        })
        it("speechResponse", function() {
            expect(speechResponse.response.outputSpeech.ssml).to.be.not.null;
        })
        it("speechResponse", function() {
            expect(speechResponse.sessionAttributes.userName).to.be.equal();
        })
    })
})