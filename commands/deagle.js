const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const moment = require("moment")

module.exports.run = async (bot, message, args) => {
     
    let desc = args.join(" ")
    const rEmbed = new Discord.MessageEmbed()
    .setTitle("Statistics for DEAGLE")
    .setColor(colors.black)
    .addField(`Basic statistics:`, "__**Weapon:**__ DEAGLE\n__**Kind:**__ Secondary\n__**Category:**__ Pistols")
    .addField(`Damage statistics:`, "__**Damage head:**__ 140\n__**Damage torso:**__ 90\n__**Damage arms:**__ 55\n__**Damage legs:**__ 55")
    .addField(`Other:`, "__**Price:**__ $1600")
    .setFooter(`At ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
        message.channel.send({embed: rEmbed})
}


module.exports.config = {
    name: "stats/deagle",
    aliases: ["s/deagle", "statistics/deagle"]
}