


$(document).ready(function(){
    axios.get('http://5dbd5d3b05a6f30014bcac47.mockapi.io/new_list_page1')
    .then(function(res){
        /*如果成功进入.then*/
     
       for(var i=0;i<res.data.length;i++){
        console.log(res.data[i]);
        $("#new").append("<li class='new'><a href='news-detail.html?id="+res.data[i].id+"'><img src='"+res.data[i].src+"'><div id='r_p'><p class='new_title'>"+res.data[i].new_title
           +"</p><p class='new_date'>"+res.data[i].date+"</p><p class='new_content'>"+res.data[i]+"</P></div></a></li>"
        )
       }
       n=1;
    }).catch(function (res) {
        console.log('error', err);
    })
    
})
$("#button1").click(function(){
    $("#new li").remove();
    axios.get('http://5dbd5d3b05a6f30014bcac47.mockapi.io/new_list_page1')
    .then(function(res){
        /*如果成功进入.then*/
       console.log('data', res.data[0].src);
     
       for(var i=0;i<res.data.length;i++){
        console.log(res.data[i]);
        $("#new").append("<li class='new'><a href='news-detail.html?id="+res.data[i].id+"'><img src='"+res.data[i].src+"'><div id='r_p'><p class='new_title'>"+res.data[i].new_title
        +"</p><p class='new_date'>"+res.data[i].date+"</p><p class='new_content'>"+res.data[i]+"</P></div></a></li>"
     )
       }
       n=1;
    }).catch(function (res) {
        console.log('error', err);
    })
})
$("#button2").click(function(){
    $("#new li").remove();
    axios.get('http://5dbd5d3b05a6f30014bcac47.mockapi.io/new_list_page2')
    .then(function(res){
        /*如果成功进入.then*/
       console.log('data', res.data[0].src);
     
       for(var i=0;i<res.data.length;i++){
        console.log(res.data[i]);
        $("#new").append("<li class='new'><a href='news-detail.html?id="+res.data[i].id+"'><img src='"+res.data[i].src+"'><div id='r_p'><p class='new_title'>"+res.data[i].new_title
           +"</p><p class='new_date'>"+res.data[i].date+"</p><p class='new_content'>"+res.data[i]+"</P></div></a></li>"
        )
       }
       n=1;
    }).catch(function (res) {
        console.log('error', err);
    })
})
