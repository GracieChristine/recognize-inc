function showIt() {
  $.get("https://www.googleapis.com/language/translate/v2", {
    key: "AIzaSyBPNKaYskcfvuUWyDRQ6n9ZzTGFbLfMaHY",
    source: "en",
    target: $("#target").val(),
    q: $("#text").val()
  }, (response) => {
    $("#translated").html("<blockquote><p>" + response.data.translations[0].translatedText + "</p></blockquote>");
  }, "json").fail((jqXHR, textStatus, errorThrown) => {
    alert("error :" + errorThrown);

    return errorThrown;
  });
}
