const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});



client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('501083193349373992');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Voice Online [ ${currentSize} ]`);
  if (currentSize !== size) channel.setName(`Voice Online [ ${currentSize} ]`);
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
