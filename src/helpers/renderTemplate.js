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
      //     "askOrTell" :
      //  };

      var response =
           {
             'version': 'string',
             'sessionAttributes': {
               'key': 'value'
             },
             'response': {
               'outputSpeech': {
                 'type': 'PlainText',
                 'text': 'Plain text string to speak',
                 'ssml': '<speak>SSML text string to speak</speak>'
               },
               'card': {
                 'type': 'Standard',
                 'title': 'Title of the card',
                 'content': 'Content of a simple card',
                 'text': 'Text content for a standard card',
                 'image': {
                   'smallImageUrl': 'https://url-to-small-card-image...',
                   'largeImageUrl': 'https://url-to-large-card-image...'
                 }
               },
               'reprompt': {
                 'outputSpeech': {
                   'type': 'PlainText',
                   'text': 'Plain text string to speak',
                   'ssml': '<speak>SSML text string to speak</speak>'
                 }
               },
               'directives': [
                 {
                   'type': 'Display.RenderTemplate',
                   'template': {
                     'type': 'BodyTemplate2',
                     'token': 'A2079',
                     'backButton': 'VISIBLE',
                     'backgroundImage': {
                       'contentDescription': 'Textured grey background',
                       'sources': [
                         {
                           'url': 'https://www.example.com/background-image1.png'
                         }
                       ],
                       'title': 'My Favorite Car',
                       'image': {
                         'contentDescription': 'My favorite car',
                         'sources': [
                           {
                             'url': 'https://www.example.com/my-favorite-car.png'
                           }
                         ]
                       },
                       'textContent': {
                         'primaryText': {
                           'text': 'See my favorite car',
                           'type': 'PlainText'
                         },
                         'secondaryText': {
                           'text': 'Custom-painted',
                           'type': 'PlainText'
                         },
                         'tertiaryText': {
                           'text': 'By me!',
                           'type': 'PlainText'
                         }
                       }
                     }
                   }
                 }

               ],
               'shouldEndSession': true
             }
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
             'version': 'string',
             'sessionAttributes': {
               'key': 'value'
             },
             'response': {
               'outputSpeech': {
                 'type': 'PlainText',
                 'text': 'Plain text string to speak',
                 'ssml': '<speak>SSML text string to speak</speak>'
               },
               'card': {
                 'type': 'Standard',
                 'title': 'Title of the card',
                 'content': 'Content of a simple card',
                 'text': 'Text content for a standard card',
                 'image': {
                   'smallImageUrl': 'https://url-to-small-card-image...',
                   'largeImageUrl': 'https://url-to-large-card-image...'
                 }
               },
               'reprompt': {
                 'outputSpeech': {
                   'type': 'PlainText',
                   'text': 'Plain text string to speak',
                   'ssml': '<speak>SSML text string to speak</speak>'
                 }
               },
               'directives': [
                 {
                   'type': 'Display.RenderTemplate',
                   'template': {
                     'type': 'BodyTemplate2',
                     'token': 'A2079',
                     'backButton': 'VISIBLE',
                     'backgroundImage': {
                       'contentDescription': 'Textured grey background',
                       'sources': [
                         {
                           'url': 'https://www.example.com/background-image1.png'
                         }
                       ],
                       'title': 'My Favorite Car',
                       'image': {
                         'contentDescription': 'My favorite car',
                         'sources': [
                           {
                             'url': 'https://www.example.com/my-favorite-car.png'
                           }
                         ]
                       },
                       'textContent': {
                         'primaryText': {
                           'text': 'See my favorite car',
                           'type': 'PlainText'
                         },
                         'secondaryText': {
                           'text': 'Custom-painted',
                           'type': 'PlainText'
                         },
                         'tertiaryText': {
                           'text': 'By me!',
                           'type': 'PlainText'
                         }
                       }
                     }
                   }
                 }

               ],
               'shouldEndSession': true
             }
           }

      this.context.succeed(response)
      break
      // end of my janx that does not work

    default:
      this.response.speak('Thanks for chatting, goodbye')
      this.emit(':responseReady')
  }
}
