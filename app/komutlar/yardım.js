const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const embedgenel = new Discord.MessageEmbed()
    .setAuthor(`Shimoriya Blox fruit`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
    "https://giffiles.alphacoders.com/354/35458.gif"
    )
    .addField(
      `__yardım-moderatör__`,
      ` 🚩  \`${prefix}yardım-moderatör\` Botun moderatör komutlarını görürsünüz.`,
      true
    )
   .addField(
      `__yardım-market__`,
      ` 🚩  \`${prefix}yardım-market\` Botun market komutlarını görürsünüz.`,
      true
    )
    .addField(
      `__yardım-genel__`,
      ` 🚩  \`${prefix}yardım-genel\` Botun genel komutlarını görürsünüz.`,
      true
    )
    .addField(
      `__yardım-eğlence__`,
      ` 🚩  \`${prefix}yardım-eğlence\` Botun eğlence komutlarını görürsünüz.`,
    )
    .addField(
      `__yardım-eğlence2__`,
      ` 🚩   \`${prefix}yardım-eğlence2\`  Botun eğlence komutlarını görürsünüz.`,
      true
    )
  return message.channel.send(embedgenel);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Genel Menüsü",
  usage: "genel"
};
