$(document).ready(function(){
    axios.get('https://5dbd5d3b05a6f30014bcac47.mockapi.io/new_list_page')
    .then(function(res){
        /*如果成功进入.then*/
       console.log('data', res.data[0].src);
       for(var i=0;i<res.data.length;i++){
        console.log(res.data[i]);
        $("#new").append("<li class='new'>"+"<img src='"+res.data[i].src+"'><p class='new_title'>"+res.data[i].new_title
           +"</p><p class='new_content'>"+res.data[i].new_content+"</P></li>"
        )
       }
    }).catch(function (res) {
        console.log('error', err);
    })
    
})
