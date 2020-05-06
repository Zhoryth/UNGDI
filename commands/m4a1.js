const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const moment = require("moment")

module.exports.run = async (bot, message, args) => {
     
    let desc = args.join(" ")
    const rEmbed = new Discord.MessageEmbed()
    .setTitle("Statistics for M4A1")
    .setColor(colors.black)
    .addField(`Basic statistics:`, "__**Weapon:**__ M4A1\n__**Kind:**__ Primary\n__**Category:**__ Rifles")
    .addField(`Damage statistics:`, "__**Damage head:**__ 87\n__**Damage torso:**__ 50\n__**Damage arms:**__ 35\n__**Damage legs:**__ 35")
    .addField(`Other:`, "__**Price:**__ $1200")
    .setFooter(`At ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
        message.channel.send({embed: rEmbed})
}


module.exports.config = {
    name: "stats/m4a1",
    aliases: ["s/m4a1", "statistics/m4a1"]
}