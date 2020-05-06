const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const moment = require("moment")

module.exports.run = async (bot, message, args) => {
    
    const eEmbed = new Discord.MessageEmbed()
    .setTitle("You are not authorized to utilize this command.")
    .setFooter(`Error, at ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
    .setColor(colors.gold)
    
    if(!message.member.roles.cache.some(role => role.name === 'UNGDI Administrator')) {
        return message.channel.send({embed: eEmbed})
    }
     
    message.delete()
    let desc = args.join(" ")
    const rEmbed = new Discord.MessageEmbed()
    .setTitle("**UNGDI Announcement**")
    .setColor(colors.gold)
    .setDescription(desc)
    .setFooter(`at ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}\nThis Message has been sent by ${message.author.username}`, message.author.displayAvatarURL())
        message.channel.send({embed: rEmbed})
}


module.exports.config = {
    name: "say",
    aliases: ["announce", "announcement", "ann"]
}