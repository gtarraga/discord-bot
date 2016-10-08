const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "";
const user = bot.users;
const newChannel = user.game;

bot.on("ready", () => {
  console.log("I am ready!");
});

/*bot.on("message", message => {
  if (message.content === "/new") {
    bot.guilds.get("234094727769751552").createChannel(newChannel, "voice")
      .then(channel => console.log(`Created new channel ${channel}`))
      .catch(console.log);
  }
  else if (message.content === "/join") {
    bot.channel.get(newChannel).join()
    .then(connection => console.log("Connected!"))
    .catch(console.log);
  }
  else if (message.content === "/del") {
    bot.channel.get(newChannel).delete()
    .then(connection => console.log("Connected!"))
    .catch(console.log);
  }

});*/

bot.on('presenceUpdate', (oldUser, newUser) => {
  bot.guilds.get("234094727769751552").createChannel(newChannel, "voice")
  .then(channel => console.log(`Created new channel ${channel}`))
});

/*client.on('guildMemberAvailable', ("234094727769751552" guild.members) => {
  bot.guilds.get("234094727769751552").createChannel(user.game, "voice")
  .then(channel => console.log(`Created new channel ${channel}`))
  .catch(console.log);
  }
});*/

bot.login(token);
