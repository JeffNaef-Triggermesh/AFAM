module.exports = {
	name: '!help',
	description: 'returns a list of avalible commands',
	execute(msg, args) {
        
        
        msg.reply("current commands:!account, !kick @user, !mute @user, !priority @user !ppt @user, !newChance @user.")
        //msg.reply("please note that !mute, and !unmute are currently in testing... so might work... might not lol")


	},
};
