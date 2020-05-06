const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const moment = require("moment")

module.exports.run = async (bot, message, args) => {
     
    let desc = args.join(" ")
    const rEmbed = new Discord.MessageEmbed()
    .setTitle("Statistics for SCAR-H")
    .setColor(colors.black)
    .addField(`Basic statistics:`, "__**Weapon:**__ SCAR-H\n__**Kind:**__ Primary\n__**Category:**__ Rifles")
    .addField(`Damage statistics:`, "__**Damage head:**__ 145\n__**Damage torso:**__ 90\n__**Damage arms:**__ 70\n__**Damage legs:**__ 70")
    .addField(`Other:`, "__**Price:**__ $2900")
    .setFooter(`At ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
        message.channel.send({embed: rEmbed})
}


module.exports.config = {
    name: "stats/scar-h",
    aliases: ["s/scar-h", "statistics/scar-h"]
}