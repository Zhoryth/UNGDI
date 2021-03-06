const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const moment = require("moment")

module.exports.run = async (bot, message, args) => {
     
    let desc = args.join(" ")
    const rEmbed = new Discord.MessageEmbed()
    .setTitle("Statistics for MP5")
    .setColor(colors.black)
    .addField(`Basic statistics:`, "__**Weapon:**__ MP5\n__**Kind:**__ Primary\n__**Category:**__ SMGs")
    .addField(`Damage statistics:`, "__**Damage head:**__ 65\n__**Damage torso:**__ 35\n__**Damage arms:**__ 25\n__**Damage legs:**__ 25")
    .addField(`Other:`, "__**Price:**__ $2100")
    .setFooter(`At ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
        message.channel.send({embed: rEmbed})
}


module.exports.config = {
    name: "stats/mp5",
    aliases: ["s/mp5", "statistics/mp5"]
}