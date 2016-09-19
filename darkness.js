function addZero(i) {
    if (i < 10) {
    i = "0" + i;
    }
    return i;
}

var today = new Date();
var h = addZero(today.getHours());
var m = addZero(today.getMinutes());
var time = h + ":" + m + " ";

if(window.console){window.console.log("%c" + time +"%cMiyakeDev : "+"%cHello, Thank you for downloading this userscript, " +
"I hope to be to your liking.","color:#6f6f6f; font-size:12px; font-style:italic;","color:#4caf50; font-size: 14px;","color:#444444; font-size: 13px;");}

function hideSkinUrl() {
  $("#skin_url").attr("type", "hidden");
  $(".skin.fa-eye-slash").replaceWith("<i onclick='showSkinUrl()' class='skin fa fa-eye'></i>");
}

function showSkinUrl() {
  $("#skin_url").attr("type", "visible");
  $(".skin.fa-eye").replaceWith("<i onclick='hideSkinUrl()' class='skin fa fa-eye-slash'></i>");
}

function hideTeam() {
  $("#team_name").attr("type", "hidden");
  $(".team.fa-eye-slash").replaceWith("<i onclick='showTeam()' class='team fa fa-eye'></i>");
}

function showTeam() {
  $("#team_name").attr("type", "visible");
  $(".team.fa-eye").replaceWith("<i onclick='hideTeam()' class='team fa fa-eye-slash'></i>");
}

if( adblock === true ){
    $("#mainPanel").after($('<a id="adblocker">Please disable your adblocker for alis.io<span>AD</span></a>'));
} else {
    $("#mainPanel").after($('<a id="support" href="//goo.gl/4Qwdq0" target="blank_">Click me everyday to keep Alis.io alive<span>AD</span></a>'));
}

$('#overlays').append($('#footer'));
$("div#mainPanel form .card.card-nav-tabs").before($(".side-container.left-side"));
$("label.control-label").remove();
$(".material-input").remove();
$(".btn.btn-success").remove();
$("#nickname_container").removeClass();
$("#team_container").removeClass();
$("#skin_url_container").removeClass();
$(".side-container.left-side").append('<div id="ProfilePanel" role="tabpanel"></div>');
$("#ProfilePanel").append($(".skin,#nickname_container"));
$("#nickname_container").after($("#team_container,#skin_url_container"));
$(".side-container.left-side").after('<div id="menulist"></div>');
$("#menulist").append($(".btn.btn-info.btn-play,.btn.btn-warning.btn-spectate.btn-just-icon"));
$("#home").append($("#serverspanel"));
$("#nick").attr("placeholder", "Nick");    
$("#team_name").attr("placeholder", "Tag");
$("#skin_url").attr("placeholder", "Skin URL (imgur.com direct link)");
$('#nick,#team_name,#skin_url,#backgroundColor,#borderColor,#pelletColor').attr('spellcheck',false);
$("#team_container").before($("<i onclick='hideTeam()' class='team fa fa-eye-slash'></i>"));
$("#team_container").before($("<i onclick='hideSkinUrl()' class='skin fa fa-eye-slash'></i>"));
$('iframe').attr("height", "20");
localStorage.removeItem("location");
document.title = "Alis.io";
