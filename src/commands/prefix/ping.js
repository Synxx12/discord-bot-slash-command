const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "ping",
  aliases: ["pong"],
  cooldown: 5000, //Jika tidak ingin 1 detik = 1000 ms / cooldown, ketik 0.
  run: async (client, message, args) => {
    message.reply(`Pong 🏓`);
  },
};
