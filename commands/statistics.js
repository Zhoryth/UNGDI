const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const moment = require("moment")
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {

    let uEmbed = new Discord.MessageEmbed()
    .setColor(colors.black)
    .setTitle("Weapon Statistics:")
    .setFooter(`At ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
    .setDescription("To view the statistics of a weapon. **Use:**\n.stats/<name> or\n.s/<name> or\n.statistics/<name>.")
    .addField(`SNIPERS:`, "__**XM2010**__ .stats/xm2010\n__**M24**__ .stats/m24")
    .addField(`SMGS:`, "__**MP5**__ .stats/mp5\n__**P90**__ .stats/p90\n__**AK-74U**__ .stats/ak-47u\n__**UMP-45**__ .stats/ump-45")
    .addField(`RIFLES:`, "__**SCAR-H**__ .stats/scar-h\n__**M16A4**__ .stats/m16a4\n__**AS VAL**__ .stats/asval\n__**G36C**__ .stats/g36c\n__**AK-74**__ .stats/ak-74\n__**M16A2**__ .stats/m16a2\n__**AK-103**__ .stats/ak-103\n__**M4A1**__ .stats/m4a1")
    .addField(`SHOTGUNS:`, "__**AA12**__ .stats/aa12\n__**BENELLI M4**__ .stats/benellim4")
    .addField(`PISTOLS:`, "__**MAKAROV**__ .stats/makarov\n__**DEAGLE**__ .stats/deagle\n__**GLOCK 22**__ .stats/glock22\n__**BROWNING HP**__ .stats/browninghp")
    message.channel.send(uEmbed)
}

module.exports.config = {
    name: "statistics",
    aliases: ["stats", "s"]
}