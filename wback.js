const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log('I am ready!');
});


bot.on("presence", function (pUser, pStatus, pGameID) {
    if (pStatus === "online")
    {
        switch(pUser.username)
        {
            //bunch of cases with special usernames go here, example
case "example":
                {
                    bot.sendMessage(234094727769751552,"example message")
                    console.log(pUser.username)
                    break;
                }

            default:
                {
                    bot.sendMessage(234094727769751552, "Welcome back " + pUser.mention() + "!")
                    console.log(pUser.username)
                    break;
                }
        }
    }
});

bot.login('MjM0MDg1OTUxMjg0OTY5NDcy.Ctm59Q.HWG9NZXTM8xnzvfcmR69QavdQMg');
