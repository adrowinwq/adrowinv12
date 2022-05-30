const Discord = require("discord.js");

exports.run = async (client, message) => {
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

  const botbilgi = new Discord.MessageEmbed()
    .setAuthor(`Shimoriya Blox Fruit`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/823592301796392960/826048182990667806/standard_2.gif"    )
    .setDescription(
      `📯 Shimoriya Blox Fruit botumuzu Eklemek İçin \adrowine\` yazabilirsiniz.`
    )
    .addField(
      "__**Bot Verileri**__",
      `📗 **Toplam Sunucu** **|**  \`${
        client.guilds.cache.size
      }\` \n 📗 **Toplam Kullanıcı** **|** \`${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}\` \n 📗 **Toplam Kanal** **|** \`${
        client.channels.cache.size
      }\``
    )
    .addField(
      "__**Yetkili Bilgi**__",
      "👑 **Sunucu Sahipleri**  <@791703770160955432> \n\n"
    )
    .addField(
      "__**Sürümler**__",
      `🥽 **Discord.js Sürümü** **|**  \`v${Discord.version}\` \n 🦺  **Node.js Sürümü** **|**  \`${process.version}\``
    )
    .addField(
      "__**Gecikmeler**__",
      `🩱 \`${client.ws.ping}\` **MS**`,
      true
    )
  
  return message.channel.send(botbilgi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "botbilgi",
  description: "",
  usage: ""
};