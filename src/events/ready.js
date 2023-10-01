const { ActivityType, Events } = require("discord.js");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute: async (client) => {
    const rest = new REST({ version: "10" }).setToken(client.token);
    const activities = [`Developed by Hanif`, `${client.user.username}`];
    let nowActivity = 0;
    function botPresence() {
      client.user.presence.set({ activities: [{ name: `${activities[nowActivity++ % activities.length]}`, type: ActivityType.Listening }] });
      setTimeout(botPresence, 300000);
    }
    botPresence();

    client.log(`${client.user.username} Diaktifkan!`);
    //
    try {
      await rest.put(Routes.applicationCommands(client.user.id), {
        body: client.slashdatas,
      });
    } catch (error) {
      console.error(error);
    }
  },
};
