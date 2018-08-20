const linebot = require('linebot');
const express = require('express');
const mymongo = require('./mymongo.js');
const LOL = require('./config.json');

const bot = linebot({

	channelId:LOL.channel_Id,
	channelSecret:LOL.channel_Secret,
	channelAccessToken:LOL.channel_AccessToken

});

const app = express();

app.get('/',function(req,res){
    res.send('Hello World!');
});



const linebotParser = bot.parser();


var users = new Object({});
//定義問題＋答案類型
var questions = ["請問你的名字是？（可不填）", "名字", "你的Line ID（回答問題需要）", "Line ID", "遇到的問題？\n想要問的問題？", "你的問題"];
//當收到訊息

var commodity = "A1.糙米原味輕乳酪\n天然米香與輕乳酪相輔相成，細棉淡雅，是最初的感動。\n\n\nA2.糙米檸檬輕乳酪\n有機檸檬汁添加，撲鼻近視強烈香氣，卻不帶酸澀。\n\n\nA3.青仁蜜黑豆蛋糕\n黑豆磨粉更磨漿，熬煮 Q 軟蜜黑豆，戚風口感層次分明、綿密甘甜。\n\n\nA4.黑豆桂圓布朗尼\n黑豆與可可連袂舞出絕妙華爾滋!桂圓與核桃點綴曲中小節，濃烈令人深刻回味。";
var commodity2 ="B1.地瓜檸檬打卡酥\n用糙米包覆著像心一樣柔軟的地瓜餡，吃的是溫度。\n\n\nB2.經典鳳梨打卡酥\n舊經典糙米與金鑽鳳梨碰出新的火花，新觸感令人深刻。"

app.post('/linewebhook', linebotParser);
bot.on('message', function (event) {
	var 收到 = event.message.text ;

	if (收到 == "1") {
		event.reply(commodity+"\n如果想要查看單樣商品，可以直接輸入商品代號。\n\n\n說『11』可以到下一頁").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}

	if (收到 == "11") {
		event.reply(commodity2+"\n如果想要查看單樣商品，可以直接輸入商品代號\n\n\n說『1』可以到上一頁").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}
	if (收到 == "2") {
		event.reply("https://twbts.tk:3000\n↑↑↑↑↑\n上面是我們網站的連結").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}
	if (收到 == "4") {
		event.reply("https://twbts.tk:3000  <--- This").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}

	if (收到.toLowerCase() == "a1") {
		event.reply({
			type: "image",
    originalContentUrl: "https://s33.postimg.cc/79fjeoycv/20180807_180815_0009.jpg",
    previewImageUrl: "https://s33.postimg.cc/79fjeoycv/20180807_180815_0009.jpg"
		}).then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}

	if (收到.toLowerCase() == "a2") {
		event.reply({
			type: "image",
    originalContentUrl: "https://s33.postimg.cc/ecneubbi7/20180807_180815_0010.jpg",
    previewImageUrl: "https://s33.postimg.cc/ecneubbi7/20180807_180815_0010.jpg"
		}).then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}
	if (收到.toLowerCase() == "a3") {
		event.reply({
			type: "image",
    originalContentUrl: "https://s33.postimg.cc/sj35pijsf/20180807_180815_0008.jpg",
    previewImageUrl: "https://s33.postimg.cc/sj35pijsf/20180807_180815_0008.jpg"
		}).then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}
	if (收到.toLowerCase() == "a4") {
		event.reply({
			type: "image",
    originalContentUrl: "https://s33.postimg.cc/ecneu9lrz/20180807_180815_0002.jpg",
    previewImageUrl: "https://s33.postimg.cc/ecneu9lrz/20180807_180815_0002.jpg"
		}).then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}
	if (收到.toLowerCase() == "b1") {
		event.reply({
			type: "image",
		originalContentUrl: "https://s33.postimg.cc/79fjeoycv/20180807_180815_0009.jpg",
		previewImageUrl: "https://s33.postimg.cc/79fjeoycv/20180807_180815_0009.jpg"
		}).then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}

	if (收到.toLowerCase() == "b2") {
		event.reply({
			type: "image",
		originalContentUrl: "https://s33.postimg.cc/ils4whu73/180816_0005.jpg",
		previewImageUrl: "https://s33.postimg.cc/ils4whu73/180816_0005.jpg"
		}).then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}




  if (event.message.type == "text") {
    var eventText = event.message.text;
    var userId = event.source.userId;

    if (!users[userId]) {
      users[userId] = new Object({});
    }
    if (eventText == "3" && event.source.groupId == event.source.roomId && !users[userId].step) {
      users[userId].step = 0;
      users[userId].form = [];
      event.reply("問卷調查開始！\n" + questions[users[userId].step]);
      users[userId].step += 1;
    } else {
      if (users[userId].step <= questions.length) {
        if (users[userId].step % 2 == 1) {
          users[userId].form[(users[userId].step - 1) / 2] = eventText;
          event.reply(questions[users[userId].step] + "是" + eventText + "嗎？\n（是＼否）");
          users[userId].step += 1;
        } else if (users[userId].step % 2 == 0) {
          if (eventText == "是") {
            if (users[userId].step != questions.length) {
              event.reply("下一個問題：\n" + questions[users[userId].step]);
              users[userId].step += 1;
            } else {
              var message = "調查結果：";
              for (var i = 0; i < questions.length; i += 2) {
                message += "\n" + questions[i + 1] + "：" + users[userId].form[i / 2];
              }
              event.reply(message + "\n（送出＼取消）");
              users[userId].step += 1;
            }
          } else if (eventText == "否") {
            users[userId].step -= 1;
            event.reply("請重新輸入你的" + questions[users[userId].step]);
          }
        }
      } else {
        if (eventText == "送出") {
					var form = new Object({
						name: users[userId].form[0],
						lineId: users[userId].form[1],
						question: users[userId].form[2]
					})
					mymongo.insertMongo("form", form);
          event.reply("已送出！謝謝您的回覆！");
          users[userId].step = null;
        } else if (eventText == "取消"){
          event.reply("問卷調查已取消");
          users[userId].step = null;
        }
      }
    }
  }

	if (eventText == "給我看表單拉幹") {
		mymongo.getMongo("form", {}, function(result) {
			event.reply(JSON.stringify(result))
		})
	}

	if (/^delete\sid\s\S+/.test(eventText)) {
		mymongo.deleteMongo("form", { _id: ObjectId(eventText.split(" ")[2])})
		console.log("try delete", eventText.split(" ")[2])
	}
});









bot.on("follow", function (event) {
  event.reply("您好，我們是「最後的布朗尼」。這是公司的機器人Line Bot，我們有賣各類的米製點心，如果想要更近一步了解的話。\n．說1 了解各項產品資訊\n．說2 了解我們\n．說3 可以向我們問問題\n．說4 如何訂購");
});


bot.on("join", function (event) {
  event.reply("您好");
  bot.push("U813645541c262fb6d9c967efeb884aeb", "有人加我到群組裡耶 :)");
});

//當被踢
bot.on("leave", function (event) {
  bot.push("U813645541c262fb6d9c967efeb884aeb", "嗚嗚嗚嗚嗚嗚嗚有人把我從群組踢掉QAQQQQQQ");
});
setTimeout(function(){
  bot.push("U813645541c262fb6d9c967efeb884aeb", "啟動了！")
}, 0)

app.listen(process.env.PORT || 3030, function () {
	console.log('LineBot is running.');
});
