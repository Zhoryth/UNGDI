const Discord = require("discord.js")
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.roles.cache.some(role => role.name === 'UNGDI Administrator')) {
        return message.channel.send("**Not enough permissions.\nError")
    }
    let rMember = message.mentions.member.first() || message.guild.members.cache.find(m => m.user.tage === args[0]) || message.guild.members.cache.get(args[0])
    let role = message.guild.roles.cache.find(r => r.name === args[1]) || message.guild.roles.cache.find(r => r.id === args[1]) || message.mentions.roles.first()
    
    if(!rMember) {
        return message.channel.send("**No member specified.**\nError")
    }
    if(!role) {
        return message.channel.send("**No valid role specified.**\nError")
    }
    if(!rMember.roles.cache.has(role.id)) {
        return message.channel.send("**Member already has this role.**\nError")
    } else {
        await rMember.roles.add(role.id).catch(e => console.log(e.message))
        message.channel.send(`The role ${role.name} has been added to ${rMember.displayName}`)
    }
}


module.exports.config = {
    name: "addrole",
    aliases: ["add", "ar"]
}