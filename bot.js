const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready",async() => {
	console.log(`Bocik gotowy! ${bot.user.username}`);

	try {
	let link = await bot.generateInvite(["ADMINISTRATOR"]);
	console.log(link);
	} catch(e) {
	console.log(e.stack);
	}
	});
	
	bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
	
	let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let args = messageArray.slice(1);
	
	if(!message.content.startsWith(prefix)) return;
	
	if(command === `${prefix}sejmajnejm`) {
	let embed = new Discord.RichEmbed()
	.setAuthor(message.author.username)
	.setDescription("Ju ar")
	.setColor("#F0E5D7")
	.addField("Użytkownik: ", `${message.author.username}#${message.author.discriminator}`)
	.addField("ju hef goddam rajt")
	message.channel.sendEmbed(embed);
	console.log("Co tam krzyczysz kurwo biedaku?");
	}
	
	if(command === `${prefix}kicia`) {
	let embed = new Discord.RichEmbed()
	.setTitle("SMAK MAJ KICIAP") 
	.setColor("0xff8040")
	.setDescription ("Pitch my beat up") 
	.setThumbnail("https://cdn.discordapp.com/emojis/301436059898740737.png")
	.setURL("https://www.youtube.com/watch?v=UsC8RBipwOI") 
	.setFooter("gidzia <3")
	message.channel.sendEmbed(embed);
	message.channel.send("<@295308962075508746>");
	}
	
	if(command === `${prefix}pokasowe`) {
	let embed = new Discord.RichEmbed()
	.setTitle("Qrin") 
	.setColor("0xff8040")
	.setDescription ("kochać sowy") 	
	.setThumbnail("http://i.imgur.com/iwvuvIm.jpg")	
	.setFooter("boli mnie to <3")
	message.channel.sendEmbed(embed);
	message.channel.send("<@253692635829633025>");
	}
    
  
  if (command === `${prefix}dowcip`) {
  message.channel.send("No więc stoi sobie blondynka w ciązy przed lustrem. I tak sobie stoi i stoi i mówi: A może to nie moje?  ");
  }
  
  if (command === `${prefix}ejakulacja`) {
  message.channel.send(":persevere: :confounded: :tired_face: :weary: :sweat_drops:  ");
  }
  
  if (command === `${prefix}kitowcy`) {
  message.channel.send("ŁOBLOBLBOBLBOLBBOLBOBLBOBLBBO ");
  }
  if (command === `${prefix}xd`) {
  message.channel.send("XD");
  }
  
  
   if (command === `${prefix}normik`) {
  message.channel.send("`N O R M I C T W O = H I V `");
  }
  
   if (command === `${prefix}spierdalaj`) {
  message.channel.send("sam spierdalaj  ");
  }
	
	  if (command === `${prefix}somerkismierdzo`) {
  message.channel.send(";-;  ");
  }
  if (command === `${prefix}somerkisosupi`) {
  message.channel.send(":D  ");
  }
  
	if (command === `${prefix}ajak`) {
  message.channel.send("A jak Pan Jezus powiedział? ");
  }
  
  
	if (command === `${prefix}tjak`) {
  message.channel.send("Tak jak Pan Jezus powiedział! ");
  }
	
	if (command === `${prefix}mmm`) {
  message.channel.send(" :regional_indicator_m: :regional_indicator_m: :regional_indicator_m: ");
  }
	
	if (command === `${prefix}kj`) {
  message.channel.send(" wuwuwu KURWY JEBANE peel ");
  }
	
	if (command === `${prefix}czesc`) {
  message.channel.send(" Uszanowanko ");
  }
  
  if (command === `${prefix}wyrok1`) {
  message.channel.send("OSKARŻONY JEST WINNY");
  }
  
   if (command === `${prefix}wyrok2`) {
  message.channel.send("OSKARŻONY JEST NIEWINNY");
  }
  
   if (command === `${prefix}sprzeciw`) {
  message.channel.send("http://i0.kym-cdn.com/photos/images/original/000/171/527/objection-vector.png");
  }
  
  
  
  
  
  
	
	if (command === `${prefix}halo`) {
  message.channel.send("https://www.wykop.pl/cdn/c3201142/comment_ObUeoZ3Jp4EFqZ0uuokVa5UwxkrAVXgY.jpg");
  }
	
	
	if (command === `${prefix}pytanie`) {
  message.channel.send("https://www.wykop.pl/cdn/c3201142/comment_UmSyUYojcpkwfsLO2V58hpXd5XgzeTGg.jpg");
  }
	
	if (command === `${prefix}penis`) {
  message.channel.send("https://www.wykop.pl/cdn/c3201142/comment_ffTrApsUU9YbPqrIvsRSetxphjcH7cDk.gif");
  }
	
	if (command === `${prefix}penis`) {
  message.channel.send("https://www.wykop.pl/cdn/c3201142/comment_ffTrApsUU9YbPqrIvsRSetxphjcH7cDk.gif");
  }
	

	if(command === `${prefix}ulaniec`) {
	let embed = new Discord.RichEmbed()
	.setTitle("Giorgio Ulani") 
	.setColor("0xff8040")
	.setDescription ("Jebać ulańców") 	
	.setThumbnail("http://i.imgur.com/CARgzEe.png")	
	.setFooter("mareczek <3")
	message.channel.sendEmbed(embed);
	message.channel.send("<@300587337547776000>");
	}
	
		if(command === `${prefix}vigo`) {
	let embed = new Discord.RichEmbed()
	.setTitle("Vigo_Von_Homburg_Deutschendorf ") 
	.setColor("0xff8040")
	.setDescription ("Straszny obraz, boję sie go") 	
	.setThumbnail("https://www.wykop.pl/cdn/c3397992/Vigo_Von_Homburg_Deutschendorf_7nvvEhGW8R,q250.jpg")	
	.setFooter("ropniak szklany <3")
	message.channel.sendEmbed(embed);
	message.channel.send("<@259666563337158666>");
	}

	
	if(command === `${prefix}snaut`) {
	let embed = new Discord.RichEmbed()
	.setTitle("Snaut ") 
	.setColor("0xff8040")
	.setDescription ("W czapce w lesie") 	
	.setThumbnail("http://i.imgur.com/Dnhzkuo.jpg")	
	.setFooter("po lesie <3")
	message.channel.sendEmbed(embed);
	message.channel.send("<@218483550398185473>");
	}
	
	
	
	
	if(command === `${prefix}kon`) {
	let embed = new Discord.RichEmbed()
	.setTitle("JakisGlupiKon ") 
	.setColor("0xff8040")
	.setDescription ("Jaki jest koń każdy widzi") 	
	.setThumbnail("http://i.imgur.com/Z20kRbk.jpg")	
	.setFooter("koniu ty mój <3")
	message.channel.sendEmbed(embed);
	message.channel.send("<@347741629144367114>");
	}

	
	if(command === `${prefix}chwile`) {
	let embed = new Discord.RichEmbed()
	.setTitle("CieWszystkieChwileTe ") 
	.setColor("0xff8040")
	.setDescription ("Ile dałbym by zapomnieć") 	
	.setThumbnail("https://cdn.discordapp.com/emojis/304299379114770442.png")	
	.setFooter("które są na nie <3")
	message.channel.sendEmbed(embed);
	message.channel.send("<@302105763181232133>");
	}
	
	
	if(command === `${prefix}ajspit`) {
	let embed = new Discord.RichEmbed()
	.setTitle("PlujęNaTwójGrób ") 
	.setColor("0xff8040")
	.setDescription ("Kreatorka dobrego smaku i stylu") 	
	.setThumbnail("http://i.imgur.com/NerU0Mp.jpg")	
	.setFooter("ogórasku <3")
	message.channel.sendEmbed(embed);
	message.channel.send("<@295307703058956289>");
	}
	
	
	if (command === `${prefix}bydlak`) {
	
	  message.channel.send("POKA BYDLAKA SLEDZIA KARPIA SKURWYSYNA KARAKANA  PUDZIANA KRAKENA GODZILLE MUTANTA GNOJA PLASTUSIA ANAKONDE DZIKA WARIATA SKUBANCA SAMCZYKA MUTANTA WEGORZA POTWORA SMIERDZIELA JANUSZA KASZTANKA BOMBONA KATAPULTE SZTANGE OCHRONIARZA KARTOFLA GRZYBIARZA FARFOCLA BOMBIARZA DRONGALA LASICE BOLSZEWIKA JAMNIKA PANTOFELKA KSIECIA CIEMNOSCI BELZEBUBA SWINIAKA FLET JOHNA DŁUTO TYCZKE BOLCA KAPUCYNA PYTONGA WACKA BULLDOGA URWISA DRUCIKA KAKTUSA PISAKA ARMATE SOWE BAMBUSA FLAKA BADYLA PARÓWE GOLIATA" );
	  
	}
	
	if (command === `${prefix}francuski`) {
	
	  message.channel.send("Omlet di fromaż silwuple wa mać \n XD" );
	}
	
	if (command === `${prefix}goha`) {
	
	  message.channel.send("Dla ciebie 'Pani Gosiu' szmato jebana w dupe ruchana" );
	}
	
	if (command === `${prefix}nje`) {
	
	  message.channel.send("GO HA GO HA GO HA GO HA GO HA GO HA GO HA GO HA GO HA GO HA GO HA GO HA |3zl " );
	  
	}
	
	if (command === `${prefix}testo`) {
	
	  message.channel.send("AAA KUHWA BIEDAKI POLAKI \nEWELINO TY KUHWO JEBANA" );
	  
	}
	
	if (command === `${prefix}forfiter`) {
	
	  message.channel.send("Ic piękny ic bjutiful \n KURDE ŚWIAGIER \n GIERARY HIR" );
	  
	}
	
	if (command === `${prefix}bkc`) {
	
	  message.channel.send("https://www.wykop.pl/cdn/c3201142/comment_XF3dnJOyMh3svdzCSBBCQFq2NqiTOYCr.jpg" );
	  
	}
	
	if (command === `${prefix}beka`) {
	
	  message.channel.send("bk z kg chb z cb" );
	  
	}
	
	
	if (command === `${prefix}usunkonto`) {
	
	  message.channel.send("Michał Białek kończył nocną wartę w serwerowni.." );
	  
	}
	
	
