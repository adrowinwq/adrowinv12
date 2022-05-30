const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let replies = [ "https://giffiles.alphacoders.com/150/15011.gif", "https://giffiles.alphacoders.com/339/33944.gif","https://giffiles.alphacoders.com/132/13267.gif","https://giffiles.alphacoders.com/253/2535.gif","https://giffiles.alphacoders.com/395/3951.gif","https://giffiles.alphacoders.com/140/14018.gif","https://giffiles.alphacoders.com/252/2521.gif","https://giffiles.alphacoders.com/207/207838.gif","https://giffiles.alphacoders.com/132/13246.gif","https://giffiles.alphacoders.com/262/26214.gif","https://giffiles.alphacoders.com/158/15806.gif","https://giffiles.alphacoders.com/354/35498.gif","https://giffiles.alphacoders.com/350/35060.gif","https://giffiles.alphacoders.com/362/3621.gif","https://giffiles.alphacoders.com/206/2069.gif","https://giffiles.alphacoders.com/207/2073.gif","https://giffiles.alphacoders.com/207/2079.gif","https://giffiles.alphacoders.com/133/13320.gif","https://giffiles.alphacoders.com/133/13364.gif","https://giffiles.alphacoders.com/214/214088.gif","https://giffiles.alphacoders.com/834/8340.gif","https://giffiles.alphacoders.com/348/34853.gif","https://giffiles.alphacoders.com/483/48379.gif","https://giffiles.alphacoders.com/106/10626.gif","https://giffiles.alphacoders.com/132/13249.gif","https://giffiles.alphacoders.com/132/13251.gif","https://giffiles.alphacoders.com/132/13252.gif","https://giffiles.alphacoders.com/132/13254.gif","https://giffiles.alphacoders.com/207/207767.gif","https://giffiles.alphacoders.com/241/2411.gif","https://giffiles.alphacoders.com/243/2437.gif","https://thumbs.gfycat.com/CleverSaneAfricanmolesnake.webp"]
    let result = Math.floor((Math.random() * replies.length));
    
    let gifembed = new Discord.MessageEmbed().setTitle("Gifiniz").setColor("RANDOM").setImage(replies[result]);
    
    message.channel.send(gifembed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [ 'gif' ],
    permLevel: 0
};

exports.help = {
    name: 'gif',
    description: 'Rastgele gif atar.',
    usage: 'gif'
};