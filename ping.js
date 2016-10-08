const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on('message', message => {
  if (message.content === 'where is the trigger?') {
    message.reply("i'm triggered right now");
  }
});

bot.login('MjM0MDg1OTUxMjg0OTY5NDcy.Ctm59Q.HWG9NZXTM8xnzvfcmR69QavdQMg');
