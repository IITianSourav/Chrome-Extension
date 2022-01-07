$(function(){
    chrome.storage.local.get(['username'], function(timer){
        console.log(timer.username);})

   
    $('#btn1').click(function(){
       
        chrome.storage.local.get(['timesec','username','selectTime'], function(Timer){
            var newusername=$('#username').val();
             
            chrome.storage.local.set({'username':newusername},function(){
                var notifOptions = {
                    type: "basic",
                    iconUrl: "icons/clock128px.png",
                    title: " Data is updated sucessfully",
                    message: "Enjoy your day"
                };
               
                chrome.notifications.create(notifOptions);

            })
        })
    })
    
})