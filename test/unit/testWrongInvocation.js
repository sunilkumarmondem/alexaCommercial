const context = require('aws-lambda-mock-context')
var expect = require("chai").expect;
var index = require('../../src/index')
const ctx = context();
describe('Testing wrong invocations', function() {
    var speechResponse = null;
    var speechError = null;
    before(function(done) {
        index.handler({
  "version": "1.0",
  "session": {
    "new": false,
    "sessionId": "amzn1.echo-api.session.efaa5dc9-8912-4df0-9dcd-88532975c96c",
    "application": {
      "applicationId": "amzn1.ask.skill.45f8b1c1-af62-44bc-87d5-7a2973f96053"
    },
    "attributes": {
      "building_Id": "7",
      "building_Attribute": "overview",
      "userName": "Anil",
      "addressId": null
    },
    "user": {
      "userId": "amzn1.ask.account.AFC6YMRKUKH6QLMZMSE6H3MKNKANYXJ45KFYGPWWYNA6JQSN2D77OKP73I4TS5CR34CJ5ZQN6KK2V6NKEDFCK63XSVTO5PWUZV4QSDY5N3J3GNRST7IZF27UT24XLHGT3MDETX25GNYAVIKLY5KKIVZCOO3WQPBEDH3ROVTL2JGFIYLVW32F2VIOBLKZWX5KO4DW3LGK6U5WUVY",
      "accessToken": "h4XbJmE7WlMLWS9YiP9ODBPEiIwYi1"
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
        "accessToken": "h4XbJmE7WlMLWS9YiP9ODBPEiIwYi1"
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
      "apiAccessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJhdWQiOiJodHRwczovL2FwaS5hbWF6b25hbGV4YS5jb20iLCJpc3MiOiJBbGV4YVNraWxsS2l0Iiwic3ViIjoiYW16bjEuYXNrLnNraWxsLjQ1ZjhiMWMxLWFmNjItNDRiYy04N2Q1LTdhMjk3M2Y5NjA1MyIsImV4cCI6MTUzNDkyNDQ0MCwiaWF0IjoxNTM0OTIwODQwLCJuYmYiOjE1MzQ5MjA4NDAsInByaXZhdGVDbGFpbXMiOnsiY29uc2VudFRva2VuIjpudWxsLCJkZXZpY2VJZCI6ImFtem4xLmFzay5kZXZpY2UuQUY3NzZOM0dBWUdXQkZCT1VVVFNJWEdOM1hLN0xISUJLTktSUFREVjRFV0ZaT0EyVU4yM1pYMlJIWFNHNDZJUFo1QlNRNkdMSk01NVg1TVVDSlNYRDVFVUxJM1pNVk5TMjc3UTVaUVdWRVdaS0hISzRDQU1EM01TUVJMUFpMVTRaR041NktEWE9SN0FRWFhCU05CNjQ3WlY2UExRIiwidXNlcklkIjoiYW16bjEuYXNrLmFjY291bnQuQUZDNllNUktVS0g2UUxNWk1TRTZIM01LTktBTllYSjQ1S0ZZR1BXV1lOQTZKUVNOMkQ3N09LUDczSTRUUzVDUjM0Q0o1WlFONktLMlY2TktFREZDSzYzWFNWVE81UFdVWlY0UVNEWTVOM0ozR05SU1Q3SVpGMjdVVDI0WExIR1QzTURFVFgyNUdOWUFWSUtMWTVLS0lWWkNPTzNXUVBCRURIM1JPVlRMMkpHRklZTFZXMzJGMlZJT0JMS1pXWDVLTzREVzNMR0s2VTVXVVZZIn19.ONWOayQ_I_1NxJrK89sejepBtsivuGDteprPgIxSs_XUreP_cSke0M8sDMwkl-RRBBnPhSZ3cdqQ_aLXA9Z99hRbphRued0EjxxtZoDnfjuYRmprABqsaf6OlKh3poNl9C0KL9u-LwJTs2BKBYIMcvqGm2MV1MTQRmdlIyyU8tjZB9ITJUAKEmSDFih1QIxcwV1snMZFKiQrVI5K3a8X2t7szlnRsV8EvNZv5RHLnzoGLYZM-e8bt47nUUERtNjCND8SDO4YhMCjotQJhch-BR89V8jq2ng4fSg6g9iNp7OvreeTvRRmwL2LGosWnH3VhuhjYNlQl4GlgbRpDrqWrQ"
    }
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "amzn1.echo-api.request.38f3fd57-0908-4099-9e53-7718dd180898",
    "timestamp": "2018-08-22T06:54:00Z",
    "locale": "en-US",
    "intent": {
      "name": "AMAZON.FallbackIntent",
      "confirmationStatus": "NONE"
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
            expect(speechResponse.sessionAttributes.building_Attribute).to.be.equal('overview');
        })
        it("speechResponse", function() {
            expect(speechResponse.sessionAttributes.addressId).to.be.equal(null);
        })
        it("speechResponse", function() {
            expect(speechResponse.sessionAttributes.building_Id).to.be.equal('7');
        })
    })
})