const Discord = require ("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message) => {
  

const nobles = new Discord.MessageEmbed()// fwhy code dan alınıp editlenmiştir

.setColor("RANDOM")
.setTitle(`**▬▬▬▬▬▬[** ©️ **Shimoriya Blox Fruit** ©️ **]▬▬▬▬▬▬**  \n\n> :floppy_disk: __${process.env.prefix}istatistik__ **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix:** __${process.env.prefix}__ `)
.setThumbnail(client.user.avatarURL)
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Market komutları** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» ${process.env.prefix} bahis :** Bahis oynarsınız.
> **» ${process.env.prefix} cüzdan :** Parana bakarsın.
> **» ${process.env.prefix} parası :** Herhangi bir kullanıcının parasına bakarsın.
> **» ${process.env.prefix} envanter :** Envanterine bakarsın.
> **» ${process.env.prefix} içerik :** İçerikler hakkında bilgi alırsınız.
> **» ${process.env.prefix} market :** Ürünlerin ücretini görürsünüz
> **» ${process.env.prefix} satın-al :** Ürün id belirterek satın alırsınız.
> **» ${process.env.prefix} seviye :** Seviyenize bakarsınız.
> **» ${process.env.prefix} çalış :**  24 saat boyunca çalışırsınız.
> **» ${process.env.prefix} günlük :** Günlük para alırsınız
> **» ${process.env.prefix} para-bak :** Etiketlediğiniz kişinin parasına bakarsınız
> **» ${process.env.prefix} seviye-bak :** Etiketlediğiniz kişinin seviyesine bakarsınız
> **» ${process.env.prefix} gönder :** Etiketlediğiniz kişiye para gönderirsiniz

**Linkler ->** **[Destek Sunucusu](${ayarlar.destekSunucusuDavetLinki})** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)**`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(nobles)
.then;

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım-market', 
    description: 'The Help Command',
    usage: 'help'
};