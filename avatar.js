const Command = require("../base/Command.js");
const Discord = require("discord.js")
class Avatar extends Command {
    constructor(client) {
        super(client, {
            name: "avatar",
            aliases: ["av"]
        });
    }

    async run(message, args, data) {
        if(!message.member.hasPermission("ADMINISTRATOR") && message.channel.id == "833800775519174657") return
        let user = args.length > 0 ? message.mentions.users.first() || await this.client.users.fetch(args[0]) || message.author : message.author
        message.channel.send(`${user.tag} ${user.displayAvatarURL({ dynamic: true, size: 4096 })}`)

    }
}

module.exports = Avatar;
