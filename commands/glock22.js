const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const moment = require("moment")

module.exports.run = async (bot, message, args) => {
     
    let desc = args.join(" ")
    const rEmbed = new Discord.MessageEmbed()
    .setTitle("Statistics for GLOCK 22")
    .setColor(colors.black)
    .addField(`Basic statistics:`, "__**Weapon:**__ GLOCK 22\n__**Kind:**__ Secondary\n__**Category:**__ Pistols")
    .addField(`Damage statistics:`, "__**Damage head:**__ 90\n__**Damage torso:**__ 45\n__**Damage arms:**__ 25\n__**Damage legs:**__ 25")
    .addField(`Other:`, "__**Price:**__ $0")
    .setFooter(`At ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
        message.channel.send({embed: rEmbed})
}


module.exports.config = {
    name: "stats/glock22",
    aliases: ["s/glock22", "statistics/glock22"]
}