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
      `__bahis__`,
      ` 🚩  \`${prefix}bahis\` Bahis oynarsınız.`,
      true
    )
   .addField(
      `__cüzdan__`,
      ` 🚩  \`${prefix}cüzdan\` Parana bakarsın.`,
      true
    )
    .addField(
      `__parası__`,
      ` 🚩  \`${prefix}parası\` Herhangi bir kullanıcının parasına bakarsın.`,
      true
    )
    .addField(
      `__envanter__`,
      ` 🚩  \`${prefix}envanter\` Envaterinize bakarsınız.`,
    )
    .addField(
      `__içerik__`,
      ` 🚩   \`${prefix}içerik\` İçerikler hakkında bilgi alırsınız.`,
      true
    )
   .addField(
      `__market__`,
      ` 🚩   \`${prefix}market\` Ürünlerin ücretini görürsünüz.`,
      true
    )
   .addField(
      `__satın-al__`,
      ` 🚩   \`${prefix}satın-al\` Ürün id belirterek satın alırsınız.`,
      true
    )
   .addField(
      `__seviye__`,
      ` 🚩   \`${prefix}seviye\` seviyenize bakarsınız.`,
      true
    )
   .addField(
      `__çalış__`,
      ` 🚩   \`${prefix}çalış\` 24 saat boyunca çalışırsınız.`,
      true
    )
   .addField(
      `__günlük__`,
      ` 🚩   \`${prefix}günlük\` Günlük para alırsınız.`,
      true
    )
   .addField(
      `__para-bak__`,
      ` 🚩   \`${prefix}para-bak\` Etiketlediğiniz kişinin parasına bakarsınız.`,
      true
    )
   .addField(
      `__seviye-bak__`,
      ` 🚩   \`${prefix}çalış\` Etiketlediğiniz kişinin seviyesine bakarsınız.`,
      true
    )
   .addField(
      `__gönder__`,
      ` 🚩   \`${prefix}gönder\` Etiketlediğiniz kişiye para gönderirsiniz.`,
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
  name: "yardım-market",
  description: "Genel Menüsü",
  usage: "genel"
};
