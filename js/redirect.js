function redirect() {
  var searchitem = document.getElementById("search");
  var url = "https://dappervolk.com/trades?search=" + searchitem.value + "&in=item&type=all&item_type=&rarity=all&order=lowest";
  window.open(url,"");
}
