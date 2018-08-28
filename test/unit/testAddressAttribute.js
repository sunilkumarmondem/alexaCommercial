const context = require('aws-lambda-mock-context')
var expect = require("chai").expect;
var index = require('../../src/index')
const ctx = context();
describe('Testing building address attributes', function() {
    var speechResponse = null;
    var speechError = null;
    before(function(done) {
        index.handler({
  "version": "1.0",
  "session": {
    "new": false,
    "sessionId": "amzn1.echo-api.session.a072d966-b8a2-4437-a4de-bf2badc5bb63",
    "application": {
      "applicationId": "amzn1.ask.skill.45f8b1c1-af62-44bc-87d5-7a2973f96053"
    },
    "attributes": {
      "building_Id": null,
      "building_Attribute": "area",
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
      "apiAccessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJhdWQiOiJodHRwczovL2FwaS5hbWF6b25hbGV4YS5jb20iLCJpc3MiOiJBbGV4YVNraWxsS2l0Iiwic3ViIjoiYW16bjEuYXNrLnNraWxsLjQ1ZjhiMWMxLWFmNjItNDRiYy04N2Q1LTdhMjk3M2Y5NjA1MyIsImV4cCI6MTUzNDU5MTI1NCwiaWF0IjoxNTM0NTg3NjU0LCJuYmYiOjE1MzQ1ODc2NTQsInByaXZhdGVDbGFpbXMiOnsiY29uc2VudFRva2VuIjpudWxsLCJkZXZpY2VJZCI6ImFtem4xLmFzay5kZXZpY2UuQUY3NzZOM0dBWUdXQkZCT1VVVFNJWEdOM1hLN0xISUJLTktSUFREVjRFV0ZaT0EyVU4yM1pYMlJIWFNHNDZJUFo1QlNRNkdMSk01NVg1TVVDSlNYRDVFVUxJM1pNVk5TMjc3UTVaUVdWRVdaS0hISzRDQU1EM01TUVJMUFpMVTRaR041NktEWE9SN0FRWFhCU05CNjQ3WlY2UExRIiwidXNlcklkIjoiYW16bjEuYXNrLmFjY291bnQuQUZDNllNUktVS0g2UUxNWk1TRTZIM01LTktBTllYSjQ1S0ZZR1BXV1lOQTZKUVNOMkQ3N09LUDczSTRUUzVDUjM0Q0o1WlFONktLMlY2TktFREZDSzYzWFNWVE81UFdVWlY0UVNEWTVOM0ozR05SU1Q3SVpGMjdVVDI0WExIR1QzTURFVFgyNUdOWUFWSUtMWTVLS0lWWkNPTzNXUVBCRURIM1JPVlRMMkpHRklZTFZXMzJGMlZJT0JMS1pXWDVLTzREVzNMR0s2VTVXVVZZIn19.NKAl6qbnOUtToR5QOczcocqzFlcgBV_bLQdFhidvoyO_NiZSXuj5-elhOXBBB3H0GHFef-elDJj9GvtUQbEL9FDERaGDU_UgbEdgvu_ZPaevHHCkUdfySAzw_HMbwBat2Vf0lZ5k_K7mrg-ldV2-rkskf-Jngffl6D1kqIK-AEpA1fp0oOjhkAjiOcDehDOIEpyV0HHtRSQPhFy1_urK2d8SPBFWVY7omwD58lXuis8jyOEJ0tVllyeJvNjbUGMusTmrQt36b3xnQnDuB9K9eG8cHTGTSzo8k2SRLUP94gxpu2KltcmZG-3NEc7M9zbIxhfjiCayaC18LEtkN7J--Q"
    }
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "amzn1.echo-api.request.9809ef8c-5a0e-4089-933c-554cfef6c78e",
    "timestamp": "2018-08-18T10:20:54Z",
    "locale": "en-US",
    "intent": {
      "name": "talkAddress",
      "confirmationStatus": "NONE",
      "slots": {
        "buildingTrait": {
          "name": "buildingTrait",
          "value": "overview",
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
                      "name": "Overview",
                      "id": "overview"
                    }
                  },
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
        },
        "address": {
          "name": "address",
          "value": "new road",
          "resolutions": {
            "resolutionsPerAuthority": [
              {
                "authority": "amzn1.er-authority.echo-sdk.amzn1.ask.skill.45f8b1c1-af62-44bc-87d5-7a2973f96053.List_of_addresses",
                "status": {
                  "code": "ER_SUCCESS_MATCH"
                },
                "values": [
                  {
                    "value": {
                      "name": "2369 new road MARIETTA, GEORGIA 30067",
                      "id": "11"
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
    "dialogState": "IN_PROGRESS"
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