const Discord = require("discord.js");
const execute = (bot, message, args) =>{
    message.delete();

    let embed = new Discord.MessageEmbed()
        .setTitle("Vip's Cartola")
        .setColor('#e4b400')
        .addField('Vip Bronze => R$ 20.00/Mês ',`Você possui acesso ao canal exclusivo de vip's, acesso ao canal para o envio da escalação para nossa equipe e lives exclusivas para assinantes. Link de pagamento: https://mpago.la/2ALmL3s`)
        .addField('Vip Ouro => R$40.00/Mês',`Você possui acesso ao canal exclusivo de vip's, acesso ao canal para o envio da escalação para nossa equipe, lives exclusivas para assinantes e acesso a painel de dados de confrontos. Link de pagamento: https://mpago.la/1moiWgA`)
        .addField('Vip Platina => R$60.00/Mês', `Você possui acesso ao canal exclusivo de vip's, acesso ao canal para o envio da escalação para nossa equipe, lives exclusivas para assinantes, acesso a painel de dados de confrontos e análise em call com cada membro. Link de pagamento: https://mpago.la/1ePP5Dg `)
        .addField('Como contratar?', 'Vá até #🎟┋ᴛɪᴄᴋᴇᴛ-ᴛᴏᴏʟs abra um ticket e envie o comprovante no chat, com o nome da conta que você pagou.')
        .setTimestamp()
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        message.channel.send(embed)
}
module.exports = {
    name:"vips",
    execute,
}