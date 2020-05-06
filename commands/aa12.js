const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const moment = require("moment")

module.exports.run = async (bot, message, args) => {
     
    let desc = args.join(" ")
    const rEmbed = new Discord.MessageEmbed()
    .setTitle("Statistics for AA12")
    .setColor(colors.black)
    .addField(`Basic statistics:`, "__**Weapon:**__ AA12\n__**Kind:**__ Primary\n__**Category:**__ Shotguns")
    .addField(`Damage statistics:`, "__**Damage head:**__ 35\n__**Damage torso:**__ 25\n__**Damage arms:**__ 15\n__**Damage legs:**__ 15")
    .addField(`Other:`, "__**Price:**__ $3000")
    .setFooter(`At ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
        message.channel.send({embed: rEmbed})
}


module.exports.config = {
    name: "stats/aa12",
    aliases: ["s/aa12", "statistics/aa12"]
}