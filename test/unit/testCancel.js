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
    "sessionId": "amzn1.echo-api.session.73a2f49d-da6e-42a0-bb18-eba2f9154c24",
    "application": {
      "applicationId": "amzn1.ask.skill.45f8b1c1-af62-44bc-87d5-7a2973f96053"
    },
    "attributes": {
      "building_Id": null,
      "building_Attribute": "overview",
      "userName": "ram",
      "addressId": "11"
    },
    "user": {
      "userId": "amzn1.ask.account.AFC6YMRKUKH6QLMZMSE6H3MKNKANYXJ45KFYGPWWYNA6JQSN2D77OKP73I4TS5CR34CJ5ZQN6KK2V6NKEDFCK63XSVTO5PWUZV4QSDY5N3J3GNRST7IZF27UT24XLHGT3MDETX25GNYAVIKLY5KKIVZCOO3WQPBEDH3ROVTL2JGFIYLVW32F2VIOBLKZWX5KO4DW3LGK6U5WUVY",
      "accessToken": "YJUQn8mUUye9Nth5zWVvSpD69Bm3yA"
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
        "accessToken": "YJUQn8mUUye9Nth5zWVvSpD69Bm3yA"
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
      "apiAccessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJhdWQiOiJodHRwczovL2FwaS5hbWF6b25hbGV4YS5jb20iLCJpc3MiOiJBbGV4YVNraWxsS2l0Iiwic3ViIjoiYW16bjEuYXNrLnNraWxsLjQ1ZjhiMWMxLWFmNjItNDRiYy04N2Q1LTdhMjk3M2Y5NjA1MyIsImV4cCI6MTUzNDU5MTc0OSwiaWF0IjoxNTM0NTg4MTQ5LCJuYmYiOjE1MzQ1ODgxNDksInByaXZhdGVDbGFpbXMiOnsiY29uc2VudFRva2VuIjpudWxsLCJkZXZpY2VJZCI6ImFtem4xLmFzay5kZXZpY2UuQUY3NzZOM0dBWUdXQkZCT1VVVFNJWEdOM1hLN0xISUJLTktSUFREVjRFV0ZaT0EyVU4yM1pYMlJIWFNHNDZJUFo1QlNRNkdMSk01NVg1TVVDSlNYRDVFVUxJM1pNVk5TMjc3UTVaUVdWRVdaS0hISzRDQU1EM01TUVJMUFpMVTRaR041NktEWE9SN0FRWFhCU05CNjQ3WlY2UExRIiwidXNlcklkIjoiYW16bjEuYXNrLmFjY291bnQuQUZDNllNUktVS0g2UUxNWk1TRTZIM01LTktBTllYSjQ1S0ZZR1BXV1lOQTZKUVNOMkQ3N09LUDczSTRUUzVDUjM0Q0o1WlFONktLMlY2TktFREZDSzYzWFNWVE81UFdVWlY0UVNEWTVOM0ozR05SU1Q3SVpGMjdVVDI0WExIR1QzTURFVFgyNUdOWUFWSUtMWTVLS0lWWkNPTzNXUVBCRURIM1JPVlRMMkpHRklZTFZXMzJGMlZJT0JMS1pXWDVLTzREVzNMR0s2VTVXVVZZIn19.PgiNi7YqfrLjhEiP37YTqvNZZiVwXa49yEMLq5ZLugof1DoQejhBxhyiJm-LvZaR4EAY_gypHwsdHlDDF-U2lRTBbw5W2V48JhSzadARydkhexWJeNjqC22Yu5YnERwcoc4bW-EouB_WV6vLlGo9mzsEer95XXXFaBFzPHhfTrC8MnqkrIv69U1GR5-n6S_x5DYzpLFjTIrtkNPZAHOFBa61hT4XL_UrNlPXOEjFya0yrG1MgCKJBCiNZI08G7v9dT-pBu2HZaHSQ40OBGM-B6f1PR8sD7H9-S-vfI6c3eFc3er801sb3qZ5Mz0rRG4B3B9HSEWREVaOAsqPL8i1fQ"
    }
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "amzn1.echo-api.request.23113309-df80-488c-ad99-069def4a6262",
    "timestamp": "2018-08-18T10:29:09Z",
    "locale": "en-US",
    "intent": {
      "name": "AMAZON.CancelIntent",
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
            expect(speechResponse.sessionAttributes.userName).to.be.equal('ram');
        })
        it("speechResponse", function() {
            expect(speechResponse.sessionAttributes.building_Attribute).to.be.equal('overview');
        })
        it("speechResponse", function() {
            expect(speechResponse.sessionAttributes.addressId).to.be.equal('11');
        })
        it("speechResponse", function() {
            expect(speechResponse.sessionAttributes.building_Id).to.be.equal(null);
        })
    })
})