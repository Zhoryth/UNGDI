const Discord = require("discord.js");
const colors = require("../colors.json");
const moment = require("moment")
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    const rEmbed = new Discord.MessageEmbed()
    .setTitle("You are not authorized to utilize this command.")
    .setFooter(`Error, at ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
    .setColor(colors.red)
    
    if(!message.member.roles.cache.some(role => role.name === 'UNGDI Administrator')) {
        return message.channel.send({embed: rEmbed})
    }

    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])

    const eEmbed = new Discord.MessageEmbed()
    .setTitle("No members found with this username.")
    .setFooter(`Error, at ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
    .setColor(colors.red)
    
    if(!wUser) {
        return message.channel.send({embed: eEmbed})
    }

    let warnlevel = warns[wUser.id].warns;

    const embed = new Discord.MessageEmbed()
    .setDescription(`<@${wUser.id}> has: ${warnlevel} warnings.`)
    .setColor(colors.red)
    .setFooter(`At ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)

    message.channel.send({embed})
}

module.exports.config = {
    name: "warnings",
    aliases: ["ws", "warnlevel", "wl"]
}