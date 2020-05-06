const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const moment = require("moment")
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {

    let uEmbed = new Discord.MessageEmbed()
    .setColor(colors.gold)
    .setTitle("UNGDI Help:")
    .setFooter(`At ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
    .setDescription("Welcome to UNGDI, I am the official UNGDI bot!\n**Prefix:** .\n**Creator:** Zhoryth#7845\n**Meant for:** UNGDI (United Nations Global Defense)\n\nWe hope this helps, and have a good time here!")
    .addField(`Commands:`, "__**.hello**__ Simply test if the bot is working. __**Aliases:**__ .hi, .hey\n__**.serverinfo**__ See the server's statistics. __**Aliases:**__ .si, .serverdesc, .serverdiscription\n__**.commands**__ This. __**Aliases:**__ .help\n__**.say**__ Create an announcement. __*only for UNGDI Administrators*__ __**Aliases:**__ .announce, .announcement, .ann")
    message.channel.send(uEmbed)
}


module.exports.config = {
    name: "help",
    aliases: ["commands"]
}