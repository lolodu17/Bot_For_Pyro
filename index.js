const Discord = require('discord.js')
const bot = new Discord.Client()
const client = new Discord.Client()
var http = require('http');
const content = new Discord.Client()
const fs = require("fs");
const ffmpeg = require ('ffmpeg')
const yt = require('ytdl-core');
con = console.log,

bot.on("ready", function () {
 
  setInterval(function() {
        let randomNumber = Math.floor(Math.random() * 37) + 1;
        switch (randomNumber) {
            case 1:
                bot.user.setGame("!commande|Regarder des manga");
                break;
            case 2:
                bot.user.setGame("!commande|Regarder vous dessins");
                break;
            case 3:
                bot.user.setGame("!commande|Me faire coder");
                break;
            case 4:
                bot.user.setGame("!commande|I'm not speak english");
                break;
            case 5:
                bot.user.setGame("!commande|Splatoon c'est nul");
                break;
            case 6:
                bot.user.setGame("!commande|Fornite c'est bien");
                break;
            case 7:
                bot.user.setGame("!commande|J'aime dbz !");
                break;
            case 8:
                bot.user.setGame("!commande|NANI !?");
                break;

        }
   
    }, 9999999);
    setInterval(function() {
        let rndNumber = Math.floor(Math.random() * 8) + 1;
        switch (rndNumber) {
          case 1:
                bot.user.setUsername("Jiren™")
                break;
          case 2:
                bot.user.setUsername("Jiren 0.01™")
                break;                     
        }
    }, 999999);
  bot.user.setUsername("Jiren™")
.then(user => console.log(`j'ai choisis mon avatar`))
    
    bot.on("message", message =>{
 
  if (message.content.startsWith(`!contact ${message}`)) {
 try{
 let User = message.guild.member(message.mentions.users.first() || message.guild.members.get);
if(!User) return message.channel.send("Impossible de trouver l'utilisateur !");
var emb = new Discord.RichEmbed()
 
.setFooter(`© Jiren est tous droits réservés et Créé par The Octokling`, bot.user.avatarURL)
  
.setColor("730000")
.setTitle("Quelqu'un vous as envoyez un message !:")
.setDescription(`Message de ${message.author.tag} : ${message} .`)
message.guild.member(User).send(emb);
 }catch(err) {
            message.channel.send("Une erreur c'est produite lors de l'envoie du message ou l'utilisateur n'est pas dans le ce serveur, veuilliez en parlez à The Octokling si le problème persiste. Merci")
        }
}
  })
bot.login(process.env.TOKEN)
