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
      `__öneri-şikayet__`,
      ` 🚩  \`öneri-şikayet\`  Bota dm üzerinden mesaj atarak öneri veya şikayetinizi belirtebilirsiniz.`,
      true
    )
    .addField(
      `__müzik__`,
      ` 🚩  \`${prefix}müzik\`  komutu kullanarak istediğiniz müziği açarsınız.`,
      true
    )
   .addField(
      `__stat__`,
      ` 🚩  \`${prefix}stat\`  Komutu kullanan veya etiketlenen kişinin stat bilgisini gösterir.`,
      true
    )
   .addField(
      `__top__`,
      ` 🚩  \`${prefix}top\`  En çok mesaj ve ses aktifliği olan ilk 15 kişiyi gösterir.`,
      true
    )
   .addField(
      `__mesaj__`,
      ` 🚩  \`${prefix}mesaj\`  En çok mesaj aktifliği olan ilk 15 kişiyi gösterir.`,
      true
    )
   .addField(
      `__ses__`,
      ` 🚩  \`${prefix}ses\`  En çok ses aktifliği olan ilk 15 kişiyi gösterir.`,
      true
    )
   .addField(
      `__destek__`,
      ` 🚩  destek  #destek kanalına giderek destek oluşturabilirsiniz.`,
      true
    )
   .addField(
      `__başvur__`,
      ` 🚩  \`${prefix}başvur\` / Sunucuda yetkili olmak için başvuru yaparsınız.`,
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
  name: "yardım-genel",
  description: "Genel Menüsü",
  usage: "genel"
};