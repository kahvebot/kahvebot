var bot = new Eris("tokenini buraya gir mork aman ha çalacam S J");
bot.on("ready", () => {
    console.log("TRnin en güzel botu aktif!");
});
bot.on("messageCreate", (msg) => {
    if(msg.content === "!ping") {
        bot.createMessage(msg.channel.id, "Pong!");
    }
    if(msg.content.toLowerCase() == "sa") {
    bot.createMessage(msg.channel.id, "Aleyküm selam!");
    }
    /*
    if(msg.content == "SA") {
    bot.createMessage(msg.channel.id, "Aleyküm selam!");
    }
    if(msg.content == "sA") {
    bot.createMessage(msg.channel.id, "Aleyküm selam!");
    }
    if(msg.content == "Sa") {
    bot.createMessage(msg.channel.id, "Aleyküm selam!");
    }*/
    if(msg.content == "k!sik") {
    bot.createMessage(msg.channel.id, "https://www.youtube.com/watch?v=gpY1RW2yxLw&ab_channel=mustafakahraman");
    }
    if(msg.content == "k!kaçcm") {
    bot.createMessage(msg.channel.id, "Sana kaç inç lazım reis HUHUA AMINA");
    }
    if(msg.content == "k!tokat-at") {
    bot.createMessage(msg.channel.id, "https://media1.tenor.com/images/b980428d9ab96cc24e690ec9b00a783f/tenor.gif");
    }
    
    
});
bot.connect();
