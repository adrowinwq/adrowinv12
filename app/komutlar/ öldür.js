const Discord = require("discord.js");
exports.run = (client, message, args, tools) => {
      let idler = ['628955894809624586', 'ID']
  if (message.author.bot || message.channel.type === "dm") return;

  var gifler = [
    "https://images-ext-2.discordapp.net/external/G8Xq6rYz3whDZs1KJCVSlYrAcH6yriF4RvZ-smZLDDQ/https/c.tenor.com/USm7aelv_eIAAAAC/school-days-blood.gif",
    "https://images-ext-1.discordapp.net/external/V470M5DpEemSWmzWtwyd3oo2l2WmIyZiVci_xJiOiYc/https/pa1.narvii.com/6316/cc6b64cd7da13a676643d8b92486dfb6a82c026b_hq.gif"
    
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
        `\`${message.mentions.members.first().user.username}#${message.mentions.members.first().user.discriminator}\` seni, \`${message.author.username}#${message.author.discriminator}\` öldürdü.`
      )
      .setImage(resimler);
    message.channel.send({ embed: candyEmb });
    return;
  }
  if (message.author.id === kullanıcı.id) {
    const candyEmb = new Discord.MessageEmbed()
      .setTitle(`Kendini öldürecek kadar yalnız mısın? 😟`)
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
  name: "öldür",
  description: "istediğiniz kişiyi öldürür!.",
  usage: "öldür [isim]"
};