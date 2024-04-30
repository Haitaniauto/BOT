const axios = require('axios');
module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['gpt', 'openai'],
  description: "An AI command powered by GPT-4",
  usage: "Ai [promot]",
  credits: 'Developer',
  cooldown: 3,
};
module.exports.run = async function({
  api,
  event,
  args
}) {
  const input = args.join(' ');
  if (!input) {
    api.sendMessage(`𝙷𝙸.. 👋.. 𝙸 𝙷𝙰𝚅𝙴 𝙱𝙴𝙴𝙽 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙿𝙴𝙳 𝙱𝚈 𝙷𝙰𝙸𝚃𝙰𝙽𝙸く命 ✨🥀... 𝙸𝙵 𝚈𝙾𝚄 𝙷𝙰𝚅𝙴 𝙰𝙽𝚈 𝚀𝚄𝙴𝚂𝚃𝙸𝙾𝙽 𝙸'𝙼 𝙷𝙴𝚁𝙴 𝙵𝙾𝚁 𝚈𝙾𝚄.. ✨🪶🩷'`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(`🔍 "𝙰𝙽𝚂𝚆𝙴𝚁𝙸𝙽𝙶 𝙿𝙻𝙴𝙰𝚂𝙴 𝚆𝙰𝙸𝚃.. ✨😊"`, event.threadID, event.messageID);
  try {
    const {
      data
    } = await axios.get(`https://soyeon-gpt4.onrender.com/api?prompt=${encodeURIComponent(input)}`);
    const response = data.response;
    api.sendMessage(response + '\n\nhttps://bit.ly/create-chatbot-me', event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while processing your request.', event.threadID, event.messageID);
  }
};
