const Discord = require("discord.js");
exports.run = (client, message, args, tools) => {
      let idler = ['628955894809624586', 'ID']
  if (message.author.bot || message.channel.type === "dm") return;

  var gifler = [
    "https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-24.gif",
    "https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-5.gif",
    "https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-1.gif",
    "https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-7.gif",
    "https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-9.gif",
    "https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-18.gif",
    "https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-10.gif",
    "https://images-ext-1.discordapp.net/external/zctZHAmYiWjXQ2iZkW26YgiQRybJZcwptMSTEk70loY/https/i.pinimg.com/originals/58/3e/0e/583e0e1939f211f7cc9dd115f2ae216d.gif",
    "https://images-ext-2.discordapp.net/external/lahGy5ODym3h6vn_aKQJb1mBhS7umLd1lbUykQAexFg/https/aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-35.gif",
    
    
  ];
  let resimler = gifler[Math.floor(Math.random() * gifler.length)];
  var kullanıcı = message.guild.member(
    message.mentions.users.first() || message.guild.members.cache.get(args[0])
  );
  if (!kullanıcı) {
    const buyEmb = new Discord.MessageEmbed()
      .setDescription(`\`${message.author.username}#${message.author.discriminator}\` birini etiketlemelisin.`);
    message.channel.send({ embed: buyEmb });
    return;
  }
  if (
    !message.mentions.members.first().user.username ===
    message.mentions.has(message.author)
  ) {
    const candyEmb = new Discord.MessageEmbed()
      .setDescription(
        `\`${message.mentions.members.first().user.username}#${message.mentions.members.first().user.discriminator}\` , \`${message.author.username}#${message.author.discriminator}\` tarafından öpüldün.`
      )
      .setImage(resimler);
    message.channel.send({ embed: candyEmb });
    return;
  }
  if (message.author.id === kullanıcı.id) {
    const candyEmb = new Discord.MessageEmbed()
      .setTitle(`Kendini öpecek kadar yalnız mısın? 😟`)
      .setImage(resimler);
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
  name: "öp",
  description: "istediğiniz kişiyi öper!.",
  usage: "öp [isim]"
};