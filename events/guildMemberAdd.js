const cezalar = require("../models/cezalı.js")
const mute = require("../models/chatmute.js")
const ms = require("ms")
const moment = require("moment")
require("moment-duration-format")
moment.locale("tr")
module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async run(member) {
        if (Date.now() - member.user.createdTimestamp < ms("5d")) {
            return member.roles.add("833800738643116052")
        }
        let emoji = ""
        if (Date.now() - member.user.createdTimestamp < ms("5d")) {
            emoji = `${this.client.no}`
        } else {
            emoji = `${this.client.ok}`
        }
        member.roles.add(["833800738643116052"])
        cezalar.findOne({ user: member.id }, async (err, res) => {
            if (!res) {

                setTimeout(() => {
                    member.roles.add(["833800738643116052"])
                }, 1500);
                this.client.channels.cache.get("833800768444301312").send("🎉 Sunucumuza hoş geldin <@!" + member + "> !\n\nHesabın " + moment(member.user.createdTimestamp).format("LLL") + " tarihinde (" + moment(member.user.createdTimestamp).fromNow() + ") oluşturulmuş. " + emoji + "\n\nSunucu kurallarımız <#833800762974011410> kanalında belirtilmiştir. Unutma sunucu içerisinde ki ceza işlemlerin kuralları okuduğunu varsayarak gerçekleştirilecek.\n\nSeninle beraber " + member.guild.members.cache.size + " kişi olduk ! Tagımızı alarak bizlere destek olabilirsin ! Kayıt olmak için teyit odalarına girip ses teyit vermen gerekiyor yetkililerimiz seninle ilgilenecektir ! İyi eğlenceler.")
            } else if (res) {
                if (res.ceza == false) {
                    setTimeout(() => {
                        member.roles.add(["833800738643116052"])
                    }, 1500)
                    this.client.channels.cache.get("833800768444301312").send("🎉 Sunucumuza hoş geldin <@!" + member + "> !\n\nHesabın " + moment(member.user.createdTimestamp).format("LLL") + " tarihinde (" + moment(member.user.createdTimestamp).fromNow() + ") oluşturulmuş. " + emoji + "\n\nSunucu kurallarımız <#833800762974011410> kanalında belirtilmiştir. Unutma sunucu içerisinde ki ceza işlemlerin kuralları okuduğunu varsayarak gerçekleştirilecek.\n\nSeninle beraber " + member.guild.members.cache.size + " kişi olduk ! Tagımızı alarak bizlere destek olabilirsin ! Kayıt olmak için teyit odalarına girip ses teyit vermen gerekiyor yetkililerimiz seninle ilgilenecektir ! İyi eğlenceler.")
                } else if (res.ceza == true) {
                    member.roles.remove(["833800738643116052"])
                    member.roles.add("833800739775578112")
                }
            }
        })
        mute.findOne({ user: member.id }, async (err, res) => {
            if (!res) return
            if (res.muted == true) {
                member.roles.add("833800738643116052")
            }
        })
    }
};
