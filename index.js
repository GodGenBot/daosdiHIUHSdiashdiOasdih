import { GuildMember } from "discord.js";

const Discord = require("discord.js");

const PREFIX = "!";

const TOKEN = "NDAzMjEzNDU3Njc3MzUyOTc2.DUEDLw.HWCnu6xqUZXFISvfP4YLuflv3fI";

var bot = new Discord.Client();

const talkedRecently = new Set();

bot.on("message", function(message) {
    console.log(message.content);
});

bot.login(process.env.BOT_TOKEN);

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "info":
            const embed = new Discord.RichEmbed()
            .setTitle("StrayBoots Official Discord Bot")
            .setDescription("If you want a new alt account/second account write >getalt")
            .setThumbnail("http://householdairfresheners.com/wp-content/uploads/2017/02/Perfect-S-Logo-Design-75-For-Your-free-logo-designer-with-S-Logo-Design.jpg")
            .setFooter("Join our discord here: https://discord.gg/hQCbvAk");
            message.channel.send({embed});
            break;
        case "getalt":
        if (talkedRecently.has(message.author.id))
    return;
  
  // Adds the user to the set so that they can't talk for 2.5 seconds
  talkedRecently.add(message.author.id);
  setTimeout(() => {
    // Removes the user from the set after 2.5 seconds
    talkedRecently.delete(message.author.id);
  }, 600000);
        var request = require('request');
        var a = [];
        request('https://pastebin.com/raw/F2qt099n',function (error,response,body) 
            {
             if (!error && response.statusCode == 200) {
             a.push(body);
             var arr = a.toString().split("\n");
             var splitted = arr[Math.floor(Math.random() * arr.length)];
            }

            if(GuildMember.build.channels.find("name", "alt-room")) {

                message.author.send(splitted);
                message.author.send("If you believe your account is not working, send a message to Wrymex.");
                message.channel.send(message.author + ", you have now received an NFA user! \nWait ** 10 minutes ** before trying this command again.");
            } else {
                message.channel.send(message.author + ", you have to use this command in the channel #alt-room");
            }
            }); 
         break;
             case "changeloasdasdadsg":
            message.channel.send("| 13.01.2018 | StrayBoots bot founded");
            message.channel.send("| 14.01.2018 | The getalt command got 10 minutes cooldown.");
            break;
             case "staadsasff":
             message.channel.send("Founder | TEST");
             message.channel.send("");
             break;
             case "flixalt":
             if (talkedRecently.has(message.author.id))
         return;
       
       // Adds the user to the set so that they can't talk for 2.5 seconds
       talkedRecently.add(message.author.id);
       setTimeout(() => {
         // Removes the user from the set after 2.5 seconds
         talkedRecently.delete(message.author.id);
       }, 600000);
             var request = require('request');
             var a = [];
             request('https://pastebin.com/raw/iPH6yLUk',function (error,response,body) 
                 {
                  if (!error && response.statusCode == 200) {
                  a.push(body);
                  var arr = a.toString().split("\n");
                  var splitted = arr[Math.floor(Math.random() * arr.length)];
                 }
                 message.author.send(splitted);
                 message.author.send("If you believe your account is not working, send a message to Wrymex.");
                 message.channel.send(message.author + ", you have now received an Netflix account! \nWait ** 10 minutes ** before trying this command again.");
                 }); 
              break;
              case "removecooldown":
              if (message.author.id == "249838434682667009" || message.author.id == "391300271239593984") {
                  talkedRecently.delete(args[1]);
                  message.channel.send(message.author + ", that user was now removed from the cooldown!");
              } else {
                  message.channel.send(message.author + ", you do not have permissions to perform this command!");
              }
               break;
        default:
            message.channel.send("Unknown command, please use the ?help command.");
            break;
    }
});
