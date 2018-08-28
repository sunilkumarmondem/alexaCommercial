module.exports = function renderTemplate (content) {
  // create a template for each screen  to display.
  // This example has one that I called "factBodyTemplate".
  // define your templates using one of several built in Display Templates
  // https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/display-interface-reference#display-template-reference
  switch (content.templateToken) {
    case 'factBodyTemplate':
      // for reference, here's an example of the content object you'd
      // pass in for this template.
      //  var content = {
      //     "hasDisplaySpeechOutput" : "display "+speechOutput,
      //     "hasDisplayRepromptText" : randomFact,
      //     "simpleCardTitle" : this.t('SKILL_NAME'),
      //     "simpleCardContent" : randomFact,
      //     "bodyTemplateTitle" : this.t('GET_FACT_MESSAGE'),
      //     "bodyTemplateContent" : randomFact,
      //     "templateToken" : "factBodyTemplate",
      //     "sessionAttributes": {}
      //  };
      var response = {
        'version': '1.0',
        'response': {
          'directives': [
            {
              'type': 'Display.RenderTemplate',
              'template': {
                'type': 'BodyTemplate1',
                'title': content.bodyTemplateTitle,
                'token': content.templateToken,
                'textContent': {
                  'primaryText': {
                    'type': 'RichText',
                    'text': "<font size = '5'>" + content.bodyTemplateContent + '</font>'
                  }
                },
                'backButton': 'HIDDEN'
              }
            }
          ],
          'outputSpeech': {
            'type': 'SSML',
            'ssml': '<speak>' + content.hasDisplaySpeechOutput + '</speak>'
          },
          'reprompt': {
            'outputSpeech': {
              'type': 'SSML',
              'ssml': '<speak>' + content.hasDisplayRepromptText + '</speak>'
            }
          },
          'shouldEndSession': content.askOrTell == ':tell',
          'card': {
            'type': 'Simple',
            'title': content.simpleCardTitle,
            'content': content.simpleCardContent
          }
        },
        'sessionAttributes': content.sessionAttributes
      }
      this.context.succeed(response)
      break
      // end of facts template, start of next case
    case 'fullScreenImage':
      // for reference, here's an example of the content object you'd
      // pass in for this template.
      //  var content = {
      //     "hasDisplaySpeechOutput" : "display "+speechOutput,
      //     "hasDisplayRepromptText" : randomFact,
      //     "simpleCardTitle" : this.t('SKILL_NAME'),
      //     "simpleCardContent" : randomFact,
      //     "bodyTemplateTitle" : this.t('GET_FACT_MESSAGE'),
      //     "bodyTemplateContent" : randomFact,
      //     "templateToken" : "factBodyTemplate",
      //     "sessionAttributes": {}
      //  };
      var response =
           {
             'version': '1.0',
             'response': {
               'shouldEndSession': false,
               'outputSpeech': {
                 'type': 'SSML',
                 'ssml': '<speak> This is Body Template 7. </speak>'
               },
               'reprompt': {
                 'outputSpeech': {
                   'type': 'SSML',
                   'ssml': '<speak> Which template would you like to see? </speak>'
                 }
               },
               'card': {
                 'type': 'Standard',
                 'title': 'BodyTemplate7 Title',
                 'image': {
                   'smallImageUrl': 'https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/720x480-small-card._TTH_.png',
                   'largeImageUrl': 'https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/1200x800-large-card._TTH_.png'
                 },
                 'text': 'BodyTemplate7 Text'
               },
               'directives': [
                 {
                   'type': 'Hint',
                   'hint': {
                     'type': 'PlainText',
                     'text': 'can you tell me how to get to Center Me Street?'
                   }
                 },
                 {
                   'type': 'Display.RenderTemplate',
                   'template': {
                     'type': 'BodyTemplate7',
                     'image': {
                       'sources': [
                         {
                           'url': 'https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/340x340-display-image._TTH_.png'
                         }
                       ]
                     },
                     'title': 'BodyTemplate7 Display Title',
                     'token': 'TOKEN',
                     'backgroundImage': {
                       'sources': [
                         {
                           'url': 'https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/1024x600-display-background._TTH_.png'
                         }
                       ]
                     },
                     'textContent': {
                       'primaryText': {
                         'text': 'BodyTemplate7 Primary Text',
                         'type': 'PlainText'
                       },
                       'secondaryText': {
                         'text': 'BodyTemplate7 Secondary Text',
                         'type': 'PlainText'
                       },
                       'tertiaryText': {
                         'text': 'BodyTemplate7 Tertiary Text',
                         'type': 'PlainText'
                       }
                     },
                     'backButton': 'HIDDEN'
                   }
                 }
               ]
             },
             'sessionAttributes': content.sessionAttributes
           }
      this.context.succeed(response)
      break
      // end of my janx that does not work
    default:
      this.response.speak('Thanks for chatting, goodbye')
      this.emit(':responseReady')
  }
}
