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

function CL(arr, el) { arr.splice(arr.indexOf(el), 1); return arr; }
var End = 0;
var 答案 = [];
var 限制 = 0;
var 換人 = 0;
var 雙人PK算數 = 0;
var 玩家1 =[];
var 玩家2 =[];
var 玩家數 = 0;
var 七人 = ["平民","平民","平民","獵人","狼人","狼人","預言家"];

var 狼人玩家1=[];
var 狼人玩家2=[];
var 狼人玩家3=[];
var 狼人玩家4=[];
var 狼人玩家5=[];
var 狼人玩家6=[];
var 狼人玩家7=[];
var 狼人玩家8=[];
var 狼人玩家9=[];
var 狼人玩家10=[];
var 狼人玩家11=[];
var 狼人玩家12=[];
var 狼人玩家13=[];
var 狼人玩家14=[];
var 狼人玩家15=[];





app.post('/linewebhook', linebotParser);
bot.on('message', function (event) {
	var 收到 = event.message.text ;
	var items = ["安安","安","你好～","喔喔喔！！","喔喔！","喔！！！！","喔喔喔","weeeeeeee~~","weeee~~~","Hello","Hi~"];
	var hello = items[Math.floor(Math.random()*items.length)];
	var Ha = ["1.餅乾是男的還是女的？","2.水餃是公的還是母的？", "3.為什麼女生不能常常生氣？","4.月經來了，猜一種過年用品","5.四個男生觸電，猜一種物品"];
	var 髒髒 = Ha[Math.floor(Math.random()*Ha.length)];
	var me = "U813645541c262fb6d9c967efeb884aeb";
	var sayIsay = false;
	var attack = ["你到底在玩什麼啊！！只會送頭！！還不把遊戲刪掉！！","廢物！","你到底有沒有腦啊！","還不跪下來叫聲師父！","一群低智商生物..."];
	var Att = attack[Math.floor(Math.random()*attack.length)];
	var test = [];
	for(var E=0; E==200; E++){
		test.push(E);
	}
	var 數字 = test[Math.floor(Math.random()*test.length)];
	var 七人職業 = 七人[Math.floor(Math.random()*七人.length)];


if(收到 == "狼人game"){
	End = 6;
	event.reply("在遊戲開始前，會『先』設定有多少人要玩，至少7人~最多12人，然後每個玩家都要說一個數字，這個數字就是代表自己的號碼，假如只有1~3號，那要玩的三個玩家就要分別說1 or 2 or 3，沒辦法重複，這三個號碼都被認領之後遊戲才會開始。").then(function (data) {
		console.log('Success', data);
	}).catch(function (error) {
		console.log('Error', error);ybh
	});
}

if(End == 6){
	if(收到 =="7"||收到 =="8"||收到 =="9"||收到 =="10"||收到 =="11"||收到 =="12"){
		End = 收到;
		玩家數 = 0;
	}else{
		event.reply("錯誤，請再輸入一次『人數』。").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}
}

if(End == 7){
	if(收到 == "1"||收到 == "2"||收到 == "3"||收到 == "4"||收到 == "5"||收到 == "6"||收到 == "7")
	玩家數++
	if(收到 == "1"){
狼人玩家1.push(event.source.userId);
}
	if(收到 == "2"){
狼人玩家2.push(event.source.userId);
}
	if(收到 == "3"){
狼人玩家3.push(event.source.userId);
}
	if(收到 == "4"){
狼人玩家4.push(event.source.userId);
}
	if(收到 == "5"){
狼人玩家5.push(event.source.userId);
}
	if(收到 == "6"){
狼人玩家6.push(event.source.userId);
}
	if(收到 == "7"){
狼人玩家7.push(event.source.userId);
}
	event.reply("玩家"+收到+"確認").then(function (data) {
		console.log('Success', data);
	}).catch(function (error) {
		console.log('Error', error);
	});
}
if(End == 8){}
if(End == 9){}
if(End == 10){}
if(End == 11){}
if(End == 12){}

if(End == 7||End == 8||End == 9||End == 10||End == 11||End == 12){
	if(End == 玩家數){
	End = 13;
	event.reply("遊戲開始，開始分發職業。").then(function (data) {
		console.log('Success', data);
	}).catch(function (error) {
		console.log('Error', error);
	});
	}
}

if(End == 13){
	狼人玩家1.push(七人職業);
CL(七人,狼人玩家1[1]);
bot.push(狼人玩家1[0],"你的職業是"+狼人玩家1[1]);
	狼人玩家2.push(七人職業);
CL(七人,狼人玩家1[1]);
bot.push(狼人玩家2[0],"你的職業是"+狼人玩家2[1]);
	狼人玩家3.push(七人職業);
CL(七人,狼人玩家1[1]);
bot.push(狼人玩家3[0],"你的職業是"+狼人玩家3[1]);
	狼人玩家4.push(七人職業);
CL(七人,狼人玩家1[1]);
bot.push(狼人玩家4[0],"你的職業是"+狼人玩家4[1]);
	狼人玩家5.push(七人職業);
CL(七人,狼人玩家1[1]);
bot.push(狼人玩家5[0],"你的職業是"+狼人玩家5[1]);
	狼人玩家6.push(七人職業);
CL(七人,狼人玩家1[1]);
bot.push(狼人玩家6[0],"你的職業是"+狼人玩家6[1]);
	狼人玩家7.push(七人職業);
CL(七人,狼人玩家1[1]);
bot.push(狼人玩家7[0],"你的職業是"+狼人玩家7[1]);
}




if(收到 == "對戰算數"){
	End = 3;
	雙人PK算數 = 0;
	換人 = 1;
	玩家1.pop();
	玩家2.pop();
	event.reply("遊戲開始！兩人的最終目標是唸到35，遊戲剛開始初始值會是0，然後兩人可以說 w or ww or www = w,ww,www的是加多少數字 w = +1, ww = +2, www, = +3，誰先加到剛開始設定好的數字，誰就贏了。\n 說『i1』成為Player 1,『然後在』說『i2』成為Player 2\n如果等不到人玩遊戲，或者是想要結束，可以說『gg』來結束遊戲" ).then(function (data) {
		console.log('Success', data);
	}).catch(function (error) {
		console.log('Error', error);
	});
}

if(End == 3||End == 4||End == 5){
	if(收到.toLowerCase() === "gg"){
		if(event.source.userId == 玩家1||event.source.userId == 玩家2||event.source.userId == me){
		End = 0;
		event.reply("遊戲結束").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}else{
		event.reply("你沒參與遊戲，fuck you").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}
}}


if(End == 3){
	if (收到.toLowerCase() == "i1") {
		End = 4;
		玩家1.push(event.source.userId)
		event.reply("收到").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}
}


if(End == 4){
	if (收到.toLowerCase() == "i2") {
		if(event.source.userId != 玩家1){
		End = 5;
		玩家2.push(event.source.userId)
		event.reply("收到").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}else{
		event.reply("不能重複").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}
}}




if(End == 5){
	if(雙人PK算數 <= 34){
	if((換人+1) % 2 == 0){
	if(收到.toLowerCase() == "w" ||收到.toLowerCase() == "ww" ||收到.toLowerCase() == "www"){
		if(event.source.userId == 玩家1){
	換人++;
	雙人PK算數 = 收到.length+雙人PK算數;
	event.reply("玩家1喊："+""+雙人PK算數).then(function (data) {
		console.log('Success', data);
	}).catch(function (error) {
		console.log('Error', error);
	});}else{
		event.reply("嚴禁局外人").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}}
}else{
	if(收到.toLowerCase() == "w" ||收到.toLowerCase() == "ww" ||收到.toLowerCase() == "www"){
	if(event.source.userId == 玩家2){
	換人++;
	雙人PK算數 = 收到.length+雙人PK算數;
	event.reply("玩家2喊："+""+雙人PK算數).then(function (data) {
		console.log('Success', data);
	}).catch(function (error) {
		console.log('Error', error);
	});}else{
		event.reply("嚴禁局外人").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}}}

}else {
	if(換人 % 2 == 0){
		End = 0;
		event.reply("玩家1獲勝").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}else{
		End = 0;
		event.reply("玩家2獲勝").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}
}}





if(收到 == "猜數字"){
		答案.pop();
		答案.push(數字);
		End = 1;
		event.reply("遊戲開始，猜1~200其中一個數字").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}


if(End == 1){
if(/^[1-200]$/.test(收到)){
	if(收到 < 答案){
		event.reply("再大一點！").then(function (data) {
		console.log('Success', data);
	}).catch(function (error) {
		console.log('Error', error);
	});
}else if(收到 > 答案){
	event.reply("再小一點！").then(function (data) {
	console.log('Success', data);
}).catch(function (error) {
	console.log('Error', error);
});
}else{
	End = 0;
	event.reply("答對了！答案是:"+答案).then(function (data) {
		console.log('Success', data);
	}).catch(function (error) {
		console.log('Error', error);

	});}}}



	if (收到 == "查看答案") {
		event.reply(""+答案).then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}

if(End == 0){

	if (收到.toLowerCase() == "wtf"||收到 === "ＷＴＦ") {
		event.reply("Fuck you").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}

	if (收到 == "差不多") {
		event.reply("差很多").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}

	if (收到 == "嘴砲") {if(event.source.userId == me){
		event.reply(Att).then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}}



	if (/java/.test(收到.toLowerCase())) {
		event.reply("我是派大星！！").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}



if (收到 === "你會不會玩遊戲") {
	event.reply("星海！").then(function (data) {
		console.log('Success', data);
	}).catch(function (error) {
		console.log('Error', error);
	});
}


	if (/熊熊/.test(收到)) {
		event.reply("我是派大星！！").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}


	if (/😂/.test(收到)) {
		event.reply("😂").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}

	if (/復活/.test(收到)) {
		event.reply("吼～～～").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}

	if (收到 == "ok"||/ok./.test(收到)) {
		event.reply("不ok！").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}

	if (/可以嗎/.test(收到)) {
		event.reply("不行!!").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}

	if (/誒/.test(收到)) {
		event.reply("誒～").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}

	if (/不知道/.test(收到)) {
		event.reply("你必須要知道！").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}


	if (/盡量/.test(收到)) {
		event.reply("NO! 沒有盡量！").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}


	if (/海綿寶寶/.test(收到)) {
		event.reply("我是Java!").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}



if (/認真上課/.test(收到)) {
	event.reply("假的").then(function (data) {
		console.log('Success', data);
	}).catch(function (error) {
		console.log('Error', error);
	});
}

if (/吵/.test(收到)) {
	event.reply("我很安靜喔～").then(function (data) {
		console.log('Success', data);
	}).catch(function (error) {
		console.log('Error', error);
	});
}


	if (收到 == "=="||收到 == "＝＝") {
		event.reply("＝＝").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}


	if (收到 == "好喔"||收到 == "好") {
		event.reply("不好！！").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}

	if (/恩/.test(收到)) {
		event.reply("恩？").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}


		if (/嗯/.test(收到)) {
			event.reply("嗯？").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		}

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
		event.reply("紅鮑").then(function (data) {
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

	if (/派大星/.test(收到)) {
		event.reply("我是海綿寶寶！！").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}


	if (收到.toLowerCase() == "fuck"||收到.toLowerCase() == "fuck you"||收到 == "幹你娘") {
		event.reply("幹你娘").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}

	if (收到 == "可惡") {
		event.reply("喔..對啊").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}

	if (收到 == "傻眼") {
		event.reply("喔..").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}



		if (收到 == "傻眼") {
			event.reply("喔..").then(function (data) {
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

		if (收到 == "有人要玩嗎？"||收到 == "要玩嗎？"||收到 == "有人要玩嗎?？"||收到 == "要玩嗎？?") {
			event.reply("我!!!").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		}


		if (收到 == "要玩什麼？"||收到 == "玩什麼？"||收到.toLowerCase() == "要玩mi嗎？"||收到.toLowerCase() == "要玩mi嗎？?"||收到.toLowerCase() == "玩mi？"||收到.toLowerCase() == "玩mi") {
			event.reply("玩星海！！").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		}


		if (收到.toLowerCase() == "no"||收到.toLowerCase() == "no!"||收到.toLowerCase() == "no!!") {
			event.reply("yes！！").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		}


		if (收到.toLowerCase() == "ｑ"||收到.toLowerCase() == "qq") {
			event.reply("QaQ").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		}


		if (收到 == "不要"||收到 == "不要!"||收到 == "不要!!") {
			event.reply("要！！").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		}

		if (/數學/.test(收到)) {
			event.reply("NO數學!!!!").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		}

		if (/無聊/.test(收到)) {
			event.reply("去玩星海！！").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		}

		if (/呵/.test(收到)) {
			event.reply("嘿嘿..").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		}

		if (收到 == "哇哈哈"||收到 == "哈"||收到 == "哈哈"){
			if(event.source.userId === me){
			event.reply("哇哈哈哈哈哈!!!").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		}}

		if (收到 == "312") {
			event.reply("29° 58").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		}

		if (收到 == "像這樣?") {
			event.reply("哪樣？").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		}


	if (收到.toLowerCase() == "id") {
		event.reply(event.source.userId).then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}

}});




bot.on("follow", function (event) {
  event.reply("你好！謝謝你加我好友 :D");
  bot.push(me, "有人加我好友耶！\n我的朋友有一天會比你多的 >:D");
});


bot.on("join", function (event) {
  event.reply("嗨");
  bot.push("U813645541c262fb6d9c967efeb884aeb", "有人加我到群組裡耶 :)");
});

//當被踢
bot.on("leave", function (event) {
  bot.push("U813645541c262fb6d9c967efeb884aeb", "嗚嗚嗚嗚嗚嗚嗚有人把我從群組踢掉QAQQQQQQ");
});
setTimeout(function(){
  bot.push("U813645541c262fb6d9c967efeb884aeb", "啟動了！")
}, 0)

app.listen(process.env.PORT || 80, function () {
	console.log('LineBot is running.');
});
