const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder().setName("ping").setDescription("Pong!"),
  // jika Anda ingin meningkatkan perintah, panduan: https://discordjs.guide/slash-commands/advanced-creation.html
  run: async (client, interaction) => {
    interaction.reply(`Pong 🏓`);
  },
};
