const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const moment = require("moment")

module.exports.run = async (bot, message, args) => {
     
    let desc = args.join(" ")
    const rEmbed = new Discord.MessageEmbed()
    .setTitle("Statistics for AK-74U")
    .setColor(colors.black)
    .addField(`Basic statistics:`, "__**Weapon:**__ AK-74U\n__**Kind:**__ Primary\n__**Category:**__ SMGs")
    .addField(`Damage statistics:`, "__**Damage head:**__ 70\n__**Damage torso:**__ 40\n__**Damage arms:**__ 30\n__**Damage legs:**__ 30")
    .addField(`Other:`, "__**Price:**__ $1200")
    .setFooter(`At ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
        message.channel.send({embed: rEmbed})
}


module.exports.config = {
    name: "stats/ak-74u",
    aliases: ["s/ak-74u", "statistics/ak-74u"]
}