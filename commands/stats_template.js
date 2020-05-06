const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const moment = require("moment")

module.exports.run = async (bot, message, args) => {
     
    let desc = args.join(" ")
    const rEmbed = new Discord.MessageEmbed()
    .setTitle("Statistics for Template")
    .setColor(colors.black)
    .addField(`Basic statistics:`, "__**Weapon:**__\n__**Kind:**__\n__**Category:**__")
    .addField(`Damage statistics:`, "__**Damage head:**__\n__**Damage torso:**__\n__**Damage arms:**__\n__**Damage legs:**__")
    .addField(`Other:`, "__**Price:**__")
    .setFooter(`At ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
        message.channel.send({embed: rEmbed})
}


module.exports.config = {
    name: "stats/",
    aliases: ["s/", "statistics/"]
}