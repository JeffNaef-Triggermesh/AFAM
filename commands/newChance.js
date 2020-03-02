module.exports = {
	name: '!newchance',
	description: 'give user a new chance at an open mic....',
	execute(msg, args, bot) {

        if (msg.mentions.users.size){
            const taggedUser = msg.mentions.members.first();
          //console.log(msg.member.voiceChannelID);
            let vc = bot.channels.get(msg.member.voiceChannelID);
          
            vc.overwritePermissions(taggedUser, {
          USE_VAD : true });
        msg.channel.send(taggedUser +" has now ben relieved of the PPT bug")
       
    }else {
        msg.reply('Please tag a valid user using the @ sign')
        }


	},
};
