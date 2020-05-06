const Discord = require("discord.js");
const colors = require("../colors.json");
const moment = require("moment")
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
    //.warn @daeshan <reason>

    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    let reason = args.join(" ").slice(22);
    
    
    
    const rEmbed = new Discord.MessageEmbed()
    .setTitle("You are not authorized to utilize this command.")
    .setFooter(`Error, at ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
    .setColor(colors.gold)
    
    if(!message.member.roles.cache.some(role => role.name === 'UNGDI Administrator')) {
        return message.channel.send({embed: rEmbed})
    }

    const eEmbed = new Discord.MessageEmbed()
    .setTitle("No members found with this username.")
    .setFooter(`Error, at ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
    .setColor(colors.gold)
    
    if(!wUser) {
        return message.channel.send({embed: eEmbed})
    }

    if(!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
    };

    warns[wUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (error) => {
        if(error) {
          console.log(error)
        } 
      });
    
    const warnEmbed = new Discord.MessageEmbed()
    .setDescription("Warns")
    .setAuthor(`${message.author.username}`)
    .setColor(colors.red)
    .addField(`Warned user:`, `${wUser.displayName}`, true)
    .addField(`Warned in:`, `${message.channel}`, true)
    .addField(`Number of warnings:`, `${warns[wUser.id].warns}`, true)
    .addField(`Reason:`, `${reason}`, true)
    .setFooter(`Error, at ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`);

    let warnchannel = message.guild.channels.cache.find(channel => channel.name === "warn-logs");
    if(!warnchannel) return message.reply("Couldn;t find channel");

    warnchannel.send({embed: warnEmbed})

    const cEmbed = new Discord.MessageEmbed()
    .setTitle(`You have been warned in ${message.guild.name} for:`)
    .setDescription(`${reason}`, true)
    .setColor(colors.red)
    .setFooter(`At ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)

    wUser.send({embed: cEmbed})
}

module.exports.config = {
    name: "warn",
    aliases: ["w", "warning"]
}