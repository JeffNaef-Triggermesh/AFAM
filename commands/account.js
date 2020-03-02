const {addUser,getUser} = require('../db')

module.exports = {
	name: '!account',
	description: 'returns requesting user account value',
	execute(msg, args) {
        
        
        

getUser(msg.member.user.username)
.then(data => {
   
   if(data != null){
 
    const {_id, Account, Username} = data;
   
    msg.channel.send('The Current Account Ballance For: ' + Username + ' is ' + Account);

   }else{
    msg.channel.send('no user data found.. creating one now')
    addUser(msg.member.user.username);
   }
    object = data})
    .catch(err => console.error(err))



	},
};




