const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const colors = require("./colors.json");
const prefix = botconfig.prefix

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is operational.`)
    bot.user.setActivity("Official UNGDI Bot", {type: "PLAYING"});
   
})


const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
 
fs.readdir("./commands/", (error, files) => {
 
    if(error) console.log(error)
 
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0) {
        return console.log("Not found.");
    }
 
    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});


bot.on("message", async message =>{
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1)


    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot, message, args)


})

bot.on("guildMemberAdd", async member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "┌🛬welcome")
    if(!channel) return;

    channel.send(`Welcome to UNGDI, ${member}, Please read the <#691035019187060756> before chatting! After you do that you can go to <#691035140662755358> and make the application.\nMake sure to use the guidelines!`)
    member.send("Welcome to UNGDI, enjoy your time here!")
})

bot.on("guildMemberRemove", async member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "┌🛬welcome")
    if(!channel) return;

    channel.send(`${member} left the faction. Thank you for staying with us!`)
    member.send("Thank you for your time being with us, if you ever wish to join back. Here is an invite: https://discord.gg/fPZsQfc")
})

bot.login(botconfig.token);
