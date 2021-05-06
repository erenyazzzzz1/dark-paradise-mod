module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async run(old, nev) {
        if (old.username !== nev.username) {
            if (
                !nev.username.includes("Loft") &&
                this.client.guilds.cache
                    .get("833800798000775199")
                    .members.cache.get(nev.id)
                    .roles.cache.has("833800734722097193")
            ) {
                this.client.guilds.cache
                    .get("833800798000775199")
                    .members.cache.get(nev.id)
                    .roles.remove("833800734722097193");
                let tokicham = this.client.guilds.cache
                    .get("833800798000775199")
                    .members.cache.get(nev.id);
                    let name = tokicham.displayName.replace(`Loft`)
                    await tokicham.setNickname(name)
                let roller = ["833800734722097193"]
                for (let i = 0; i < roller.length; i++) {
                    if (tokicham.roles.cache.has(roller[i])) {
                        setTimeout(function () { tokicham.roles.remove(roller[i]); }, 1000);
                    }
                }
                let tagsayı = this.client.users.cache.filter(user => user.username.includes("Loft")).size + 10
                this.client.channels.cache
                    .get("833800798000775199")
                    .send(
                        `─────────────────\n${this.client.no} ${nev} kişisi tagımızı bırakarak ailemize veda etti.**(Toplam Taglı Üyemiz: ${tagsayı})**\n\nÖnce: \`${old.tag}\`\nSonra: \`${nev.tag}\`\n─────────────────`
                    );
            }
            if (
                nev.username.includes("Loft") &&
                !this.client.guilds.cache
                    .get("833800798000775199")
                    .members.cache.get(nev.id)
                    .roles.cache.has("833800734722097193")
            ) {
                let tagsayı = this.client.users.cache.filter(user => user.username.includes("Loft")).size + 10
                this.client.channels.cache
                    .get("833800798000775199")
                    .send(
                        `─────────────────\n${this.client.ok} ${nev} kişisi tagımızı alarak ailemize katıldı.**(Toplam Taglı Üyemiz: ${tagsayı})**\n\nÖnce: \`${old.tag}\`\nSonra: \`${nev.tag}\`\n─────────────────`
                    );
                this.client.guilds.cache
                    .get("833800798000775199")
                    .members.cache.get(nev.id)
                    .roles.add("833800734722097193");
                let tokicham = this.client.guilds.cache
                    .get("833800798000775199")
                    .members.cache.get(nev.id);
                    let name = tokicham.displayName.replace(`Loft`)
                    await tokicham.setNickname(name)
            }
        }
    }
};
