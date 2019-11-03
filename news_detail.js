function getQueryString(name) {
    
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
var i=getQueryString("id")
console.log(i)
$(document).ready(function() {
    /**启用动画 */
    $(".loading i").css("animation-play-state","running");
    axios.get('https://5dbd5d3b05a6f30014bcac47.mockapi.io/new_list_page')
            .then(function(res) {
                console.log(res.data[i]);
                    $('title').html(res.data[i].new_title);
                    $('#content').append("<div class='content_top'><h2>"+res.data[i].new_title+"</h2><span>发布日期:" + res.data[i].date + "</span></div><div class='content_bottom'><img src="
                    +res.data[i].src+"></div><p class='con'>"+res.data[i].new_content+"</p>"
                       );
                    $(".loading").css("display","none");
                    $(".loading i").css("animation-play-state","paused");
            }).catch(function(res) { console.log('error', res); })
        })