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


var 答案 = [];
var 限制 = 0;
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
	var test = [01,02,03,04,05,06,07,08,09];
	var 數字 = test[Math.floor(Math.random()*test.length)];
 	var 猜數字 = ;

	var 數字_A = ['1', '2', '3','4','5','6','7','8','9'];

if(收到 == "4321"){
		答案.pop();
		答案.push(數字);
}
if (收到.includes(數字_A)) {
//if(收到 == 1||收到 == 2||收到 == 3||收到 == 4||收到 == 5||收到 == 6||收到 == 7||收到 == 8||收到 == 9){
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
	event.reply("答對了！答案是:"+答案).then(function (data) {
		console.log('Success', data);
	}).catch(function (error) {
		console.log('Error', error);
	});}}



	if (收到 == "1234") {
		event.reply(""+答案).then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}



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


		if (收到 == "要玩什麼？"||收到 == "玩什麼？"||收到.toLowerCase() == "要玩mi嗎？"||收到.toLowerCase() == "要玩mi嗎？?"||收到.toLowerCase() == "玩mi？") {
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

});




bot.on("follow", function (event) {
  event.reply("你好！謝謝你加我好友 :D");
  bot.push(owner, "有人加我好友耶！\n我的朋友有一天會比你多的 >:D");
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
