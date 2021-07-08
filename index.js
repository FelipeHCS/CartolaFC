const Discord = require("discord.js");
const dotenv = require("dotenv"); // Arquivos de pastas. 
const fs = require("fs"); // Serve para ler os conteúdos de algo!
const path = require("path"); // Puxar as pastas.

dotenv.config(); /*Configuração DOTENV*/

const bot = new Discord.Client()
bot.commands = new Discord.Collection();
bot.queues = new Map();

const commandFiles = fs.readdirSync(path.join(__dirname, "commands")).filter(file => file.endsWith(".js"));

const folders = fs.readdirSync(path.join(__dirname, "/commands"))
for (var folder of folders) {
    const files = fs.readdirSync(path.join(__dirname, "/commands", folder)).filter((filename) => /^.*\.(t|j)s$/.test(filename))
    for (var filename of files) {
        const command = require(`./commands/${folder}/${filename}`);
        bot.commands.set(command.name, command);
    }
}

for (const file of commandFiles) {
    const command = require(path.join(__dirname, "commands", `${file}`));
    bot.commands.set(command.name, command);
}

console.log(bot.commands); /*Mapa dos comandos no terminal */

bot.on('ready', () => { /*Atividade do bot (LET STATUS)*/
    let activities = [
        `Digite c.help`,
        `Cartola FC`,
        `@Felipe Hilário #5995`,
        `Digite c.help`
    ],
        i = 0; /*Não deixa as frases se repetirem!*/
    setInterval(() => bot.user.setActivity(`${activities[i++ %
        activities.length]}`, {
        type: "WATCHING"
    }), 1000 * 60); /*Tempo de intervalo.*/

    console.log(`--------------------//Status do Bot//-----------------\n 
    ${bot.user.username} foi conectado com sucesso e já estamos em ${bot.guilds.cache.size} servidores ( ͡° ͜ʖ ͡°) \n 
    ----------------//Status do Bot//-----------------`);
}); /*Mensagem no terminal */

//Comando react

