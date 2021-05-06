const Command = require("../base/Command.js");
class ChatSorumlusu extends Command {
    constructor(client) {
        super(client, {
            name: "chatsorumlusu",
            aliases: ["chat", "chat-sorumlu", "cs"]
        });
    }

    async run(message, args, perm) {
        if (!message.member.roles.cache.has("833800714177740840") && !message.member.hasPermission("ADMINISTRATOR")) return
        let user = message.mentions.members.first() || await this.client.üye(args[0], message.guild)
        if(!user) return this.client.yolla("Rolü verip/almak istediğin kullanıcıyı belirt ve tekrar dene!", message.author, message.channel)
        if(!user.roles.cache.has("833800714177740840")) {
            await this.client.yolla(`${user} kişisine <@&833800714177740840> rolü verildi.`, message.author, message.channel)
            user.roles.add("833992790899556352")
        } else{
            await this.client.yolla(`${user} kişisine <@&833800714177740840> rolü alındı.`, message.author, message.channel)
            user.roles.remove("833992790899556352")
        }
    }
}

module.exports = ChatSorumlusu;
