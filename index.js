/*
* © Roger D. Stach 2017
* Licensed under MIT
*/
'use strict'

const Telegram = require('telegram-node-bot');
var Client = require('node-rest-client').Client;

const TelegramBaseController = Telegram.TelegramBaseController;
const TextCommand = Telegram.TextCommand;
const tg = new Telegram.Telegram('367787351:AAFdtlEOpu0ZZ_jhmpTPR6w5rXNWN3-3DSs', {
    webAdmin: {
        port: 9000,
        host: 'localhost'
    }
});
var client = new Client();

class StartController extends TelegramBaseController {
    helloResponse($) {
        $.sendMessage('Hi there, I\'m Newstify, I will send you the top/latest headlines from the media that is available.\nSend /news to get started.\n\nBased on newstify v1.0.0 by Roger Stach.')
    }

    listResponse($) {
        $.sendMessage('This command is useless, try /news.')
    }

    get routes() {
        return {
            'startCommand': 'helloResponse',
            'helpCommand': 'listResponse'
        }
    }
}

class NewsController extends TelegramBaseController {

    askMedia($) {
      $.sendMessage('List of media: \n - Buzzfeed - buzzfeed\n - Daily Mail - dailymail\n - MTV - mtv\n - National Geographic - natgeo\n - TechCrunch - techcrunch\n - The New York Times - newyork\n - The Next Web - thenextweb\n - The Verge - theverge\n\nEverytime you choose the media, you\'ll need to type /news again and choose the media that you want. Over and over again.')
      $.waitForRequest
          .then($ => {
            if ($.message.text == 'buzzfeed') {
                $.sendMessage("Latest Buzzfeed headlines : ")
              client.get("https://newsapi.org/v1/articles?source=buzzfeed&sortBy=latest&apiKey=c95262ea5eed4b61b6cb31ac2f1567af", function (data) {              
                'use strict';
                var url_1 = data.articles[0].url,
                    url_2 = data.articles[1].url,
                    url_3 = data.articles[2].url,
                    url_4 = data.articles[3].url,
                    url_5 = data.articles[4].url,
                    url_6 = data.articles[5].url,
                    url_7 = data.articles[6].url,
                    url_8 = data.articles[7].url,
                    url_9 = data.articles[8].url,
                    url_10 = data.articles[9].url,
                    title_1 = data.articles[0].title,
                    title_2 = data.articles[1].title,
                    title_3 = data.articles[2].title,
                    title_4 = data.articles[3].title,
                    title_5 = data.articles[4].title,
                    title_6 = data.articles[5].title,
                    title_7 = data.articles[6].title,
                    title_8 = data.articles[7].title,
                    title_9 = data.articles[8].title,
                    title_10 = data.articles[9].title;
                    $.sendMessage(title_1 + ' - ' + url_1 + '\n');
                    $.sendMessage(title_2 + ' - ' + url_2 + '\n');
                    $.sendMessage(title_3 + ' - ' + url_3 + '\n');
                    $.sendMessage(title_4 + ' - ' + url_4 + '\n');
                    $.sendMessage(title_5 + ' - ' + url_5 + '\n');
                    $.sendMessage(title_6 + ' - ' + url_6 + '\n');
                    $.sendMessage(title_7 + ' - ' + url_7 + '\n');
                    $.sendMessage(title_8 + ' - ' + url_8 + '\n');
                    $.sendMessage(title_9 + ' - ' + url_9 + '\n');
                    $.sendMessage(title_10 + ' - ' + url_10 + '\n');
              });
            } else if ($.message.text == 'dailymail'){
                $.sendMessage("Latest Daily Mail headlines :")
              client.get("https://newsapi.org/v1/articles?source=daily-mail&sortBy=latest&apiKey=c95262ea5eed4b61b6cb31ac2f1567af", function (data) {
                'use strict';
                var url_1 = data.articles[0].url,
                    url_2 = data.articles[1].url,
                    url_3 = data.articles[2].url,
                    url_4 = data.articles[3].url,
                    url_5 = data.articles[4].url,
                    url_6 = data.articles[5].url,
                    url_7 = data.articles[6].url,
                    url_8 = data.articles[7].url,
                    url_9 = data.articles[8].url,
                    url_10 = data.articles[9].url,
                    title_1 = data.articles[0].title,
                    title_2 = data.articles[1].title,
                    title_3 = data.articles[2].title,
                    title_4 = data.articles[3].title,
                    title_5 = data.articles[4].title,
                    title_6 = data.articles[5].title,
                    title_7 = data.articles[6].title,
                    title_8 = data.articles[7].title,
                    title_9 = data.articles[8].title,
                    title_10 = data.articles[9].title;
                    $.sendMessage(title_1 + ' - ' + url_1 + '\n');
                    $.sendMessage(title_2 + ' - ' + url_2 + '\n');
                    $.sendMessage(title_3 + ' - ' + url_3 + '\n');
                    $.sendMessage(title_4 + ' - ' + url_4 + '\n');
                    $.sendMessage(title_5 + ' - ' + url_5 + '\n');
                    $.sendMessage(title_6 + ' - ' + url_6 + '\n');
                    $.sendMessage(title_7 + ' - ' + url_7 + '\n');
                    $.sendMessage(title_8 + ' - ' + url_8 + '\n');
                    $.sendMessage(title_9 + ' - ' + url_9 + '\n');
                    $.sendMessage(title_10 + ' - ' + url_10 + '\n');
              });
            } else if ($.message.text == 'mtv'){
                $.sendMessage("Latest MTV headlines : ")
              client.get("https://newsapi.org/v1/articles?source=mtv-news&sortBy=latest&apiKey=c95262ea5eed4b61b6cb31ac2f1567af", function (data) {
                'use strict';
                var url_1 = data.articles[0].url,
                    url_2 = data.articles[1].url,
                    url_3 = data.articles[2].url,
                    url_4 = data.articles[3].url,
                    url_5 = data.articles[4].url,
                    url_6 = data.articles[5].url,
                    url_7 = data.articles[6].url,
                    url_8 = data.articles[7].url,
                    url_9 = data.articles[8].url,
                    url_10 = data.articles[9].url,
                    title_1 = data.articles[0].title,
                    title_2 = data.articles[1].title,
                    title_3 = data.articles[2].title,
                    title_4 = data.articles[3].title,
                    title_5 = data.articles[4].title,
                    title_6 = data.articles[5].title,
                    title_7 = data.articles[6].title,
                    title_8 = data.articles[7].title,
                    title_9 = data.articles[8].title,
                    title_10 = data.articles[9].title;
                    $.sendMessage(title_1 + ' - ' + url_1 + '\n');
                    $.sendMessage(title_2 + ' - ' + url_2 + '\n');
                    $.sendMessage(title_3 + ' - ' + url_3 + '\n');
                    $.sendMessage(title_4 + ' - ' + url_4 + '\n');
                    $.sendMessage(title_5 + ' - ' + url_5 + '\n');
                    $.sendMessage(title_6 + ' - ' + url_6 + '\n');
                    $.sendMessage(title_7 + ' - ' + url_7 + '\n');
                    $.sendMessage(title_8 + ' - ' + url_8 + '\n');
                    $.sendMessage(title_9 + ' - ' + url_9 + '\n');
                    $.sendMessage(title_10 + ' - ' + url_10 + '\n');
              });
            } else if ($.message.text == 'natgeo'){
                $.sendMessage("Top National Geographic headlines : ")
              client.get("https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=c95262ea5eed4b61b6cb31ac2f1567af", function (data) {
                'use strict';
                var url_1 = data.articles[0].url,
                    url_2 = data.articles[1].url,
                    url_3 = data.articles[2].url,
                    url_4 = data.articles[3].url,
                    url_5 = data.articles[4].url,
                    url_6 = data.articles[5].url,
                    url_7 = data.articles[6].url,
                    url_8 = data.articles[7].url,
                    url_9 = data.articles[8].url,
                    url_10 = data.articles[9].url,
                    title_1 = data.articles[0].title,
                    title_2 = data.articles[1].title,
                    title_3 = data.articles[2].title,
                    title_4 = data.articles[3].title,
                    title_5 = data.articles[4].title,
                    title_6 = data.articles[5].title,
                    title_7 = data.articles[6].title,
                    title_8 = data.articles[7].title,
                    title_9 = data.articles[8].title,
                    title_10 = data.articles[9].title;
                    $.sendMessage(title_1 + ' - ' + url_1 + '\n');
                    $.sendMessage(title_2 + ' - ' + url_2 + '\n');
                    $.sendMessage(title_3 + ' - ' + url_3 + '\n');
                    $.sendMessage(title_4 + ' - ' + url_4 + '\n');
                    $.sendMessage(title_5 + ' - ' + url_5 + '\n');
                    $.sendMessage(title_6 + ' - ' + url_6 + '\n');
                    $.sendMessage(title_7 + ' - ' + url_7 + '\n');
                    $.sendMessage(title_8 + ' - ' + url_8 + '\n');
                    $.sendMessage(title_9 + ' - ' + url_9 + '\n');
                    $.sendMessage(title_10 + ' - ' + url_10 + '\n');
              });
            } else if ($.message.text == 'techcrunch'){
                $.sendMessage("Latest TechCrunch headlines : ")
              client.get("https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=c95262ea5eed4b61b6cb31ac2f1567af", function (data) {
                'use strict';
                var url_1 = data.articles[0].url,
                    url_2 = data.articles[1].url,
                    url_3 = data.articles[2].url,
                    url_4 = data.articles[3].url,
                    url_5 = data.articles[4].url,
                    url_6 = data.articles[5].url,
                    url_7 = data.articles[6].url,
                    url_8 = data.articles[7].url,
                    url_9 = data.articles[8].url,
                    url_10 = data.articles[9].url,
                    title_1 = data.articles[0].title,
                    title_2 = data.articles[1].title,
                    title_3 = data.articles[2].title,
                    title_4 = data.articles[3].title,
                    title_5 = data.articles[4].title,
                    title_6 = data.articles[5].title,
                    title_7 = data.articles[6].title,
                    title_8 = data.articles[7].title,
                    title_9 = data.articles[8].title,
                    title_10 = data.articles[9].title;
                    $.sendMessage(title_1 + ' - ' + url_1 + '\n');
                    $.sendMessage(title_2 + ' - ' + url_2 + '\n');
                    $.sendMessage(title_3 + ' - ' + url_3 + '\n');
                    $.sendMessage(title_4 + ' - ' + url_4 + '\n');
                    $.sendMessage(title_5 + ' - ' + url_5 + '\n');
                    $.sendMessage(title_6 + ' - ' + url_6 + '\n');
                    $.sendMessage(title_7 + ' - ' + url_7 + '\n');
                    $.sendMessage(title_8 + ' - ' + url_8 + '\n');
                    $.sendMessage(title_9 + ' - ' + url_9 + '\n');
                    $.sendMessage(title_10 + ' - ' + url_10 + '\n');
              });
            } else if ($.message.text == 'newyork'){
                $.sendMessage("Top New York Times headlines : ")
              client.get("https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=c95262ea5eed4b61b6cb31ac2f1567af", function (data) {
                'use strict';
                var url_1 = data.articles[0].url,
                    url_2 = data.articles[1].url,
                    url_3 = data.articles[2].url,
                    url_4 = data.articles[3].url,
                    url_5 = data.articles[4].url,
                    url_6 = data.articles[5].url,
                    url_7 = data.articles[6].url,
                    url_8 = data.articles[7].url,
                    url_9 = data.articles[8].url,
                    url_10 = data.articles[9].url,
                    title_1 = data.articles[0].title,
                    title_2 = data.articles[1].title,
                    title_3 = data.articles[2].title,
                    title_4 = data.articles[3].title,
                    title_5 = data.articles[4].title,
                    title_6 = data.articles[5].title,
                    title_7 = data.articles[6].title,
                    title_8 = data.articles[7].title,
                    title_9 = data.articles[8].title,
                    title_10 = data.articles[9].title;
                    $.sendMessage(title_1 + ' - ' + url_1 + '\n');
                    $.sendMessage(title_2 + ' - ' + url_2 + '\n');
                    $.sendMessage(title_3 + ' - ' + url_3 + '\n');
                    $.sendMessage(title_4 + ' - ' + url_4 + '\n');
                    $.sendMessage(title_5 + ' - ' + url_5 + '\n');
                    $.sendMessage(title_6 + ' - ' + url_6 + '\n');
                    $.sendMessage(title_7 + ' - ' + url_7 + '\n');
                    $.sendMessage(title_8 + ' - ' + url_8 + '\n');
                    $.sendMessage(title_9 + ' - ' + url_9 + '\n');
                    $.sendMessage(title_10 + ' - ' + url_10 + '\n');
              });
            } else if ($.message.text == 'thenextweb'){
                $.sendMessage("Latest The Next Web headlines : ")
              client.get("https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=c95262ea5eed4b61b6cb31ac2f1567af", function (data) {
                'use strict';
                var url_1 = data.articles[0].url,
                    url_2 = data.articles[1].url,
                    url_3 = data.articles[2].url,
                    url_4 = data.articles[3].url,
                    url_5 = data.articles[4].url,
                    url_6 = data.articles[5].url,
                    url_7 = data.articles[6].url,
                    url_8 = data.articles[7].url,
                    url_9 = data.articles[8].url,
                    url_10 = data.articles[9].url,
                    title_1 = data.articles[0].title,
                    title_2 = data.articles[1].title,
                    title_3 = data.articles[2].title,
                    title_4 = data.articles[3].title,
                    title_5 = data.articles[4].title,
                    title_6 = data.articles[5].title,
                    title_7 = data.articles[6].title,
                    title_8 = data.articles[7].title,
                    title_9 = data.articles[8].title,
                    title_10 = data.articles[9].title;
                    $.sendMessage(title_1 + ' - ' + url_1 + '\n');
                    $.sendMessage(title_2 + ' - ' + url_2 + '\n');
                    $.sendMessage(title_3 + ' - ' + url_3 + '\n');
                    $.sendMessage(title_4 + ' - ' + url_4 + '\n');
                    $.sendMessage(title_5 + ' - ' + url_5 + '\n');
                    $.sendMessage(title_6 + ' - ' + url_6 + '\n');
                    $.sendMessage(title_7 + ' - ' + url_7 + '\n');
                    $.sendMessage(title_8 + ' - ' + url_8 + '\n');
                    $.sendMessage(title_9 + ' - ' + url_9 + '\n');
                    $.sendMessage(title_10 + ' - ' + url_10 + '\n');
              });
            } else if ($.message.text == 'theverge'){
                $.sendMessage("Latest The Verge headlines : ")
              client.get("https://newsapi.org/v1/articles?source=the-verge&sortBy=latest&apiKey=c95262ea5eed4b61b6cb31ac2f1567af", function (data) {
                'use strict';
                var url_1 = data.articles[0].url,
                    url_2 = data.articles[1].url,
                    url_3 = data.articles[2].url,
                    url_4 = data.articles[3].url,
                    url_5 = data.articles[4].url,
                    url_6 = data.articles[5].url,
                    url_7 = data.articles[6].url,
                    url_8 = data.articles[7].url,
                    url_9 = data.articles[8].url,
                    url_10 = data.articles[9].url,
                    title_1 = data.articles[0].title,
                    title_2 = data.articles[1].title,
                    title_3 = data.articles[2].title,
                    title_4 = data.articles[3].title,
                    title_5 = data.articles[4].title,
                    title_6 = data.articles[5].title,
                    title_7 = data.articles[6].title,
                    title_8 = data.articles[7].title,
                    title_9 = data.articles[8].title,
                    title_10 = data.articles[9].title;
                    $.sendMessage(title_1 + ' - ' + url_1 + '\n');
                    $.sendMessage(title_2 + ' - ' + url_2 + '\n');
                    $.sendMessage(title_3 + ' - ' + url_3 + '\n');
                    $.sendMessage(title_4 + ' - ' + url_4 + '\n');
                    $.sendMessage(title_5 + ' - ' + url_5 + '\n');
                    $.sendMessage(title_6 + ' - ' + url_6 + '\n');
                    $.sendMessage(title_7 + ' - ' + url_7 + '\n');
                    $.sendMessage(title_8 + ' - ' + url_8 + '\n');
                    $.sendMessage(title_9 + ' - ' + url_9 + '\n');
                    $.sendMessage(title_10 + ' - ' + url_10 + '\n');
              });
            } else {
              $.sendMessage(`That media is not available.`)
            }
          })
    }

