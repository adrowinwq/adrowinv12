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
      `__adamasmaca__`,
      ` 🚩  \`${prefix}adamasmaca\` Adam asmaca oynarsınız.`,
      true
    )
   .addField(
      `__gay__`,
      ` 🚩  \`${prefix}gay\` Etiketlediğiniz Kişinin Gaylik Düzeyini Öğrenirsiniz.`,
      true
    )
    .addField(
      `__yılbaşı__`,
      ` 🚩  \`${prefix}yılbaşıı\` Yılbaşı sayar.`,
      true
    )
    .addField(
      `__kaçcm__`,
      ` 🚩  \`${prefix}kaçcm\` .d:).`,
    )
    .addField(
      `__kimlik__`,
      ` 🚩   \`${prefix}kimlik\` Rastgele Kimlik Oluşturursunuz.`,
      true
    )
   .addField(
      `__tkm__`,
      ` 🚩   \`${prefix}tkm\` Bot ile taş kağıt makas oynarsınız.`,
      true
    )
   .addField(
      `__balık-tut__`,
      ` 🚩   \`${prefix}balık-tut\` Bot ile balık tutarsınız.`,
      true
    )
   .addField(
      `__trump__`,
      ` 🚩   \`${prefix}seviye\` Trump tweet atar.`,
      true
    )
   .addField(
      `__evlenme-teklifi__`,
      ` 🚩   \`${prefix}evlenme-teklifi\` Evlenme teklifi edersiniz.`,
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
  name: "yardım-eğlence",
  description: "Genel Menüsü",
  usage: "genel"
};
