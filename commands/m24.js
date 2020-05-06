const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const moment = require("moment")

module.exports.run = async (bot, message, args) => {
     
    let desc = args.join(" ")
    const rEmbed = new Discord.MessageEmbed()
    .setTitle("Statistics for M24")
    .setColor(colors.black)
    .addField(`Basic statistics:`, "__**Weapon:**__ M24\n__**Kind:**__ Primary\n__**Category:**__ Snipers")
    .addField(`Damage statistics:`, "__**Damage head:**__ 300\n__**Damage torso:**__ 175\n__**Damage arms:**__ 85\n__**Damage legs:**__ 85")
    .addField(`Other:`, "__**Price:**__ $3600")
    .setFooter(`At ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
        message.channel.send({embed: rEmbed})
}


module.exports.config = {
    name: "stats/m24",
    aliases: ["s/m24", "statistics/m24"]
}