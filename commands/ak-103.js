const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const moment = require("moment")

module.exports.run = async (bot, message, args) => {
     
    let desc = args.join(" ")
    const rEmbed = new Discord.MessageEmbed()
    .setTitle("Statistics for AK-103")
    .setColor(colors.black)
    .addField(`Basic statistics:`, "__**Weapon:**__ AK-103\n__**Kind:**__ Primary\n__**Category:**__ Rifles")
    .addField(`Damage statistics:`, "__**Damage head:**__ 120\n__**Damage torso:**__ 75\n__**Damage arms:**__ 50\n__**Damage legs:**__ 50")
    .addField(`Other:`, "__**Price:**__ $5750")
    .setFooter(`At ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
        message.channel.send({embed: rEmbed})
}


module.exports.config = {
    name: "stats/ak-103",
    aliases: ["s/ak-103", "statistics/ak-103"]
}