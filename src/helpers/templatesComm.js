const Alexa = require('alexa-sdk')
var AWS = require('aws-sdk')
var makeTextContent = Alexa.utils.TextUtils.makeTextContent
var makePlainText = Alexa.utils.TextUtils.makePlainText
var makeRichText = Alexa.utils.TextUtils.makeRichText
var makeImage = Alexa.utils.ImageUtils.makeImage
require('dotenv').config()
module.exports = {
  body_template1: (details) => {
    // var imgAddress = 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'
    const bodyTemplate1 = new Alexa.templateBuilders.BodyTemplate1Builder()
    var template = bodyTemplate1.setTitle(details.title)
      .setBackgroundImage(makeImage(details.image))
      .setTextContent(makePlainText(details.textContent.secondaryText.text), makeRichText("<action value='talkMore'>press here to listen more</action>"))
    return template.build()
  },
  body_template2: (details) => {
    // var imgAddress = 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'
    const bodyTemplate2 = new Alexa.templateBuilders.BodyTemplate2Builder()
    var template = bodyTemplate2.setTitle(details.title)
      .setTextContent(makePlainText(details.textContent.secondaryText.text), makeRichText("<action value='talkMore'>press here to listen more</action>"))
      .setImage(makeImage(details.image))
    return template.build()
  },
  body_template3: (details) => {
    // var imgAddress = 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'
    const bodyTemplate3 = new Alexa.templateBuilders.BodyTemplate3Builder()
    var template = bodyTemplate3.setTitle(details.title)
      .setTextContent(makePlainText(details.textContent.secondaryText.text), makeRichText("<action value='talkMore'>press here to listen more</action>"))
      .setImage(makeImage(details.image))
    return template.build()
  },
  body_template6: (details) => {
    // var imgAddress = 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'
    const bodyTemplate6 = new Alexa.templateBuilders.BodyTemplate6Builder()
    var template = bodyTemplate6.setTitle(details.title)
      .setTextContent(makePlainText(details.textContent.secondaryText.text), makeRichText("<action value='talkMore'>press here to listen more</action>"))
      .setImage(makeImage(details.image))
    return template.build()
  },
  body_template7: (details) => {
    // var imgAddress = 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'
    const bodyTemplate7 = new Alexa.templateBuilders.BodyTemplate7Builder()
    var template = bodyTemplate7.setTitle(details.title)
      .setTextContent(makePlainText(makeRichText("<action value='talkMore'>press here to listen more</action>")))
      .setImage(makeImage(details.image))
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
  List_Template1: (details) => {
    // var imgAddress = 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'
    const listItemBuilder = new Alexa.templateBuilders.ListItemBuilder()
    const listTemplateBuilder = new Alexa.templateBuilders.ListTemplate1Builder()

    listItemBuilder.addItem(makeImage(details.backgroundImage.sources[0].url), 'listItemToken2', makePlainText(details.textContent.secondaryText.text))
    listItemBuilder.addItem(makeImage(details.backgroundImage.sources[1].url), 'listItemToken2', makePlainText(details.textContent.secondaryText.text))
    listItemBuilder.addItem(makeImage(details.backgroundImage.sources[2].url), 'listItemToken2', makePlainText(details.textContent.secondaryText.text))

    const listItems = listItemBuilder.build()
    const listTemplate = listTemplateBuilder.setToken('listToken')
      .setTitle(details.title)
      .setListItems(listItems)
      .setBackButtonBehavior('VISIBLE')
    return listTemplate.build()
  },
  List_Template2: (details) => {
    // var imgAddress = 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'
    const listItemBuilder = new Alexa.templateBuilders.ListItemBuilder()
    const listTemplateBuilder = new Alexa.templateBuilders.ListTemplate2Builder()
    listItemBuilder.addItem(makeImage(details.backgroundImage.sources[0].url), 'listItemToken1', makePlainText(details.textContent.secondaryText.text))
    listItemBuilder.addItem(makeImage(details.backgroundImage.sources[1].url), 'listItemToken2', makePlainText(details.textContent.secondaryText.text))
    listItemBuilder.addItem(makeImage(details.backgroundImage.sources[2].url), 'listItemToken2', makePlainText(details.textContent.secondaryText.text))

    const listItems = listItemBuilder.build()
    const listTemplate = listTemplateBuilder.setToken('listToken')
      .setTitle(details.title)
      .setListItems(listItems)
      .setBackButtonBehavior('VISIBLE')
    return listTemplate.build()
  },
  body_template7a: (details) => {
    // var imgAddress = 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'
    const bodyTemplate7 = new Alexa.templateBuilders.BodyTemplate7Builder()
    var template = bodyTemplate7.setTitle(details.title)
      .setImage(makeImage(details.image))
      .setBackButtonBehavior('VISIBLE')
    return template.build()
  },
  body_template6a: (details) => {
    // var imgAddress = 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'
    const bodyTemplate6 = new Alexa.templateBuilders.BodyTemplate6Builder()
    var template = bodyTemplate6.setTitle(details.title)
      .setImage(makeImage(details.image))
      .setBackButtonBehavior('VISIBLE')
    return template.build()
  },
  body_template3a: (details) => {
    // var imgAddress = 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'
    const bodyTemplate3 = new Alexa.templateBuilders.BodyTemplate3Builder()
    var template = bodyTemplate3.setTitle(details.title)
      .setImage(makeImage(details.image))
      .setBackButtonBehavior('VISIBLE')
    return template.build()
  },
  body_template2a: (details) => {
    // var imgAddress = 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'
    const bodyTemplate2 = new Alexa.templateBuilders.BodyTemplate2Builder()
    var template = bodyTemplate2.setTitle(details.title)
      .setImage(makeImage(details.image))
      .setBackButtonBehavior('VISIBLE')
    return template.build()
  },
  body_template1a: (details) => {
    // var imgAddress = 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'
    const bodyTemplate1 = new Alexa.templateBuilders.BodyTemplate1Builder()
    var template = bodyTemplate1.setTitle(details.title)
      .setBackgroundImage(makeImage(details.image))
      .setBackButtonBehavior('VISIBLE')
    return template.build()
  }

}
