
const Discord = require('discord.js');
exports.run = (client, message, args) => {
      let user = message.mentions.users.first();
if(!user) return message.channel.send(`birini etiketlemelisin`) 

var tokat =  "https://i.imgur.com/fm49srQ.gif" 
   
    const nightcode =new Discord.MessageEmbed()
    .setColor("RANDOM")
.setDescription(`**${message.author} Adlı Kişi\n ${user} Adlı Kişiyi Tokatladı!**`)
    .setImage(tokat)
    message.channel.send(nightcode);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['tokat-at','tokatat'],
  permLevel: 0
};

exports.help = {
  name: 'tokat',
  description: 'Belirtilen kişiyi Tokatlar!',
  usage: 'tokat'
};