const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const moment = require("moment")

module.exports.run = async (bot, message, args) => {
     
    let desc = args.join(" ")
    const rEmbed = new Discord.MessageEmbed()
    .setTitle("Statistics for UMP-45")
    .setColor(colors.black)
    .addField(`Basic statistics:`, "__**Weapon:**__ UMP-45\n__**Kind:**__ Primary\n__**Category:**__ SMGs")
    .addField(`Damage statistics:`, "__**Damage head:**__ 60\n__**Damage torso:**__ 30\n__**Damage arms:**__ 20\n__**Damage legs:**__ 20")
    .addField(`Other:`, "__**Price:**__ $800")
    .setFooter(`At ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
        message.channel.send({embed: rEmbed})
}


module.exports.config = {
    name: "stats/ump-45",
    aliases: ["s/ump-45", "statistics/ump-45"]
}