require('dotenv').config();
const axios = require('axios');
var Twitter =  require('twitter');
var config = require('./config');
const Discord = require('discord.js');
const bot = new Discord.Client();
const { init, addUser, getUser, updateAccount,updatePostedTwitterCol, searchPostedTweets, searchWSPosts, updatePostedWS  } = require('./db')
init();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');
const TOKEN = process.env.TOKEN;

var T = new Twitter(config);

Object.keys(botCommands).map(key => {
    bot.commands.set(botCommands[key].name, botCommands[key]);
});


bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
    monitorGeneralChannel();
   monitorTwitter();
   testWS();
    
});

bot.on('message', msg => {
    const args = msg.content.split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (!bot.commands.has(command)){
       
        getUser(msg.member.user.username)
        .then(data => {
           
           if(data != null){
         
            const {_id, Account} = data;
           
          
           let newAccountTotal = Account + 10;
          
   
           addPoints(_id, newAccountTotal )
           console.log("10 points have been added to " + msg.member.user.username + " for being active in chat");
           }else{
               addUser(msg.member.user.username);
           }
            })
            .catch(err => console.error(err))

    return;} 
    console.info(`Called command: ${command}`);
    try {
        bot.commands.get(command).execute(msg, args, bot);
    } catch (error) {
        console.error(error);
        msg.reply('there was an error trying to execute that command!');
    }
});

   function monitorGeneralChannel(){
   
       // console.log();
       const vc = bot.channels.get('502494364283568143'); //currently just monitors the VC in my discord will update to diversify later
       
       vc.members.forEach(function(guildMember,guildMemberId){
          
           if(guildMemberId != null){
                  
           getUser(guildMember.user.username)
           .then(data => {
              if(data != null){
              // console.log( data ) 
              
               const {_id, Account} = data;
              //console.log(_id);
             
              let newAccountTotal = Account + 10;
               //console.log(newAccountTotal);
   
              addPoints(_id, newAccountTotal )
              }else{
                  addUser(guildMember.user.username);
              }
               object = data})
               .catch(err => console.error(err))
          
           console.log("10 points have been added to " + guildMember.user.username);
           
           }
       });
   
      }
     
      
    function monitorTwitter(){
    //testing twitter bot

    var params = {screen_name: 'playapex'};
T.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    //console.log(tweets);
    tweets.map((tweet)=>{
    const {created_at, user : {screen_name}, text, id} = tweet
    
    //date tweet was created
    var nd = new Date(created_at)
      
    
    const todaysDate = new Date()


    let c = new Discord.Channel;
    c = bot.channels.get('674197719736123392') // for Blicky apex updates

        //console.log(id);
      
   
       
        searchPostedTweets(id).then(data =>{
            if(data == null)
            {
            
            if(tweet != null)
            {
                var str = text.toString();
               
                if(!str.startsWith("@") && !str.startsWith("RT")){
                    //console.log("msg: ")
                    //console.log(text);
                       c.send(text); 
                       updatePostedTwitterCol(id);
                }
                
                
            }

            }else 
            {
    
                
            }
            }).catch(err => console.error(err))
        
  
    });

  }
})


};

    function testWS(){

    }

    function monitorWorldStar(){
        


axios.get('https://www.worldstarhiphop.com/videos/').then(resp => {

  var start = resp.data.search("TODAY'S <mark>VIDEOS")
    console.log(start)

    var end = resp.data.search("SUBMIT YOUR VIDEO")
    console.log(end)

    var data = resp.data.substring(17571,37075)

  var dataArray = data.split("div")

  dataArray.map( divs => {
      
    var start1 = divs.search("href")
      
      var substr = divs.substring(start1 , divs.length)

      var end1 = divs.search("\"")
      
      var url = substr.substring(start1,end1)

    var matches = substr.match(/\bhttps?::\/\/\S+/gi) || divs.match(/\bhttps?:\/\/\S+/gi);
    matches.map(match =>{
       let url = match.search("/videos")
       if ( url > 1) {
           console.log(match)

           // need to plug check if these have been posted and then post them into the worldstar channel. 
       }
    })
} )

});
    }

    function addPoints(id, points){
       updateAccount(id, points);
       
   }
    setInterval(function() {
             monitorGeneralChannel();
       }, 7000);  
    
    setInterval(function() {
        monitorTwitter();
  }, 11600000 );  
