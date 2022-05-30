const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');

module.exports = client => {
  var degisenOynuyor = [
    
    "prefix = +yardım",
    "Shimoriya Blox Fruit",
    "adrowin adlı kullanıcının eğlence botudur"
    
  ]
  
  setInterval(function() {
    var degisenOynuyor1 = degisenOynuyor[Math.floor(Math.random() * (degisenOynuyor.length))]
    client.user.setActivity(`${degisenOynuyor1}`);

}, 2 * 30000);
  
  client.user.setStatus("idle"); //dnd, idle, online, offline
  
}