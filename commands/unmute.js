module.exports = {
	name: '!unmute',
	description: '...unmutes.... ',
	execute(msg, args, bot) {

    
         
        if (msg.mentions.users.size)
        {
            const taggedUser = msg.mentions.members.first();
            let vc = bot.channels.get(msg.member.voiceChannelID);
          vc.overwritePermissions(taggedUser, {
          SPEAK : true });
        msg.channel.send(taggedUser +" is now free of mute")
    
        }else {
            msg.reply('Please tag a valid user using the @ sign')
        }




	},
};
