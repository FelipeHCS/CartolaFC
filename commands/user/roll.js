const Discord = require("discord.js");
const execute = async (bot, message, args) => {
    message.delete();

    let faces = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6'
    ]

    let sorteio = (faces[Math.floor(Math.random() * faces.length)]);

    let enviar = `:flag_br: | 🎲 | O número sorteado foi ${sorteio} \n :flag_us: | 🎲 | The number drawn was `
    message.channel.send(enviar);
} 
module.exports = {
    name: "roll",
    execute,
}
