require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.BOT_API_TOKEN,{polling:true});
bot.on('message',(msg)=>{
    console.log(msg);
    bot.sendMessage(msg.chat.id,"This bot is under development 🚧👷‍♂️");
});
