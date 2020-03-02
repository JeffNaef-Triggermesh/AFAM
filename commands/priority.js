///needs testing

module.exports = {
	name: '!priority',
	description: 'sets the requesting user to priority speaker',
	execute(msg, args, bot) {

   //const taggedUser = msg.mentions.members.first();
   
    
    // let vc = bot.channels.get(msg.member.voiceChannelID);
    // vc.overwritePermissions(msg.author, {
    // PPRIORITY_SPEAKER : true });
    // msg.channel.send(msg.author +" is now a priority speaker")

    //changed to interact with user accounts

    if (msg.mentions.users.size)
    {
  
        const taggedUser = msg.mentions.members.first();
  
        let vc = bot.channels.get(msg.member.voiceChannelID);
       

        if (msg.mentions.users.size) 
        {
       
            const taggedUser = msg.mentions.members.first();

            getUser(msg.member.user.username)
            .then(data => {
               
               if(data != null){
             
                const {_id, Account} = data;
               
                if (Account > 1000)
                {
                   
                const taggedUser = msg.mentions.members.first();
                
                let vc = bot.channels.get(msg.member.voiceChannelID);
                
                vc.overwritePermissions(msg.author, {
               
                           PPRIORITY_SPEAKER : true });
                
                msg.channel.send(msg.author +" is now a priority speaker")
                
                let newBallace = Account - 1000
                
                updateAccount(_id, newBallace)     
                
                msg.channel.send('Your new account ballance is: ' + newBallace)
                   
                }else
                    {
                    
                    msg.channel.send('Innsuficent channel points. 1000 required... try harder')

                    }

            }else{
                  
                addUser(msg.member.user.username);
               
                }})
                .catch(err => console.error(err))
        } else
                {
                    msg.reply("please tag a valid user. Remeber to use @")
                }
    }else
    {
        msg.reply('Please tag a valid user using the @ sign')
    }





 // NEED TO TEST
  

	},
};
