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
	var Ha = ["1.餅乾是男的還是女的？","2.水餃是公的還是母的？", "3.為什麼女生不能常常生氣？","4.月經來了，猜一種過年用品","5.四個男生觸電，猜一種物品"];
	var 髒髒 = Ha[Math.floor(Math.random()*Ha.length)];

	if (收到 == "笑話答案5") {
		event.reply("電四雞").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}

	if (收到 == "笑話答案"||收到 == "黃色答案"||收到 == "笑話答案"||收到 == "黃梗答案"||收到 == "黃色笑話答案"||收到 == "黃色笑話的答案") {
		event.reply("笑話答案（題數）").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}


	if (收到 == "笑話答案4") {
		event.reply("紅胞").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}

	if (收到 == "笑話答案3") {
		event.reply("因為，氣急敗壞").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}

	if (收到 == "笑話答案2") {
		event.reply("公的，因為水餃有包皮").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}


	if (收到 == "笑話答案1") {
		event.reply("女的，因為餅乾有穴穴").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}


	if (收到 == "黃色笑話") {
		event.reply(髒髒).then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}


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
	var LOL = "洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版洗版";
	if (收到 == "洗版") {
		event.reply(LOL).then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}
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
