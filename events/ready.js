module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("Music You Noobs", {
    type: "STREAMING",//can be LISTENING, WATCHING, PLAYING, STREAMING
    url: "https://www.twitch.tv/nocopyrightsounds"
  });
};
