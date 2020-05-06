const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const moment = require("moment")

module.exports.run = async (bot, message, args) => {
     
    let desc = args.join(" ")
    const rEmbed = new Discord.MessageEmbed()
    .setTitle("Statistics for P90")
    .setColor(colors.black)
    .addField(`Basic statistics:`, "__**Weapon:**__ P90\n__**Kind:**__ Primary\n__**Category:**__ SMGs")
    .addField(`Damage statistics:`, "__**Damage head:**__ 45\n__**Damage torso:**__ 25\n__**Damage arms:**__ 20\n__**Damage legs:**__ 20")
    .addField(`Other:`, "__**Price:**__ $1500")
    .setFooter(`At ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
        message.channel.send({embed: rEmbed})
}


module.exports.config = {
    name: "stats/p90",
    aliases: ["s/p90", "statistics/p90"]
}