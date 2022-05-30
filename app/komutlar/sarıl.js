const Discord = require("discord.js");
exports.run = (client, message, args, tools) => {
      let idler = ['628955894809624586', 'ID']
  if (message.author.bot || message.channel.type === "dm") return;

  var gifler = [
    "https://acegif.com/wp-content/gif/anime-hug-38.gif",
    "https://acegif.com/wp-content/gif/anime-hug-79.gif",
    "https://acegif.com/wp-content/gif/anime-hug-73.gif",
    "https://acegif.com/wp-content/gif/anime-hug-13.gif",
    "https://acegif.com/wp-content/gif/anime-hug-13.gif"
    
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
        `\`${message.mentions.members.first().user.username}#${message.mentions.members.first().user.discriminator}\` , \`${message.author.username}#${message.author.discriminator}\` sana sarıldı.`
      )
      .setImage(resimler);
    message.channel.send({ embed: candyEmb });
    return;
  }
  if (message.author.id === kullanıcı.id) {
    const candyEmb = new Discord.MessageEmbed()
      .setTitle(`Kendine sarılamaszın? 😟`)
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
  name: "sarıl",
  description: "istediğiniz kişiyi öper!.",
  usage: "öp [isim]"
};