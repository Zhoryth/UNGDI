const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const moment = require("moment")

module.exports.run = async (bot, message, args) => {
     
    let desc = args.join(" ")
    const rEmbed = new Discord.MessageEmbed()
    .setTitle("Statistics for M16A4")
    .setColor(colors.black)
    .addField(`Basic statistics:`, "__**Weapon:**__ M16A4\n__**Kind:**__ Primary\n__**Category:**__ Rifles")
    .addField(`Damage statistics:`, "__**Damage head:**__ 90\n__**Damage torso:**__ 60\n__**Damage arms:**__ 35\n__**Damage legs:**__ 35")
    .addField(`Other:`, "__**Price:**__ $900")
    .setFooter(`At ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
        message.channel.send({embed: rEmbed})
}


module.exports.config = {
    name: "stats/m16a4",
    aliases: ["s/m16a4", "statistics/m16a4"]
}