const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const moment = require("moment")

module.exports.run = async (bot, message, args) => {
     
    let desc = args.join(" ")
    const rEmbed = new Discord.MessageEmbed()
    .setTitle("Statistics for G36C")
    .setColor(colors.black)
    .addField(`Basic statistics:`, "__**Weapon:**__ G36C\n__**Kind:**__ Primary\n__**Category:**__ Rifles")
    .addField(`Damage statistics:`, "__**Damage head:**__ 80\n__**Damage torso:**__ 40\n__**Damage arms:**__ 40\n__**Damage legs:**__ 40")
    .addField(`Other:`, "__**Price:**__ $2800")
    .setFooter(`At ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
        message.channel.send({embed: rEmbed})
}


module.exports.config = {
    name: "stats/g36c",
    aliases: ["s/g36c", "statistics/g36c"]
}