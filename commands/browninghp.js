const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const moment = require("moment")

module.exports.run = async (bot, message, args) => {
     
    let desc = args.join(" ")
    const rEmbed = new Discord.MessageEmbed()
    .setTitle("Statistics for BROWNING HP")
    .setColor(colors.black)
    .addField(`Basic statistics:`, "__**Weapon:**__ BROWNING HP\n__**Kind:**__ Secondary\n__**Category:**__ Pistols")
    .addField(`Damage statistics:`, "__**Damage head:**__ 95\n__**Damage torso:**__ 45\n__**Damage arms:**__ 45\n__**Damage legs:**__ 45")
    .addField(`Other:`, "__**Price:**__ $1200")
    .setFooter(`At ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
        message.channel.send({embed: rEmbed})
}


module.exports.config = {
    name: "stats/browninghp",
    aliases: ["s/browninghp", "statistics/browninghp"]
}