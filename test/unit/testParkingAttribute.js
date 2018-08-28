const context = require('aws-lambda-mock-context')
var expect = require("chai").expect;
var index = require('../../src/index')
const ctx = context();
describe('Testing parking attribute', function() {
    var speechResponse = null;
    var speechError = null;
    before(function(done) {
        index.handler({
  "version": "1.0",
  "session": {
    "new": false,
    "sessionId": "amzn1.echo-api.session.ca3f0f81-6d6d-4c69-baee-48875b4b5604",
    "application": {
      "applicationId": "amzn1.ask.skill.45f8b1c1-af62-44bc-87d5-7a2973f96053"
    },
    "attributes": {
      "building_Id": "7",
      "building_Attribute": "area",
      "userName": "Anil",
      "addressId": null
    },
    "user": {
      "userId": "amzn1.ask.account.AFC6YMRKUKH6QLMZMSE6H3MKNKANYXJ45KFYGPWWYNA6JQSN2D77OKP73I4TS5CR34CJ5ZQN6KK2V6NKEDFCK63XSVTO5PWUZV4QSDY5N3J3GNRST7IZF27UT24XLHGT3MDETX25GNYAVIKLY5KKIVZCOO3WQPBEDH3ROVTL2JGFIYLVW32F2VIOBLKZWX5KO4DW3LGK6U5WUVY",
      "accessToken": "OEaiYQVWXf0PZ0ji7OfsfyLBaA4CRj"
    }
  },
  "context": {
    "Display": {
      "token": ""
    },
    "System": {
      "application": {
        "applicationId": "amzn1.ask.skill.45f8b1c1-af62-44bc-87d5-7a2973f96053"
      },
      "user": {
        "userId": "amzn1.ask.account.AFC6YMRKUKH6QLMZMSE6H3MKNKANYXJ45KFYGPWWYNA6JQSN2D77OKP73I4TS5CR34CJ5ZQN6KK2V6NKEDFCK63XSVTO5PWUZV4QSDY5N3J3GNRST7IZF27UT24XLHGT3MDETX25GNYAVIKLY5KKIVZCOO3WQPBEDH3ROVTL2JGFIYLVW32F2VIOBLKZWX5KO4DW3LGK6U5WUVY",
        "accessToken": "OEaiYQVWXf0PZ0ji7OfsfyLBaA4CRj"
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
      "apiAccessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJhdWQiOiJodHRwczovL2FwaS5hbWF6b25hbGV4YS5jb20iLCJpc3MiOiJBbGV4YVNraWxsS2l0Iiwic3ViIjoiYW16bjEuYXNrLnNraWxsLjQ1ZjhiMWMxLWFmNjItNDRiYy04N2Q1LTdhMjk3M2Y5NjA1MyIsImV4cCI6MTUzNTM1ODM1MywiaWF0IjoxNTM1MzU0NzUzLCJuYmYiOjE1MzUzNTQ3NTMsInByaXZhdGVDbGFpbXMiOnsiY29uc2VudFRva2VuIjpudWxsLCJkZXZpY2VJZCI6ImFtem4xLmFzay5kZXZpY2UuQUY3NzZOM0dBWUdXQkZCT1VVVFNJWEdOM1hLN0xISUJLTktSUFREVjRFV0ZaT0EyVU4yM1pYMlJIWFNHNDZJUFo1QlNRNkdMSk01NVg1TVVDSlNYRDVFVUxJM1pNVk5TMjc3UTVaUVdWRVdaS0hISzRDQU1EM01TUVJMUFpMVTRaR041NktEWE9SN0FRWFhCU05CNjQ3WlY2UExRIiwidXNlcklkIjoiYW16bjEuYXNrLmFjY291bnQuQUZDNllNUktVS0g2UUxNWk1TRTZIM01LTktBTllYSjQ1S0ZZR1BXV1lOQTZKUVNOMkQ3N09LUDczSTRUUzVDUjM0Q0o1WlFONktLMlY2TktFREZDSzYzWFNWVE81UFdVWlY0UVNEWTVOM0ozR05SU1Q3SVpGMjdVVDI0WExIR1QzTURFVFgyNUdOWUFWSUtMWTVLS0lWWkNPTzNXUVBCRURIM1JPVlRMMkpHRklZTFZXMzJGMlZJT0JMS1pXWDVLTzREVzNMR0s2VTVXVVZZIn19.ZpnUSKtgv7ZOR6Ca4iKuYbtnxYmsuFBNs5EtHCN21FmoPc3JZvmi8ze7vhopmRcO7fFft49mc7-u9WuH2sa7aWC_dJ9zGAf2NuIduSxADKIGDbfHvA7kB7K9tT-0F3zMAV2BFb8DoygFfkcI7V4cwwUeYojF8x5kBwol2pEyCHLLQ4jE9yQ3TX5sRpIjZFf6nRBfbg7L3SGk5EdT84C-CWS0RYezl82LayJjxxm2-RGXxesy4D0HTJFaudG_ceu3-ihSN1XiXMTHnUgp-Ep8LVcIsrTbrO2UuSCvy3604UevElBQDssqK0Sl93_TZba54j1DnzRvR-RdMyCylKnDlg"
    }
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "amzn1.echo-api.request.5a495fbb-8542-48d8-b25d-6066908b8912",
    "timestamp": "2018-08-27T07:25:53Z",
    "locale": "en-US",
    "intent": {
      "name": "talkBuilding",
      "confirmationStatus": "NONE",
      "slots": {
        "buildingTrait": {
          "name": "buildingTrait",
          "value": "parking",
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
                      "name": "parking",
                      "id": "parking"
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
            expect(speechResponse.sessionAttributes.userName).to.be.equal('Anil');
        })
        it("speechResponse", function() {
            expect(speechResponse.sessionAttributes.building_Attribute).to.be.equal('parking');
        })
        it("speechResponse", function() {
            expect(speechResponse.sessionAttributes.addressId).to.be.equal(null);
        })
        it("speechResponse", function() {
            expect(speechResponse.sessionAttributes.building_Id).to.be.equal('7');
        })
    })
})