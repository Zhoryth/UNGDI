const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const moment = require("moment")

module.exports.run = async (bot, message, args) => {
     
    let desc = args.join(" ")
    const rEmbed = new Discord.MessageEmbed()
    .setTitle("Statistics for AS VAL")
    .setColor(colors.black)
    .addField(`Basic statistics:`, "__**Weapon:**__ AS VAL\n__**Kind:**__ Primary\n__**Category:**__ Rifles")
    .addField(`Damage statistics:`, "__**Damage head:**__ 115\n__**Damage torso:**__ 65\n__**Damage arms:**__ 45\n__**Damage legs:**__ 45")
    .addField(`Other:`, "__**Price:**__ $22000")
    .setFooter(`At ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
        message.channel.send({embed: rEmbed})
}


module.exports.config = {
    name: "stats/asval",
    aliases: ["s/asval", "statistics/asval"]
}