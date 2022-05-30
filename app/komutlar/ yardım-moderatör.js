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
      `__sohbetaç__`,
      ` 🚩  \`${prefix}sohbetaç\` Sohbet kanalının kilidini açarsınız.`,
      true
    )
    .addField(
      `__sohbetkapat__`,
      ` 🚩  \`${prefix}sohbetkapat\` Sohbet kanalını kitlersiniz.`,
      true
    )
    .addField(
      `__çekiliş__`,
      ` 🚩  \`${prefix}çekiliş\` +çekiliş yazarak çekiliş menüsü açabilirsiniz.`,
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
  name: "yardım-moderatör",
  description: "Genel Menüsü",
  usage: "genel"
};
