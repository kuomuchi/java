const linebot = require('linebot');
const express = require('express');
const ObjectId = require('mongodb').ObjectID;
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
app.post('/linewebhook', linebotParser);

var questions = ["請問你的名字是？（可不填）", "名字", "你的Line ID（回答問題需要）", "Line ID", "遇到的問題？\n想要問的問題？", "你的問題"];
var users = new Object({});
var reply = new Object ({
 "default": "輸入『米蛋糕』或『打卡蘇』來獲得產品資訊\n輸入『網站』獲取網站連結\n輸入『訂購』進入訂購的頁面" ,
 "米蛋糕": "a1糙米原味輕乳酪\n天然米香與輕乳酪相輔相成，細棉淡雅，是最初的感動。\n\n\na2糙米檸檬輕乳酪\n有機檸檬汁添加，撲鼻近視強烈香氣，卻不帶酸澀。\n\n\na3糙米金棗輕乳酪\n宜蘭特產蜜金棗，每一口的吃得到果肉的芬芳。\n\n\na4黑豆桂圓布朗尼\n黑豆與可可連袂舞出絕妙華爾滋!桂圓與核桃點綴曲中小節，濃烈令人深刻回味。\n輸入商品的代碼可以看到商品的圖片",
 "打卡蘇": "b1地瓜檸檬\n用糙米包覆著像心一樣柔軟的地瓜餡，吃的是溫度。\n\n\nb2經典鳳梨\n舊經典糙米與金鑽鳳梨碰出新的火花，新觸感令人深刻。\n輸入商品的代碼可以看到商品的圖片",
 "網站": "https://twbts.tk:3000\n↑↑↑↑↑\n上面是我們網站的連結",
 "訂購": "https://twbts.tk:3000  <--- This",
 "a1": {
      type: "image",
      originalContentUrl: "https://s33.postimg.cc/79fjeoycv/20180807_180815_0009.jpg",
      previewImageUrl: "https://s33.postimg.cc/79fjeoycv/20180807_180815_0009.jpg"
  },
 "a2": {
      type: "image",
      originalContentUrl: "https://s33.postimg.cc/ecneubbi7/20180807_180815_0010.jpg",
      previewImageUrl: "https://s33.postimg.cc/ecneubbi7/20180807_180815_0010.jpg"
  },
 "a3": {
      type: "image",
      originalContentUrl: "https://s33.postimg.cc/sj35pijsf/20180807_180815_0008.jpg",
      previewImageUrl: "https://s33.postimg.cc/sj35pijsf/20180807_180815_0008.jpg"
  },
 "a4": {
      type: "image",
      originalContentUrl: "https://s33.postimg.cc/ecneu9lrz/20180807_180815_0002.jpg",
      previewImageUrl: "https://s33.postimg.cc/ecneu9lrz/20180807_180815_0002.jpg"
  },
 "b1": {
      type: "image",
     originalContentUrl: "https://s33.postimg.cc/79fjeoycv/20180807_180815_0009.jpg",
     previewImageUrl: "https://s33.postimg.cc/79fjeoycv/20180807_180815_0009.jpg"
  },
 "b2": {
      type: "image",
     originalContentUrl: "https://s33.postimg.cc/ils4whu73/180816_0005.jpg",
     previewImageUrl: "https://s33.postimg.cc/ils4whu73/180816_0005.jpg"
  }
});

bot.on('message', function (event) {
    var eventText = event.message.text;
    var userId = event.source.userId;

 if (!users[userId]) {
     users[userId] = new Object({});
    }

 if (eventText == "QA" && event.source.groupId == event.source.roomId && !users[userId].step) {
        users[userId].step = 0;
        users[userId].form = [];
        event.reply("開始Q&A：\n（若是沒有填Line ID或是錯填，我們將無法為您解答）\n" + questions[users[userId].step]);
        users[userId].step += 1;
 } else if (users[userId].step) {
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
     } else if (reply[eventText]) {
	  event.reply(reply[eventText]).then(function (data) {
	   console.log('Success', data);
	  }).catch(function (error) {
	   console.log('Error', error);
	  });
 } else if (eventText == "給我看表單" && userId == owner) {
    mymongo.getMongo("form", {}, function(result) {
      event.reply(JSON.stringify(result))
    })
  } else if (/^delete\sid\s\S+/.test(eventText) && userId == owner) {
    mymongo.deleteMongo("form", { _id: ObjectId(eventText.split(" ")[2])})
  } else {
   event.reply(reply["default"]);
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
