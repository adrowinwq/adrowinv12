const Discord = require("discord.js");
exports.run = (client, message, args, tools) => {
      let idler = ['628955894809624586', 'ID']
  if (message.author.bot || message.channel.type === "dm") return;

  var gifler = [
    "https://images-ext-1.discordapp.net/external/N5Qcy8cQpbGUjS6XBeDm8j59wPLtLM498YPcBiN8DWU/https/media1.giphy.com/media/FdinyvXRa8zekBkcdK/giphy.gif",
    "https://images-ext-1.discordapp.net/external/oOW6_8XMyqDMmIKToG7iWHFMbc1XXJ2FAeWoaCXGEXs/https/i.gifer.com/SKql.gif",
    "https://images-ext-2.discordapp.net/external/DneW30LF4-FXDeBwbhvensBQL0aM-AoeNv18X4Cky4w/https/thumbs.gfycat.com/EnlightenedInferiorAfricanaugurbuzzard-size_restricted.gif",
    "https://images-ext-1.discordapp.net/external/3VUv6rzgxWR35AaaZ6jCVd63yj20RS72_bGr7gKVTZ4/https/i.pinimg.com/originals/b4/95/fb/b495fb19f4b9a1b04f48297b676c497b.gif"
   
                                                                                                                           
    
  ];
  let resimler = gifler[Math.floor(Math.random() * gifler.length)];
  var kullanıcı = message.guild.member(
    message.mentions.users.first() || message.guild.members.cache.get(args[0])
  );
  if (!kullanıcı) {
    const buyEmb = new Discord.MessageEmbed()
      .setDescription(`\`${message.author.username}#${message.author.discriminator}\` Ş-şey birini etiketlemelisin.`);
    message.channel.send({ embed: buyEmb });
    return;
  }
  if (
    !message.mentions.members.first().user.username ===
    message.mentions.has(message.author)
  ) {
    const candyEmb = new Discord.MessageEmbed()
      .setDescription(
        `\`${message.mentions.members.first().user.username}#${message.mentions.members.first().user.discriminator}\` , \`${message.author.username}#${message.author.discriminator}\` tarafından dürtüldün.`
      )
      .setImage(resimler);
    message.channel.send({ embed: candyEmb });
    return;
  }
  if (message.author.id === kullanıcı.id) {
    const candyEmb = new Discord.MessageEmbed()
      .setTitle(`Kendini dürtemezsin 😟`)
      .setImage();
    message.channel.send({ embed: candyEmb });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "dürt",
  description: "istediğiniz kişiyi dürter!.",
  usage: "dürt [isim]"
};