if (command === `${prefix}dobroc`) {
	
	  message.channel.send("http://www.pajacyk.pl/#index" );
	  
	}
	
	
	if (command === `${prefix}kc`) {
	
	  message.channel.send("KCT <3 <3 <3 <3 " );
	  
	}
	
	if (command === `${prefix}przepros`) {
	
	  message.channel.send("Przepraszam ;-;" );
	  
	}
	
	if (command === `${prefix}pociesz`) {
	
	  message.channel.send("Upadłem i sobie ten głupi ryj rozwaliłem" );
	  
	}
	
	if (command === `${prefix}hehe`) {
	
	  message.channel.send("HEHEHEHEHHEHEHE no bk XD XD XD" );
	  
	}
	
	if (command === `${prefix}podziekuj`) {
	
	  message.channel.send("Dziękuję ^^" );
	  
	}
	
	
	if (command === `${prefix}ciemno`) {
	
	  message.channel.send("ZARAZ BĘDZIE CIEMNO!! \nZAMKNIJ SIE!!" );
	  
	}
	
	if (command === `${prefix}zamknijsie`) {
	
	  message.channel.send("SAM SIE ZAMKNIJ" );
	  
	}
	
	if (command === `${prefix}brawo`) {
	
	  message.channel.send("klap klask klap klask klap klask klap klask klap klask klap klask" );
	  
	}
	
	if (command === `${prefix}w11`) {
	
	  message.channel.send("PUŚ JOM POEDZIAŁEM PUŚ JOM" );
	  
	}
	
	if (command === `${prefix}hp`) {
	
	  message.channel.send("HARI POTA, PRAGNEM CIE" );
	  
	}
	
	
	
	
	if (command === `${prefix}ping`) {
	
	  message.channel.send("pong" );
	  
	}
	
	if (command === `${prefix}dobre`) {
	
	  message.channel.send("Dobre \nPomarańczowe  " );
	  
	}
	
	if (command === `${prefix}pong`) {
	
	  message.channel.send("ping" );
	  
	}
	
	if (command === `${prefix}scina`) {
	
	  message.channel.send("hytsz" );
	  
	}
	
	if (command === `${prefix}rada`) {
	
	  message.channel.send("jest bunio nie ma opierdolonej gały" );
	  
	}
	
	if (command === `${prefix}kurwa`) {
	
	  message.channel.send("Kurwa to twoja matka, babka i prababka" );
	  
	}
	
	if (command === `${prefix}bagiety`) {
	
	  message.channel.send("http://i.imgur.com/bugWHch.png" );
	  
	}
	
	if (command === `${prefix}kiedys`) {
	
	  message.channel.send("kiedyś to było, kura <mlask, mlask> <chrum, chrum> <mlask> <chrum> kurr, kiedys to było! kura, kiedyś to było. ne to co teraz kurła. kiedyś to było. ale o, <mlask> kiedyś to było. kurła ale kiedyś było <mlask> ale kiedyś było <mlask, mlask> kura, ale kiedyś było! <mlask, mlask> <chrum, chrum> kurła, ale kiedyś to byłooo kura. nie to co teraz kura. kurwa! ale kiedyś to było, kuuurwa! ale kiedys to było <kwiiiii, kwiiiiii> <omniam, mniam> kiedyś to było, kurła. ale kiedyś to było. ale kiedyś to było! kiedyś to było. kura! ae kiedyś to było, kuraa. kiedys to było!, kurła! <mlask, mlask> łoo, kiedyś to było, kurwa. kiedyś toaaardzo. kurwa! ae kiedyś to było no. ae, kiedyś to było, kur. kiedyś to było, kur. ne to teraz, kur! kiedyś to było, kuuuurwa! ae kiedyś to było no <chrrr> ae kiedyś to było, kur. kiedyś to było, a to kiedyś to było, kurła. <mlask> <kwiiiiiiiii, kwiiiiiiiiii>﻿ " );
	  
	}
	
	if (command === `${prefix}delete`) {
	
	  message.channel.send("Sam sie usuń" );
	  
	}
	
	if (command === `${prefix}wargi`) {
	
	  message.channel.send("https://www.wykop.pl/cdn/c3201142/comment_CGMTGsvbsisG0zO4QX0euKytwDWVzh1h.jpg" );
	  
	}

	if (command === `${prefix}kiedyon`) {
	
	  message.channel.send("http://www.blasty.pl/upload/images/large/2017/06/kiedy-wylacza-sie-prysznic-i-juz_2017-06-26_08-11-52.jpg" );
	  
	}
	
	
	if (command === `${prefix}kiedyona`) {
	
	  message.channel.send("http://www.blasty.pl/upload/images/large/2017/07/kiedy-slyszysz-jak-wylacza-sie_2017-07-08_17-18-20.jpg" );
	  
	}
	
	if (command === `${prefix}rave`) {
	
	  message.channel.send("\ :kicia: > < :kicia: / \ :kicia: / \ :kicia: > < :kicia: /" );
	  
	}
	
	if (command === `${prefix}fujka2`) {
	
	  message.channel.send("http://imgur.com/a/ine7v" );
	  
	}
	
	if (command === `${prefix}fujka`) {
	
	  message.channel.send("http://i.imgur.com/5XLNDos.png" );
	  
	}
	
	if (command === `${prefix}kruci`) {
	
	  message.channel.send("https://www.wykop.pl/cdn/c3201142/comment_rmKUXmOfMKsu5rAZdSckYN54g6QnUpOG.jpg" );
	  
	}
	
	if (command === `${prefix}gdzie`) {
	
	  message.channel.send("W DOMU KURWA A GDZIE?" );
	  
	}
	
	if (command === `${prefix}uuu`) {
	
	  message.channel.send("https://www.wykop.pl/cdn/c3201142/comment_yHtI6KsAhT0t5k84W2j0RY2TyprF00WY,w400.jpg" );
	  
	}
	
	
	if (command === `${prefix}ryba`) {
	
	  message.channel.send("https://www.youtube.com/watch?v=2x0pOulw-Gc&feature=youtu.be" );
	  
	}
	
	
	
	if (command === `${prefix}komendy`) {
	
	  message.channel.send("`==KOMENDY TECHNICZNO ROZRYWKOWE==` \n");
	 message.channel.send("` .userinfo   .ejakulacja   .ping   .dowcip   .spierdalaj   .forfiter   .testo   .nje   .goha   .francuski   .bkc   .beka   .somerkismierdzo   .somerkisosupi   .kitowcy   .hehe   .pociesz   .przepros   .mmm   .halo   .pong   .scina   .zamknijsie   .wyrok1   .wyrok2   .sprzeciw   .czesc   .brawo   .dobre   .hp   .w11   .rada   .kurwa   .bagiety   .kiedys   .wargi    .delete   .kiedyon   .kiedyona   .fujka   .sejmajnejm   .gdzie   .uuu   .ryba`");
	
	 message.channel.send("`==KOMENDY WOŁANE==`");
	 message.channel.send("` .kicia   .ulaniec   .pokasowe   .vigo   .kon`");
	
	  
	 }
	
});

bot.login(botSettings.token);
