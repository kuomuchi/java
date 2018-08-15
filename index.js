const linebot = require('linebot');
const express = require('express');
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



var 步驟 = 0;
var users = new Object({});


app.post('/linewebhook', linebotParser);
bot.on('message', function (event) {

/*var userId = event.source.userId;
	var 收到 = event.message.text ;
var commodity = "糙米原味輕乳酪\n天然米香與輕乳酪相輔相成，細棉淡雅，是最初的感動。\n\n\n糙米檸檬輕乳酪\n有機檸檬汁添加，撲鼻近視強烈香氣，卻不帶酸澀。\n\n\n糙米金棗輕乳酪\n宜蘭特產蜜金棗，每一口的吃得到果肉的芬芳。\n\n\n黑豆桂圓布朗尼\n黑豆與可可連袂舞出絕妙華爾滋!桂圓與核桃點綴曲中小節，濃烈令人深刻回味。";
var commodity2 ="桂圓核桃\n這是介紹\n\n\n地瓜檸檬\n這是介紹\n\n\n經典鳳梨\n這是介紹"




if (收到.toLowerCase() == "help") {
   event.reply("若想要更深入的了解我們，你可以說：了解\n若想要查看我們的產品，可以說：產品\n若想要和我們訂購品，可以說：訂購").then(function (data) {
   console.log('Success', data);
   }).catch(function (error) {
   console.log('Error', error);
   });
  }

  if (收到 == "了解") {
   event.reply("這是我們網站：http://www.twbts.tk:3000/Main.html").then(function (data) {
    console.log('Success', data);
   }).catch(function (error) {
    console.log('Error', error);
   });
   }

  if (收到 == "產品") {
    event.reply(commodity+"\n\n說：產品2 可以換到下一頁").then(function (data) {
    console.log('Success', data);
    }).catch(function (error) {
    console.log('Error', error);
    });
   }
  if (收到 == "產品2") {
    event.reply(commodity2+"\n\n說：產品 可以回到上頁").then(function (data) {
    console.log('Success', data);
    }).catch(function (error) {
    console.log('Error', error);
    });
   }




   if (收到 == "訂購" && event.source.groupId == event.source.roomId) {
    if (users[userId]) {
      if (!users[userId].step) {
    event.reply("輸入您的名字(訂購人)").then(function (data) {
    console.log('Success', data);
    }).catch(function (error) {
    console.log('Error', error);
    });
    users[userId].step = 1;
    }
   } else {
    users[userId] = new Object({});
   event.reply("輸入您的名字(訂購人)");
   users[userId].step = 1;
   users[userId].form = [];
    }
   }else if(users[userId]){
    switch (true){
            case users[userId].step == 1:
            users[userId].form[0] = eventText;
        event.reply(收到+"\n重寫/確認");
       users[userId].step = 1.5;
         break;
         case users[userId].step == 1.5:
        if (eventText == "確認") {
               event.reply("輸入收件人的名字");
               users[userId].step = 2;
             } else {
               event.reply("輸入您的名字(訂購人)");
               users[userId].step = 1;
       	}
          break;
					case users[userId].step == 2:
					users[userId].form[1] = eventText;
					 event.reply("收件人的名字：" + eventText + "嗎？\n確定的話輸入「確認」，或是輸入其他文字來修改。");
						 users[userId].step = 2.5;
						 break;
				case users[userId].step == 2.5:
		 if (eventText == "確認") {
			event.reply("輸入商品名稱\n只要把你想要購買的商品打出來就好了");
			users[userId].step = 3;
		 } else {
			event.reply("輸入收件人的名字");
			users[userId].step = 2;
		 }
           case users[userId].step == 2:
           users[userId].form[1] = eventText;
            event.reply("收件人的名字：" + eventText + "嗎？\n確定的話輸入「確認」，或是輸入其他文字來修改。");
              users[userId].step = 2.5;
              break;
         case users[userId].step == 2.5:
      if (eventText == "確認") {
       event.reply("輸入商品名稱\n只要把你想要購買的商品打出來就好了");
       users[userId].step = 3;
      } else {
       event.reply("輸入收件人的名字");
       users[userId].step = 2;
      }
      break;
     case users[userId].step == 3:
      users[userId].form[2] = eventText;
      event.reply("選擇要購買的商品有：" + eventText + "\n確定的話輸入「確認」，或是輸入其他文字來修改。");
      users[userId].step = 3.5;
      break;
			case users[userId].step == 3.5:
	 if (eventText == "確認") {
		event.reply("輸入商品名稱\n只要把你想要購買的商品打出來就好了");
		users[userId].step = 4;
	 } else {
		event.reply("配送日期\n選則方便到貨日期+時段");
		users[userId].step = 3;
	 }
	 break;
	case users[userId].step == 4:
	 users[userId].form[3] = eventText;
	 event.reply("選擇配送日期\n選則方便到貨日期+時段是：" + eventText + "\n確定的話輸入「確認」，或是輸入其他文字來修改。");
	 users[userId].step = 4.5;
	 break;
     case users[userId].step == 4.5:
     if (eventText == "確認") {
                 event.reply("你的回覆：\n訂購人的名字：" + users[userId].form[0] + "\n收件人：" + users[userId].form[1] + "\n購買的商品：" + users[userId].form[2] ++ "\n配送日期：" + users[userId].form[3] + "\n要重來的話輸入「重來」，或是輸入其他文字來送出。")
                 users[userId].step = 5;
               } else {
                 event.reply("配送日期\n選則方便到貨日期+時段");
                 users[userId].step = 4;
               }
               break;
             case users[userId].step == 5:
               if (eventText == "重來") {
                 event.reply("輸入您的名字(訂購人)");
                 users[userId].step = 1;
               } else {
                 event.reply("已送出！謝謝您的回覆");
                 users[userId].step = null;
               }
               break;
           }
         }











	if (收到) {
	 步驟=1.5;
		event.reply(收到+"\n重寫/確認").then(function (data) {
		 console.log('Success', data);
		}).catch(function (error) {
		 console.log('Error', error);
		});
	 }}
	 if(步驟==1.5){
	 if (收到 == "重寫") {
		步驟 =1;
		 event.reply("請在輸入一次").then(function (data) {
			console.log('Success', data);
		 }).catch(function (error) {
			console.log('Error', error);
		 });
		}}

	 if(步驟==1.5){
	 if (收到 == "確認") {
		步驟 = 2;
		 event.reply("輸入收件人的名字").then(function (data) {
			console.log('Success', data);
		 }).catch(function (error) {
			console.log('Error', error);
		 });
	 }} else if (步驟==2) {
			if (收到) {
			 步驟=2.5;
				event.reply(收到+"\n重寫/確認").then(function (data) {
				 console.log('Success', data);
				}).catch(function (error) {
				 console.log('Error', error);
				});
			 }}

			 if(步驟==2.5){
			 if (收到 == "重寫") {
				 步驟 = 2;
				 event.reply("請在輸入一次").then(function (data) {
					console.log('Success', data);
				 }).catch(function (error) {
					console.log('Error', error);
				 });
				}}
			 if(步驟==2.5){
			 if (收到 == "確認") {
				步驟 = 3;
				 event.reply("輸入商品名稱\n只要把你想要購買的商品打出來就好了。").then(function (data) {
					console.log('Success', data);
				 }).catch(function (error) {
					console.log('Error', error);
				 });
			 }} else if (步驟==3) {
					if (收到) {
					 步驟=3.5;
						event.reply(收到+"\n重寫/確認").then(function (data) {
						 console.log('Success', data);
						}).catch(function (error) {
						 console.log('Error', error);
						});
					 }}
					 if(步驟==3.5){
					 if (收到 == "重寫") {
						 步驟=3;
						 event.reply("請在輸入一次").then(function (data) {
							console.log('Success', data);
						 }).catch(function (error) {
							console.log('Error', error);
						 });
						}}
					 if(步驟==3.5){
					 if (收到 == "確認") {
						步驟 = 4;
						 event.reply("配送日期\n選則方便到貨日期+時段").then(function (data) {
							console.log('Success', data);
						 }).catch(function (error) {
							console.log('Error', error);
						 });
					 }} else if (步驟==4) {
							if (收到) {
							 步驟=4.5;
								event.reply(收到+"\n重寫/確認").then(function (data) {
								 console.log('Success', data);
								}).catch(function (error) {
								 console.log('Error', error);
								});
							 }}

							 if(步驟==4.5){
							 if (收到 == "重寫") {
								 步驟=4;
								 event.reply("請在輸入一次").then(function (data) {
									console.log('Success', data);
								 }).catch(function (error) {
									console.log('Error', error);
								 });
								}}
								if(步驟==4.5){
							 if (收到 == "確認") {
								步驟 = 5;
								 event.reply("電話號碼").then(function (data) {
									console.log('Success', data);
								 }).catch(function (error) {
									console.log('Error', error);
								 });
							 }} else if (步驟==5) {
								 if (收到) {
									步驟=5.5;
									 event.reply(收到+"\n重寫/確認").then(function (data) {
										console.log('Success', data);
									 }).catch(function (error) {
										console.log('Error', error);
									 });
									}}
									if(步驟==5.5){
									if (收到 == "重寫") {
										步驟=5;
										event.reply("請在輸入一次").then(function (data) {
										 console.log('Success', data);
										}).catch(function (error) {
										 console.log('Error', error);
										});
									 }}
									 if(步驟==5.5){
									if (收到 == "確認") {
									 步驟 = 6;
										event.reply("配送地址").then(function (data) {
										 console.log('Success', data);
										}).catch(function (error) {
										 console.log('Error', error);
										});
									}} else if (步驟==6) {
										if (收到) {
										 步驟=6.5;
											event.reply(收到+"\n重寫/確認").then(function (data) {
											 console.log('Success', data);
											}).catch(function (error) {
											 console.log('Error', error);
											});
										 }}
										 if (步驟==6.5){
										 if (收到 == "重寫") {
											 步驟=6;
											 event.reply("請在輸入一次").then(function (data) {
												console.log('Success', data);
											 }).catch(function (error) {
												console.log('Error', error);
											 });
											}}
											if(步驟==6.5){
										 if (收到 == "確認") {
											步驟 = 7;
											 event.reply("這是您的訂購資料"+).then(function (data) {
												console.log('Success', data);
											 }).catch(function (error) {
												console.log('Error', error);
											 });
											}}




*/
});




bot.on("follow", function (event) {
  event.reply("您好，我是一隻賣食品的Line機器人。\n若您想要知道我有什麼功能，你可以說 help。");
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
