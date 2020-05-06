const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const moment = require("moment")

module.exports.run = async (bot, message, args) => {
     
    let desc = args.join(" ")
    const rEmbed = new Discord.MessageEmbed()
    .setTitle("Statistics for AK-47")
    .setColor(colors.black)
    .addField(`Basic statistics:`, "__**Weapon:**__ AK-74\n__**Kind:**__ Primary\n__**Category:**__ Rifles")
    .addField(`Damage statistics:`, "__**Damage head:**__ 95\n__**Damage torso:**__ 55\n__**Damage arms:**__ 50\n__**Damage legs:**__ 50")
    .addField(`Other:`, "__**Price:**__ $1000")
    .setFooter(`At ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
        message.channel.send({embed: rEmbed})
}


module.exports.config = {
    name: "stats/ak-74",
    aliases: ["s/ak-74", "statistics/ak-74"]
}