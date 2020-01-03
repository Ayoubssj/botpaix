const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.TOKEN);

client.on("message", (message) => {
    if (message.content.toLocaleLowerCase().includes("ping")) {
      client.users.get("243774074432520192").send("Dédicace arouf gangsta");
    }
   
    if (message.content.startsWith("foo")) {
      message.channel.send("bar!");
    }
  });
