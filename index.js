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
	var 收到 = event.message.text ;
	var items = ["安安","安","你好～","喔喔喔！！","喔喔！","喔！！！！","喔喔喔","weeeeeeee~~","weeee~~~","Hello","Hi~"];
	var hello = items[Math.floor(Math.random()*items.length)];

	if (收到.toLowerCase() == "fuck"||收到 == "幹你娘") {
		event.reply("幹你娘").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}

	if (收到 == ".") {
		event.reply(".").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}

	if (收到 == "?"||收到 == "??"||收到 == "???"||收到 == "????"||收到 == "?????"||收到 == "??????"||收到 == "???????") {
		event.reply("?").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}

	if (收到.toLowerCase() == "hello"||收到.toLowerCase() == "hi"||收到 == "安安"||收到 == "你好"||收到 == "安"||收到 == "喔喔喔") {
		event.reply(hello).then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}

	var 洗版=["洗版","洗版","洗版","洗版","洗版","洗版","洗版","洗版","洗版","洗版","洗版",];

	if (收到 == "id") {
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
