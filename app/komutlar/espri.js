const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send(':thinking:  Hemen Yazıyorum... :stuck_out_tongue_winking_eye: ').then(message => {
   var espriler = [' **İnsanların seni ezmesine izin verme; Ehliyet al, sen onları ez... ** ' ,' **Kim vurduya gittim birazdan gelecem... ** ' ,' **Haydi Unkapanı’na gidip birkaç kapan kuralım. Belki un yakalarız ** ' ,' **Röntgen Filmi çektirdik, yakında sinemalarda ** ' ,' **Geçen gün taksi çevirdim hala dönüyor ** ' ,' **Türkiye’nin en yeni şehri – Nevşehir ** ' ,' **Geçen ‘fil’e çorap aldım, zürafaya almadım ** ' ,' **Adamın biri gülmüş, saksıya koymuşlar ** ' ,' **Adamın kafası atmış bacakları eşek ** ' ,' **Seven unutmaz oğlum, eight unutur ** '];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espri', 'espiri'],
  permLevel: 0
};

exports.help = {
  name: 'espri',
  description: 'Espri Yapar',
  usage: 'espri'
};