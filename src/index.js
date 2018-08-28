'use strict'
const Alexa = require('alexa-sdk')
var AWS = require('aws-sdk')
AWS.config.update({ region: 'us-east-1' })
var obj = require('./messages.js')
const constants = require('./constants/constants')
var convertArrayToReadableString = require('./helpers/convertArrayToReadableString')
var supportsDisplay = require('./helpers/supportsDisplay')
var isSimulator = require('./helpers/isSimulator')
var renderTemplate = require('./helpers/renderTemplate')
var isSlotValid = require('./helpers/isSlotValid')
var delegateSlotCollection = require('./helpers/delegateSlotCollection')
var randomPhrase = require('./helpers/randomPhrase')
var caireaAPI = require('./helpers/caireaAPI')
var body_temp = require('./helpers/templates')
var com_temp = require('./helpers/templatesComm')
const makeTextContent = Alexa.utils.TextUtils.makeTextContent
const makePlainText = Alexa.utils.TextUtils.makePlainText
const makeRichText = Alexa.utils.TextUtils.makeRichText
const makeImage = Alexa.utils.ImageUtils.makeImage
require('dotenv').config()
var Raven = require('raven')
Raven.config(process.env.RAVEN_FILE_NAME).install()
let speechOutput
let reprompt
const welcomeOutput = obj.messages.introduction.welcomeOutput
const welcomeOutputComm = obj.messages.introduction.welcomeOutputComm
const welcomeReprompt = obj.messages.introduction.welcomeReprompt
const welcomeBackOutput = obj.messages.introduction.welcomeBackOutput
const welcomeBackReprompt = obj.messages.introduction.welcomeBackReprompt
const not_assigned_say = obj.messages.introduction.not_assigned_say
const firstTimeUsage = obj.messages.introduction.firstTimeUsage
const serverDown = obj.messages.introduction.serverDown
const assignProperty = obj.messages.introduction.assignProperty
const noInformationSay = obj.messages.introduction.noInformationSay
const notUnderstand = obj.messages.introduction.notUnderstand
const tripIntro = [
  obj.messages.BeforeResponse.intro1,
  obj.messages.BeforeResponse.intro2,
  obj.messages.BeforeResponse.intro3
]
const speechIntros = [
  obj.messages.AfterResponse.speech1,
  obj.messages.AfterResponse.speech2,
  obj.messages.AfterResponse.speech3,
  obj.messages.AfterResponse.speech4
]
const commercial = [
  obj.messages.commercialBefore.com1,
  obj.messages.commercialBefore.com2
]
const asking = [
  obj.messages.BeforeAsking.ask1,
  obj.messages.BeforeAsking.ask2,
  obj.messages.BeforeAsking.ask3,
  obj.messages.BeforeAsking.ask4

]
function headers (access_token, device_id, serial_no = null) {
  return {
    'ALEXAID': device_id,
    'ALEXASERIALNO': serial_no,
    'test-header': 'cairea-lens',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + access_token
  }
}
const handlers = {
  'ElementSelected': function () {
    try {
      if (this.event.request.token == 'talkMore') {
        if (this.attributes['building_Id']) {
          var buildingId = this.attributes['building_Id']
          var buildintAttribute = this.attributes['building_Attribute']
          caireaAPI.getHotDealsDetails(headers(this.event.session.user.accessToken, this.event.context.System.device.deviceId), buildingId)
            .then((apiresponse) => {
              console.log('api response is', apiresponse)
              caireaAPI.getHotDealsSectionDetails(headers(this.event.session.user.accessToken, this.event.context.System.device.deviceId), buildingId, buildintAttribute)
                .then((attribute_response) => {
                  console.log('attribute response is', attribute_response)
                  var speechIntro = randomPhrase(speechIntros)
                  var speechOutput = randomPhrase(tripIntro)
                  var speech_title = attribute_response.title
                  var speech_text = attribute_response.textContent.primaryText.text
                  var show_text = attribute_response.textContent.secondaryText.text
                  var template_type = attribute_response.type
                  var imgAddress = 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'
                  if (supportsDisplay.call(this)) {
                    if (template_type == 'BodyTemplate2') {
                      this.response.speak(`${speechOutput}.${speech_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.body_template2a(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'BodyTemplate1') {
                      this.response.speak(`${speechOutput}.${speech_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.body_template1a(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'BodyTemplate3') {
                      this.response.speak(`${speechOutput}.${speech_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.body_template3a(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'BodyTemplate6') {
                      this.response.speak(`${speechOutput}.${speech_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.body_template6a(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'BodyTemplate7') {
                      this.response.speak(`${speechOutput}.${speech_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.body_template7a(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    }
                  }
                }).catch((error) => {
                  this.response.speak(noInformationSay)
                    .shouldEndSession(false)
                  this.emit(':responseReady')
                })
            }).catch((error) => {
              this.response.speak(noInformationSay)
                .shouldEndSession(false)
              this.emit(':responseReady')
            })
        } else if (this.attributes['addressId']) {
          var buildingId = this.attributes['addressId']
          var buildintAttribute = this.attributes['building_Attribute']
          caireaAPI.getHotDealsDetails(headers(this.event.session.user.accessToken, this.event.context.System.device.deviceId), buildingId)
            .then((apiresponse) => {
              console.log('api response is', apiresponse)
              caireaAPI.getHotDealsSectionDetails(headers(this.event.session.user.accessToken, this.event.context.System.device.deviceId), buildingId, buildintAttribute)
                .then((attribute_response) => {
                  console.log('attribute response is', attribute_response)
                  var speechIntro = randomPhrase(speechIntros)
                  var speechOutput = randomPhrase(tripIntro)
                  var speech_title = attribute_response.title
                  var speech_text = attribute_response.textContent.primaryText.text
                  var show_text = attribute_response.textContent.secondaryText.text
                  var template_type = attribute_response.type
                  var imgAddress = 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'
                  if (supportsDisplay.call(this)) {
                    if (template_type == 'BodyTemplate2') {
                      this.response.speak(`${speechOutput}.${speech_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.body_template2a(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'BodyTemplate1') {
                      this.response.speak(`${speechOutput}.${speech_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.body_template1a(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'BodyTemplate3') {
                      this.response.speak(`${speechOutput}.${speech_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.body_template3a(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'BodyTemplate6') {
                      this.response.speak(`${speechOutput}.${speech_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.body_template6a(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'BodyTemplate7') {
                      this.response.speak(`${speechOutput}.${speech_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.body_template7a(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    }
                  }
                }).catch((error) => {
                  this.response.speak(noInformationSay)
                    .shouldEndSession(false)
                  this.emit(':responseReady')
                })
            }).catch((error) => {
              this.response.speak(noInformationSay)
                .shouldEndSession(false)
              this.emit(':responseReady')
            })
        }
      }
    } catch (err) {
      this.response.speak(notUnderstand)
        .shouldEndSession(false)
      this.emit(':responseReady')
    }
  },
  'LaunchRequest': function () {
    try {
      var firstName = this.attributes['userName']
      if (firstName) {
        if (supportsDisplay.call(this)) {
          this.response.speak(`Welcome back ${firstName}, just say something like tell me which building you want to know or if you know the address of the building, please let me know. If this is not ${firstName}, say my name is and your name, and we can get to know each other.`)
            .renderTemplate(body_temp.template2())
            .shouldEndSession(false)
          this.emit(':responseReady')
        } else {
          this.response.speak(`Welcome back ${firstName}, just say something like tell me which building you want to know or if you know the address of the building, please let me know. If this is not ${firstName}, say my name is and your name, and we can get to know each other.`)
            .shouldEndSession(false)
          this.emit(':responseReady')
        }
      } else {
        if (supportsDisplay.call(this)) {
          this.response.speak(welcomeOutputComm)
            .renderTemplate(body_temp.template2())
            .shouldEndSession(false)
          this.emit(':responseReady')
        } else {
          this.response.speak(welcomeOutputComm)
            .shouldEndSession(false)
          this.emit(':responseReady')
        }
      }
    } catch (err) {
      this.response.speak(notUnderstand)
        .shouldEndSession(false)
      this.emit(':responseReady')
    }
  },
  'Unhandled': function () {
    this.response.speak('sorry , i did not understand what you said')
      .shouldEndSession(false)
    this.emit(':responseReady')
  },
  'comBuilding': function () {
    var name = this.event.request.intent.slots.personName.value
    this.attributes['userName'] = name
    var city = this.event.request.intent.slots.city.value
    var building = this.event.request.intent.slots.building.value
    var buildintTrait = this.event.request.intent.slots.buildingTrait.value

    if (!this.event.request.intent.slots.personName.value) {
      let prompt = 'what is your name'
      this.emit(':elicitSlot', 'personName', prompt, prompt)
    } else if (!this.event.request.intent.slots.city.value) {
      let prompt = `where do you live ${name}`
      this.emit(':elicitSlot', 'city', prompt, prompt)
    } else if (!this.event.request.intent.slots.building.value) {
      let prompt = `${name} . i know lot of buildings . please let me know which building you want to know`
      this.emit(':elicitSlot', 'building', prompt, prompt)
    } else if (!this.event.request.intent.slots.buildingTrait.value) {
      var speechAsk = randomPhrase(asking)
      let prompt = `${speechAsk}`
      this.emit(':elicitSlot', 'buildingTrait', prompt, prompt)
    } else if (this.event.request.intent.slots.buildingTrait.value) {
      var buildingId = this.event.request.intent.slots.building.resolutions.resolutionsPerAuthority[0].values[0].value.id
      this.attributes['building_Id'] = buildingId
      var buildintAttribute = this.event.request.intent.slots.buildingTrait.resolutions.resolutionsPerAuthority[0].values[0].value.id
      this.attributes['building_Attribute'] = buildintAttribute
      caireaAPI.getHotDealsDetails(headers(this.event.session.user.accessToken, this.event.context.System.device.deviceId), buildingId)
        .then((apiresponse) => {
          console.log('api response is', apiresponse)
          caireaAPI.getHotDealsSectionDetails(headers(this.event.session.user.accessToken, this.event.context.System.device.deviceId), buildingId, buildintAttribute)
            .then((attribute_response) => {
              if (attribute_response) {
                console.log('attribute response is', attribute_response)
                var speechIntro = randomPhrase(speechIntros)
                var speechOutput = randomPhrase(tripIntro)
                var speech_title = attribute_response.title
                var speech_text = attribute_response.textContent.primaryText.text
                var show_text = attribute_response.textContent.secondaryText.text
                var template_type = attribute_response.type
                var imgAddress = 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'
                if (supportsDisplay.call(this)) {
                  if (template_type == 'BodyTemplate2') {
                    this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                      .renderTemplate(com_temp.body_template2(attribute_response))
                      .shouldEndSession(false)
                    this.emit(':responseReady')
                  } else if (template_type == 'BodyTemplate1') {
                    this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                      .renderTemplate(com_temp.body_template1(attribute_response))
                      .shouldEndSession(false)
                    this.emit(':responseReady')
                  } else if (template_type == 'BodyTemplate3') {
                    this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                      .renderTemplate(com_temp.body_template3(attribute_response))
                      .shouldEndSession(false)
                    this.emit(':responseReady')
                  } else if (template_type == 'BodyTemplate6') {
                    this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                      .renderTemplate(com_temp.body_template6(attribute_response))
                      .shouldEndSession(false)
                    this.emit(':responseReady')
                  } else if (template_type == 'BodyTemplate7') {
                    this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                      .renderTemplate(com_temp.body_template7(attribute_response))
                      .shouldEndSession(false)
                    this.emit(':responseReady')
                  } else if (template_type == 'ListTemplate1') {
                    this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                      .renderTemplate(com_temp.List_Template1(attribute_response))
                      .shouldEndSession(false)
                    this.emit(':responseReady')
                  } else if (template_type == 'ListTemplate2') {
                    this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                      .renderTemplate(com_temp.List_Template2(attribute_response))
                      .shouldEndSession(false)
                    this.emit(':responseReady')
                  }
                } else {
                  this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                    .shouldEndSession(false)
                  this.emit(':responseReady')
                }
              }
            })
        })
    }
  },
  'talkBuilding': function () {
    try {
      var firstName = this.attributes['userName']
      if (firstName) {
      // var buildingId = this.event.request.intent.slots.building.resolutions.resolutionsPerAuthority[0].values[0].value.id
        if (this.attributes['building_Id']) {
          var buildingId = this.attributes['building_Id']
          var buildintTrait = this.event.request.intent.slots.buildingTrait.value
          var buildintAttribute = this.event.request.intent.slots.buildingTrait.resolutions.resolutionsPerAuthority[0].values[0].value.id
          this.attributes['building_Attribute'] = buildintAttribute
          caireaAPI.getHotDealsDetails(headers(this.event.session.user.accessToken, this.event.context.System.device.deviceId), buildingId)
            .then((apiresponse) => {
              console.log('api response is', apiresponse)
              caireaAPI.getHotDealsSectionDetails(headers(this.event.session.user.accessToken, this.event.context.System.device.deviceId), buildingId, buildintAttribute)
                .then((attribute_response) => {
                  if (attribute_response) {
                    console.log('attribute response is', attribute_response)
                    var speechIntro = randomPhrase(speechIntros)
                    var speechOutput = randomPhrase(tripIntro)
                    var speech_title = attribute_response.title
                    var speech_text = attribute_response.textContent.primaryText.text
                    var show_text = attribute_response.textContent.secondaryText.text
                    var template_type = attribute_response.type
                    var imgAddress = 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'
                    if (supportsDisplay.call(this)) {
                      if (template_type == 'BodyTemplate2') {
                        this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                          .renderTemplate(com_temp.body_template2(attribute_response))
                          .shouldEndSession(false)
                        this.emit(':responseReady')
                      } else if (template_type == 'BodyTemplate1') {
                        this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                          .renderTemplate(com_temp.body_template1(attribute_response))
                          .shouldEndSession(false)
                        this.emit(':responseReady')
                      } else if (template_type == 'BodyTemplate3') {
                        this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                          .renderTemplate(com_temp.body_template3(attribute_response))
                          .shouldEndSession(false)
                        this.emit(':responseReady')
                      } else if (template_type == 'BodyTemplate6') {
                        this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                          .renderTemplate(com_temp.body_template6(attribute_response))
                          .shouldEndSession(false)
                        this.emit(':responseReady')
                      } else if (template_type == 'BodyTemplate7') {
                        this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                          .renderTemplate(com_temp.body_template7(attribute_response))
                          .shouldEndSession(false)
                        this.emit(':responseReady')
                      } else if (template_type == 'ListTemplate1') {
                        this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                          .renderTemplate(com_temp.List_Template1(attribute_response))
                          .shouldEndSession(false)
                        this.emit(':responseReady')
                      } else if (template_type == 'ListTemplate2') {
                        this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                          .renderTemplate(com_temp.List_Template2(attribute_response))
                          .shouldEndSession(false)
                        this.emit(':responseReady')
                      }
                    } else {
                      var speechOutput = randomPhrase(tripIntro)
                      var speechIntro = randomPhrase(speechIntros)
                      this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    }
                  }
                }).catch((error) => {
                  this.response.speak(noInformationSay)
                    .shouldEndSession(false)
                  this.emit(':responseReady')
                })
            }).catch((error) => {
              this.response.speak(noInformationSay)
                .shouldEndSession(false)
              this.emit(':responseReady')
            })
        } else if (this.attributes['addressId']) {
          var buildingId = this.attributes['addressId']
          var buildintTrait = this.event.request.intent.slots.buildingTrait.value
          var buildintAttribute = this.event.request.intent.slots.buildingTrait.resolutions.resolutionsPerAuthority[0].values[0].value.id
          this.attributes['building_Attribute'] = buildintAttribute
          caireaAPI.getHotDealsDetails(headers(this.event.session.user.accessToken, this.event.context.System.device.deviceId), buildingId)
            .then((apiresponse) => {
              console.log('api response is', apiresponse)
              caireaAPI.getHotDealsSectionDetails(headers(this.event.session.user.accessToken, this.event.context.System.device.deviceId), buildingId, buildintAttribute)
                .then((attribute_response) => {
                  console.log('attribute response is', attribute_response)
                  var speechIntro = randomPhrase(speechIntros)
                  var speechOutput = randomPhrase(tripIntro)
                  var speech_title = attribute_response.title
                  var speech_text = attribute_response.textContent.primaryText.text
                  var show_text = attribute_response.textContent.secondaryText.text
                  var template_type = attribute_response.type
                  var imgAddress = 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'
                  if (supportsDisplay.call(this)) {
                    if (template_type == 'BodyTemplate2') {
                      this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.body_template2(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'BodyTemplate1') {
                      this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.body_template1(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'BodyTemplate3') {
                      this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.body_template3(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'BodyTemplate6') {
                      this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.body_template6(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'BodyTemplate7') {
                      this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.body_template7(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'ListTemplate1') {
                      this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.List_Template1(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'ListTemplate2') {
                      this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.List_Template2(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    }
                  } else {
                    var speechOutput = randomPhrase(tripIntro)
                    var speechIntro = randomPhrase(speechIntros)
                    this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                      .shouldEndSession(false)
                    this.emit(':responseReady')
                  }
                }).catch((error) => {
                  this.response.speak(noInformationSay)
                    .shouldEndSession(false)
                  this.emit(':responseReady')
                })
            }).catch((error) => {
              this.response.speak(noInformationSay)
                .shouldEndSession(false)
              this.emit(':responseReady')
            })
        } else {
          this.response.speak('i know lot of buildings . so,please let me know which building you want to know')
            .shouldEndSession(false)
          this.emit(':responseReady')
        }
      } else {
        this.response.speak('According to my knowledge,this is the first time you are using the skill. so, please say your name and we can get to know each other')
          .shouldEndSession(false)
        this.emit(':responseReady')
      }
    } catch (err) {
      this.response.speak(notUnderstand)
        .shouldEndSession(false)
      this.emit(':responseReady')
    }
  },
  'talkMore': function () {
    try {
      var building = this.event.request.intent.slots.building.value
      var buildintTrait = this.event.request.intent.slots.buildingTrait.value
      this.attributes['addressId'] = null
      var speechIntro = randomPhrase(speechIntros)
      if (!this.event.request.intent.slots.building.value) {
        let prompt = `i know lot of buildings.so,please let me know which building you want to know`
        this.emit(':elicitSlot', 'building', prompt, prompt)
      } else if (!this.event.request.intent.slots.buildingTrait.value) {
        var speechAsk = randomPhrase(asking)
        let prompt = `${speechAsk}`
        this.emit(':elicitSlot', 'buildingTrait', prompt, prompt)
      } else if (this.event.request.intent.slots.buildingTrait.value) {
        var buildingId = this.event.request.intent.slots.building.resolutions.resolutionsPerAuthority[0].values[0].value.id
        this.attributes['building_Id'] = buildingId
        var buildintAttribute = this.event.request.intent.slots.buildingTrait.resolutions.resolutionsPerAuthority[0].values[0].value.id
        this.attributes['building_Attribute'] = buildintAttribute
        caireaAPI.getHotDealsDetails(headers(this.event.session.user.accessToken, this.event.context.System.device.deviceId), buildingId)
          .then((apiresponse) => {
            console.log('api response is', apiresponse)
            caireaAPI.getHotDealsSectionDetails(headers(this.event.session.user.accessToken, this.event.context.System.device.deviceId), buildingId, buildintAttribute)
              .then((attribute_response) => {
                if (attribute_response) {
                  console.log('attribute response is', attribute_response)
                  var speechIntro = randomPhrase(speechIntros)
                  var speechOutput = randomPhrase(tripIntro)
                  var speech_title = attribute_response.title
                  var speech_text = attribute_response.textContent.primaryText.text
                  var show_text = attribute_response.textContent.secondaryText.text
                  var template_type = attribute_response.type
                  // var imgAddress = 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'
                  if (supportsDisplay.call(this)) {
                    if (template_type == 'BodyTemplate2') {
                      this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.body_template2(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'BodyTemplate1') {
                      this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.body_template1(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'BodyTemplate3') {
                      this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.body_template3(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'BodyTemplate6') {
                      this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.body_template6(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'BodyTemplate7') {
                      this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.body_template7(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'ListTemplate1') {
                      this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.List_Template1(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'ListTemplate2') {
                      this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.List_Template2(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    }
                  } else {
                    var speechOutput = randomPhrase(tripIntro)
                    var speechIntro = randomPhrase(speechIntros)
                    this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                      .shouldEndSession(false)
                    this.emit(':responseReady')
                  }
                }
              }).catch((error) => {
                this.response.speak(noInformationSay)
                  .shouldEndSession(false)
                this.emit(':responseReady')
              })
          }).catch((error) => {
            this.response.speak(noInformationSay)
              .shouldEndSession(false)
            this.emit(':responseReady')
          })
      }
    } catch (err) {
      this.response.speak(notUnderstand)
        .shouldEndSession(false)
      this.emit(':responseReady')
    }
  },
  'talkAddress': function () {
    try {
      var address = this.event.request.intent.slots.address.value
      this.attributes['building_Id'] = null
      var buildintTrait = this.event.request.intent.slots.buildingTrait.value
      if (!this.event.request.intent.slots.address.value) {
        let prompt = 'please tell the address of the building which you want to know'
        this.emit(':elicitSlot', 'personName', prompt, prompt)
      } else if (!this.event.request.intent.slots.buildingTrait.value) {
        let prompt = 'oh, i know that building. please ask what you want to know about that building like features,area for instance'
        this.emit(':elicitSlot', 'buildingTrait', prompt, prompt)
      } else if (this.event.request.intent.slots.buildingTrait.value) {
        var addressId = this.event.request.intent.slots.address.resolutions.resolutionsPerAuthority[0].values[0].value.id
        this.attributes['addressId'] = addressId
        var buildintAttribute = this.event.request.intent.slots.buildingTrait.resolutions.resolutionsPerAuthority[0].values[0].value.id
        this.attributes['building_Attribute'] = buildintAttribute
        caireaAPI.getHotDealsDetails(headers(this.event.session.user.accessToken, this.event.context.System.device.deviceId), addressId)
          .then((apiresponse) => {
            console.log('api response is', apiresponse)
            caireaAPI.getHotDealsSectionDetails(headers(this.event.session.user.accessToken, this.event.context.System.device.deviceId), addressId, buildintAttribute)
              .then((attribute_response) => {
                if (attribute_response) {
                  console.log('attribute response is', attribute_response)
                  var speechIntro = randomPhrase(speechIntros)
                  var speechOutput = randomPhrase(tripIntro)
                  var speech_title = attribute_response.title
                  var speech_text = attribute_response.textContent.primaryText.text
                  var show_text = attribute_response.textContent.secondaryText.text
                  var template_type = attribute_response.type
                  var imgAddress = 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'
                  if (supportsDisplay.call(this)) {
                    if (template_type == 'BodyTemplate2') {
                      this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.body_template2(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'BodyTemplate1') {
                      this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.body_template1(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'BodyTemplate3') {
                      this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.body_template3(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'BodyTemplate6') {
                      this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.body_template6(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'BodyTemplate7') {
                      this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.body_template7(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'ListTemplate1') {
                      this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.List_Template1(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    } else if (template_type == 'ListTemplate2') {
                      this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                        .renderTemplate(com_temp.List_Template2(attribute_response))
                        .shouldEndSession(false)
                      this.emit(':responseReady')
                    }
                  } else {
                    var speechOutput = randomPhrase(tripIntro)
                    var speechIntro = randomPhrase(speechIntros)
                    this.response.speak(`${speechOutput}.${show_text}.${speechIntro}`).listen(`${speechIntro}`)
                      .shouldEndSession(false)
                    this.emit(':responseReady')
                  }
                }
              }).catch((error) => {
                this.response.speak(noInformationSay)
                  .shouldEndSession(false)
                this.emit(':responseReady')
              })
          }).catch((error) => {
            this.response.speak(noInformationSay)
              .shouldEndSession(false)
            this.emit(':responseReady')
          })
      }
    } catch (err) {
      this.response.speak(notUnderstand)
        .shouldEndSession(false)
      this.emit(':responseReady')
    }
  },
  'AMAZON.HelpIntent': function () {
    speechOutput = 'ask what building you want to know'
    reprompt = 'ask what building you want to know'
    this.response.speak(speechOutput).listen(reprompt)
      .shouldEndSession(false)
    this.emit(':responseReady')
  },
  'AMAZON.CancelIntent': function () {
    speechOutput = 'Goodbye'
    this.response.speak(speechOutput)
    this.emit(':responseReady')
  },
  'AMAZON.StopIntent': function () {
    speechOutput = 'Goodbye'
    this.response.speak(speechOutput)
    this.emit(':responseReady')
  },
  'AMAZON.FallbackIntent': function () {
    speechOutput = 'Sorry I didnt understand that. Say help for assistance.'
    this.response.speak(speechOutput).listen(speechOutput)
      .shouldEndSession(false)
    this.emit(':responseReady')
  },
  'SessionEndedRequest': function () {
    var speechOutput = ''
    this.response.speak(speechOutput)
    this.emit(':responseReady')
  }
}
/* var doIt = function () {
  exports.handler = (event, context) => {
    var alexa = Alexa.handler(event, context)
    alexa.dynamoDBTableName = constants.dynamoDBTableName
    alexa.registerHandlers(handlers)
    alexa.execute()
  }
}
setTimeout(Raven.wrap(doIt), 1000) */

Raven.context(function () {
  exports.handler = (event, context) => {
    var alexa = Alexa.handler(event, context)
    alexa.dynamoDBTableName = constants.dynamoDBTableName
    alexa.registerHandlers(handlers)
    alexa.execute()
  }
})