bot.on('raw', async dados => {
    if (dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if (dados.d.message_id !== "862720129158348830") return //Id da mensagem

    let servidor = bot.guilds.cache.get("859808278133604372")//Id do Servidor
    let membro = servidor.members.cache.get(dados.d.user_id)//Id do membro

    let cargo1 = servidor.roles.cache.get('859899316180484107') // Id do cargo 1 CRU
    let cargo2 = servidor.roles.cache.get('862720661852389416') // Id do cargo 2 CAM
    let cargo3 = servidor.roles.cache.get('862723296189612042') // Id do cargo 3 AMG
    let cargo4 = servidor.roles.cache.get('862723393324974100') // Id do cargo 4 CAP
    let cargo5 = servidor.roles.cache.get('862723464926593064') // Id do cargo 5 ATLGO
    let cargo6 = servidor.roles.cache.get('862724285344776212') // Id do cargo 6 FLA
    let cargo7 = servidor.roles.cache.get('862724457037955102') // Id do cargo 7 COR
    let cargo8 = servidor.roles.cache.get('862725151241666600') // Id do cargo 7 SP

    if (dados.t === "MESSAGE_REACTION_ADD") {
        if (dados.d.emoji.id === "862717602450112512") {
            if (membro.roles.cache.has(cargo1)) return
            membro.roles.add(cargo1)
        } else if (dados.d.emoji.id === "862718761298821180") {
            if (membro.roles.cache.has(cargo2)) return
            membro.roles.add(cargo2)
        } else if (dados.d.emoji.id === "862718332951461939") {
            if (membro.roles.cache.has(cargo3)) return
            membro.roles.add(cargo3)
        } else if (dados.d.emoji.id === "862718332263727134") {
            if (membro.roles.cache.has(cargo4)) return
            membro.roles.add(cargo4)
        } else if (dados.d.emoji.id === "862718332296888340") {
            if (membro.roles.cache.has(cargo5)) return
            membro.roles.add(cargo5)
        } else if (dados.d.emoji.id === "862718332619849767") {
            if (membro.roles.cache.has(cargo6)) return
            membro.roles.add(cargo6)
        } else if (dados.d.emoji.id === "862719445323218994") {
            if (membro.roles.cache.has(cargo7)) return
            membro.roles.add(cargo7)
        }else if (dados.d.emoji.id === "862718333060644904") {
            if (membro.roles.cache.has(cargo8)) return
            membro.roles.add(cargo8)
        }
    }
    if (dados.t === "MESSAGE_REACTION_REMOVE") {
        if (dados.d.emoji.id === "862717602450112512") {
            if (membro.roles.cache.has(cargo1)) return
            membro.roles.remove(cargo1)
        } else if (dados.d.emoji.id === "862718761298821180") {
            if (membro.roles.cache.has(cargo2)) return
            membro.roles.remove(cargo2)
        } else if (dados.d.emoji.id === "862718332951461939") {
            if (membro.roles.cache.has(cargo3)) return
            membro.roles.remove(cargo3)
        } else if (dados.d.emoji.id === "862718332263727134") {
            if (membro.roles.cache.has(cargo4)) return
            membro.roles.remove(cargo4)
        } else if (dados.d.emoji.id === "862718332296888340") {
            if (membro.roles.cache.has(cargo5)) return
            membro.roles.remove(cargo5)
        } else if (dados.d.emoji.id === "862718332619849767") {
            if (membro.roles.cache.has(cargo6)) return
            membro.roles.remove(cargo6)
        } else if (dados.d.emoji.id === "862719445323218994") {
            if (membro.roles.cache.has(cargo7)) return
            membro.roles.remove(cargo7)
        }
        else if (dados.d.emoji.id === "862718333060644904") {
            if (membro.roles.cache.has(cargo8)) return
            membro.roles.remove(cargo8)
        }
    }
})

bot.on("guildMemberAdd", async (member) => { /*Mensagem de boas vindas ao usuário!*/

    let channel = bot.channels.cache.get("859822260718272546"); // Id do canal.
    let emoji = member.guild.emojis.cache.find(emoji => emoji.name === '6885_Uganda'); /*Emoji*/

    member.roles.add('859897345683357716')

    let embed0 = new Discord.MessageEmbed()
        .setColor('#50ff00')
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTitle(`${emoji} Boas Vindas! ${emoji}`)
        .setDescription(`${member.user} Boas Vindas ao servidor ${message.guild.name}, agora estamos com ${member.guilds.memberCount} no servidor.`)
        .addField('Canais', 'Siga as regras para evitar advertências e banimentos <#859822572412862514>')
        .addField('Cargos', 'Em caso de dúvidas mencione algum admin: <@&859830483717455902>')
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();

    await channel.send(embed0)
})
bot.on("guildMemberRemove", async (member) => { /*Mensagem de Saída do usuário!*/

    let channel = bot.channels.cache.get("860113834622451722"); // Id do canal.

    let embed01 = new Discord.MessageEmbed()
        .setColor('#50ff00')
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTitle(` Saiu do servidor :(`)
        .setDescription(`${member.user} Saiu do servidor ${message.guild.name}, agora estamos com ${member.guilds.memberCount} no servidor.`)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();

    await channel.send(embed01)

})

bot.on('message', (message) => { /*Caso o usuário mande um comando errado ele ira retornar:*/
    if (!message.content.toLowerCase().startsWith(process.env.BOT_PREFIX) || message.author.bot || message.channel.type == "dm") return;

    const args = message.content.toLowerCase().slice(process.env.BOT_PREFIX.length).split(" ");
    const command = args.shift();
    try {
        bot.commands.get(command).execute(bot, message, args);
    } catch (e) {
        return message.reply("não reconheço este comando :/");
    }
})

bot.login(process.env.BOT_TOKEN);
