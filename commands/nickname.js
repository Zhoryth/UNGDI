const Discord = require("discord.js")
const moment = require("moment")
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {
    let user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
    let nickname = args.join(" ").slice(22);

    const rEmbed = new Discord.MessageEmbed()
    .setTitle("You are not authorized to utilize this command.")
    .setFooter(`Error, at ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
    .setColor(colors.gold)
    
    if(!message.member.roles.cache.some(role => role.name === 'UNGDI Administrator')) {
        return message.channel.send({embed: rEmbed})
    }
    
    const eEmbed = new Discord.MessageEmbed()
    .setTitle("No members found with this username.")
    .setFooter(`Error, at ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
    .setColor(colors.gold)
    
    if(!user) {
        return message.channel.send({embed: eEmbed})
    }

    const bEmbed = new Discord.MessageEmbed()
    .setTitle("No nickname specified.")
    .setFooter(`Error, at ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
    .setColor(colors.gold)

    if(!nickname) {
        return message.channel.send({embed: bEmbed})
    }

    user.setNickname(nickname);
   
    const embed = new Discord.MessageEmbed()
    .setTitle("Nickname succesfully given.")
    .setDescription(`*succesfully changed the nickname of ${user}.*`)
    .setColor(colors.gold)
    .setFooter(`At ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)

    message.channel.send(embed)
}


module.exports.config = {
    name: "nickname",
    aliases: ["nick", "nn"]
}