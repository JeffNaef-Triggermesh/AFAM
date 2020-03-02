module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(msg, args) {

		const voiceChannel = msg.member.voiceChannelID;
		const chatchannel = msg.channel;
		msg.reply('pong VCID: ' + voiceChannel);
		msg.channel.send("chat channel " +	 chatchannel.id)
        msg.channel.send('pong');
	},
};
