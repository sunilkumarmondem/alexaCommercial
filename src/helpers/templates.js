const Alexa = require('alexa-sdk')
var AWS = require('aws-sdk')
var makeTextContent = Alexa.utils.TextUtils.makeTextContent
var makePlainText = Alexa.utils.TextUtils.makePlainText
var makeRichText = Alexa.utils.TextUtils.makeRichText
var makeImage = Alexa.utils.ImageUtils.makeImage
require('dotenv').config()
module.exports = {
  body_template1: (details) => {
    const bodyTemplate1 = new Alexa.templateBuilders.BodyTemplate1Builder()
    var template = bodyTemplate1.setTitle(details.title)
      .setBackgroundImage(makeImage(details.image_url))
      .setTextContent(makePlainText(details.description_speech_text), makeRichText("<action value='talkMore'>press here to listen more</action>"))
    return template.build()
  },
  body_template2: (details) => {
    const bodyTemplate2 = new Alexa.templateBuilders.BodyTemplate2Builder()
    var template = bodyTemplate2.setTitle(details.title)
      .setTextContent(makePlainText(details.description_speech_text), makeRichText("<action value='talkMore'>press here to listen more</action>"))
      .setImage(makeImage(details.image_url))
    return template.build()
  },
  body_template3: (details) => {
    const bodyTemplate3 = new Alexa.templateBuilders.BodyTemplate3Builder()
    var template = bodyTemplate3.setTitle(details.title)
      .setTextContent(makePlainText(details.description_speech_text), makeRichText("<action value='talkMore'>press here to listen more</action>"))
      .setImage(makeImage(details.image_url))
    return template.build()
  },
  body_template6: (details) => {
    const bodyTemplate6 = new Alexa.templateBuilders.BodyTemplate6Builder()
    var template = bodyTemplate6.setTitle(details.title)
      .setTextContent(makePlainText(details.description_speech_text), makeRichText("<action value='talkMore'>press here to listen more</action>"))
      .setImage(makeImage(details.image_url))
    return template.build()
  },
  body_template7: (details) => {
    const bodyTemplate7 = new Alexa.templateBuilders.BodyTemplate7Builder()
    var template = bodyTemplate7.setTitle(details.title)
      /* .setTextContent(makePlainText(makeRichText("<action value='talkMore'>press here to listen more</action>"))) */
      .setImage(makeImage(details.image_url))
    return template.build()
  },
  template2: () => {
    var imgAddress = process.env.LOGO
    const bodyTemplate2 = new Alexa.templateBuilders.BodyTemplate2Builder()
    var template = bodyTemplate2.setTitle('cairea Reslens')
      .setTextContent(makePlainText('Welcome to Sierra Lens. Nice meeting you'))
      .setImage(makeImage(imgAddress))
    return template.build()
  },
  body_template7a: (details, show) => {
    const bodyTemplate7 = new Alexa.templateBuilders.BodyTemplate7Builder()
    var template = bodyTemplate7.setTitle(details.title)
      .setImage(makeImage(details.image_url))
      .setBackButtonBehavior('VISIBLE')
    return template.build()
  },
  body_template6a: (details, show) => {
    const bodyTemplate6 = new Alexa.templateBuilders.BodyTemplate6Builder()
    var template = bodyTemplate6.setTitle(details.title)
      .setImage(makeImage(details.image_url))
      .setBackButtonBehavior('VISIBLE')
    return template.build()
  },
  body_template3a: (details, show) => {
    const bodyTemplate3 = new Alexa.templateBuilders.BodyTemplate3Builder()
    var template = bodyTemplate3.setTitle(details.title)
      .setImage(makeImage(details.image_url))
      .setBackButtonBehavior('VISIBLE')
    return template.build()
  },
  body_template2a: (details, show) => {
    const bodyTemplate2 = new Alexa.templateBuilders.BodyTemplate2Builder()
    var template = bodyTemplate2.setTitle(details.title)
      .setImage(makeImage(details.image_url))
      .setBackButtonBehavior('VISIBLE')
    return template.build()
  },
  body_template1a: (details, show) => {
    const bodyTemplate1 = new Alexa.templateBuilders.BodyTemplate1Builder()
    var template = bodyTemplate1.setTitle(details.title)
      .setBackgroundImage(makeImage(details.image_url))
      .setBackButtonBehavior('VISIBLE')
    return template.build()
  }

}
