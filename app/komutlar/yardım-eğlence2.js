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
      `__duello__`,
      ` 🚩  \`${prefix}aduello\` Etiketlediğiniz kişi ile duzello atarsınız.`,
      true
    )
   .addField(
      `__tersyazı__`,
      ` 🚩  \`${prefix}tersyazı\` Gönderdiğiniz mesajın ters çevrilmiş halini yazar.`,
      true
    )
    .addField(
      `__ağla__`,
      ` 🚩  \`${prefix}ağla\` Botu Ağlatırsınız.`,
      true
    )
    .addField(
      `_sarıl__`,
      ` 🚩  \`${prefix}sarıl\` Etiketlediğiniz kişiye sarılırsınız.`,
    )
    .addField(
      `__animeyazı__`,
      ` 🚩   \`${prefix}animeyazı\` Yazdığınız yazıyı animeyazıya çevirir.`,
      true
    )
   .addField(
      `__afiş__`,
      ` 🚩   \`${prefix}afiş\` Etiketlediğiniz kişinin afişini gösterir.`,
      true
    )
   .addField(
      `__avatar__`,
      ` 🚩   \`${prefix}avatar\`  Etiketlediğiniz kişinin veya komutu yazan kişinin avatarını atar`,
      true
    )
   .addField(
      `__tokat__`,
      ` 🚩   \`${prefix}tokat\` Etiketlediğiniz kişiye tokat atarsınız.`,
      true
    )
   .addField(
      `__öldür__`,
      ` 🚩   \`${prefix}öldür\` Etiketlediğiniz kişiyi öl`,
      true
    )
   .addField(
      `__gif__`,
      ` 🚩   \`${prefix}gif\` Rastgele anime gifi verir.`,
      true
    )
   .addField(
      `__yazı-tura__`,
      ` 🚩   \`${prefix}yazı-tura\` Yazımı-Turamı?.`,
      true
    )
   .addField(
      `__öp__`,
      ` 🚩   \`${prefix}öp\` Birini Öpersin..`,
      true
    )
   .addField(
      `__espri__`,
      ` 🚩   \`${prefix}espri\` Bot espri yapar..`,
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
  name: "yardım-eğlence2",
  description: "Genel Menüsü",
  usage: "genel"
};
