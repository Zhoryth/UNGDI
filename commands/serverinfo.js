const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const moment = require("moment")

module.exports.run = async (bot, message, args) => {
        let sEmbed = new Discord.MessageEmbed()
        .setColor(colors.gold)
        .setTitle("Server Info")
        .setThumbnail(message.guild.iconURL())
        .setAuthor(`${message.guild.name}`, message.guild.iconURL())
        .addField("**Guild Name**", `${message.guild.name}`, true)
        .addField("**Guild Owner**", `${message.guild.owner}`, true)
        .addField("**Member Count**", `${message.guild.memberCount}`, true)
        .addField("**Role Count**", `${message.guild.roles.cache.size}`, true)
        .setFooter(`UNGDI | Serverinfo\nAt ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`, bot.user.displayAvatarURL())
        message.channel.send({embed: sEmbed});
}


module.exports.config = {
    name: "serverinfo",
    aliases: ["si", "serverdesc", "serverdescription"]
}