const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "MjM0MDg1OTUxMjg0OTY5NDcy.Ctm59Q.HWG9NZXTM8xnzvfcmR69QavdQMg";
const user = bot.users;
const newChannel = user.game;

//Random Iteger from 'low' to 'high'
function randomIntInc (low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}


bot.on("ready", () => {
  console.log("I am ready!");
});

bot.on("message", message => {
  if (message.content === "!new") { //when message content is '!new' create a new voice channel.
    bot.guilds.get("234094727769751552").createChannel(newChannel, "voice")
      .then(channel => console.log(`Created new channel ${channel}`))
      .catch(console.log);
  };
});

//This creates a new voiceChannel named after the game the user has started playing.
var firstTime = 1;
bot.on("presenceUpdate", (oldUser, newUser) => {
  console.log(newUser);
  if(firstTime === 1){ //
    bot.guilds.get("234094727769751552").createChannel(newUser.game.name, "voice")
    .then(channel => console.log(`Created new channel ${channel}`), error=>{console.log(`Error creating new channel ${error}`);});
    firstTime = 0;
  }

/*
  else if(firstTime === 0){
    for (var channel of newUser.channel.guild.channels) {
      // If the channel is a voice channel, ...
      if (channel instanceof Discord.VoiceChannel) {
        //delete the channel
        if(channel.members.size === 0){
          bot.delete().
          channel.delete()
          .then() // success
          .catch(console.log); // log error;
        }
        break;
      }
    }
  }
*/

//Deletes the voiceChannel when it's empty and no user is playing the associated game.
  if (newUser.game === null){
    var channel = newUser.channel.guild.channels;
    channel.delete()
    .then() // success
    .catch(console.log); // log error;
    }
});

//Magic 8 ball triggered by '!8ball [question here]?' in text chat.
bot.on("message", message => {
 if ((message.content.startsWith('!8ball')) && (message.content.endsWith('?'))) {
   var rnd = randomIntInc(1,5);
   console.log(rnd);
   if(rnd===1) message.channel.sendMessage("No.");
   else if(rnd===2) message.channel.sendMessage("Not Probable.");
   else if(rnd===3) message.channel.sendMessage("Maybe.");
   else if(rnd===4) message.channel.sendMessage("Probably.");
   else if(rnd===5) message.channel.sendMessage("Yes.");
 };
});

bot.login(token);
