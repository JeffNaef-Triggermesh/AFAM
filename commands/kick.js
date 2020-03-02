const {addUser, updateAccount, getUser } = require('../db')

module.exports = {
	name: '!kick',
	description: 'Kick!',
	execute(msg, args) {
        console.log("kick")
        if (msg.mentions.users.size) {
           
            const taggedUser = msg.mentions.members.first();

            getUser(msg.member.user.username)
            .then(data => {
               
               if(data != null){
             
                const {_id, Account} = data;
               
                if (Account > 1000){
                   
                    taggedUser.kick().then((taggedUser) => {
                        msg.channel.send(`You have kicked: ${taggedUser}`)
                   
                    })
                   
                    let newBallace = Account - 1000
                    updateAccount(_id, newBallace)     
                    msg.channel.send('Your new account ballance is: ' + newBallace)
                   
                }else{
                    
                    msg.channel.send('Innsuficent channel points. 1000 required... try harder')

               }

            }else{
                  
                addUser(msg.member.user.username);
               
                }})
                .catch(err => console.error(err))} else{
                    msg.reply("please tag a valid user. Remeber to use @")
                }
                


	},
};
