function getlit(){
  var album = $("#album").val();
  var artist = $("#artist").val();
  console.log(album , artist);
$.getJSON("http://api.onemusicapi.com/20151208/release?title="+ album +"&artist="+ artist +"&user_key=ea4ee75b4f5c5dcdc1da8e038209d049&inc=images&maxResultCount=1", function (g){
var get = g.title;
$("#get").html(get)
})
}
