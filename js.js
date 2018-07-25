function scollHandler(){
var mainpage = document.getElementById('mainPage');
var cHeight = mainpage.offsetHeight;//get the content height
var yOffset = window.pageXOffset;//get vertical scroll position
var y = yOffset + window.innerHeight;

if(y >= cHeight){
    mainpage.innerHTML += '<div class="newContent"><a href="https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=1aea49a23d6441fc9414c7b48a0ebdc6"></a></div>';
    //dynamic Content goes here
}

var status = document.getElementById('status');

}
window.onscroll = scrollHandler;