    get routes() {
        return {
            'newsCommand': 'askMedia'
        }
    }
}

class MediaController extends TelegramBaseController {
  buzzfeedHandler($) {
    client.get("https://newsapi.org/v1/articles?source=buzzfeed&sortBy=latest&apiKey=c95262ea5eed4b61b6cb31ac2f1567af", function (data) {              
      'use strict';
      var url_1 = data.articles[0].url,
          url_2 = data.articles[1].url,
          url_3 = data.articles[2].url,
          url_4 = data.articles[3].url,
          url_5 = data.articles[4].url,
          url_6 = data.articles[5].url,
          url_7 = data.articles[6].url,
          url_8 = data.articles[7].url,
          url_9 = data.articles[8].url,
          url_10 = data.articles[9].url,
          title_1 = data.articles[0].title,
          title_2 = data.articles[1].title,
          title_3 = data.articles[2].title,
          title_4 = data.articles[3].title,
          title_5 = data.articles[4].title,
          title_6 = data.articles[5].title,
          title_7 = data.articles[6].title,
          title_8 = data.articles[7].title,
          title_9 = data.articles[8].title,
          title_10 = data.articles[9].title;
          $.sendMessage(title_1 + ' - ' + url_1 + '\n');
          $.sendMessage(title_2 + ' - ' + url_2 + '\n');
          $.sendMessage(title_3 + ' - ' + url_3 + '\n');
          $.sendMessage(title_4 + ' - ' + url_4 + '\n');
          $.sendMessage(title_5 + ' - ' + url_5 + '\n');
          $.sendMessage(title_6 + ' - ' + url_6 + '\n');
          $.sendMessage(title_7 + ' - ' + url_7 + '\n');
          $.sendMessage(title_8 + ' - ' + url_8 + '\n');
          $.sendMessage(title_9 + ' - ' + url_9 + '\n');
          $.sendMessage(title_10 + ' - ' + url_10 + '\n');
    });
  }

  get routes() {
    return {
      'buzzfeed' : 'buzzfeedHandler'
    }
  }
}

class OtherwiseController extends TelegramBaseController {
    handle($) {
        $.sendMessage('That command doesn\'t even exist, are you high?')
    }
}

tg.router    
    .when(new TextCommand('/start', 'startCommand'), new StartController())
    .when(new TextCommand('/help', 'helpCommand'), new StartController())
    .when(new TextCommand('/news', 'newsCommand'), new NewsController())
    .when(new TextCommand('/buzzfeed', 'buzzfeed'), new MediaController())
    .otherwise(new OtherwiseController())