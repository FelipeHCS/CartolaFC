const Discord = require("discord.js");
const execute = async (bot, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Você não possui permissão.`)

    message.channel.send(`Digite # e mencione o canal para o envio!`).then(msg => {
        let cp = message.channel.createMessageCollector(x => x.author.id == message.author.id, { max: 1 })
            .on('collect', c => {
                canal = c.mentions.channels.first()
                if (!canal) {
                    message.reply(`Mencione um canal!`)
                } else {
                    message.channel.send(`Qual a mensagem desse anúncio?`).then(msg3 => {
                        let ck = message.channel.createMessageCollector(x => x.author.id == message.author.id, { max: 1 })
                            .on('collect', c => {
                                desc = c.content

                                message.channel.send(`Anúncio enviado ao canal ${canal} com Sucesso.`)

                                let r1 = (desc)
                                canal.send(r1)
                            })
                    })
                }
            })
    })
}
module.exports = {
    name: "say",
    execute,
}