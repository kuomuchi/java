const linebot = require('linebot');
const express = require('express');

const bot = linebot({
	channelId: process.env.CHANNEL_ID,
	channelSecret: process.env.CHANNEL_SECRET,
	channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

const app = express();

const linebotParser = bot.parser();

app.get('/',function(req,res){
    res.send('Hello World!');
});

app.post('/linewebhook', linebotParser);

bot.on('message', function (event) {
	if (event.message.text.toLowerCase() == "fuck"||event.message.text == "幹你娘") {
		event.reply("幹你娘").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}
	if (event.message.text == "id") {
		event.reply(event.source.userId).then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}
});

setTimeout(function(){
  bot.push("U813645541c262fb6d9c967efeb884aeb", "啟動了！")
}, 0)

app.listen(process.env.PORT || 80, function () {
	console.log('LineBot is running.');
});
