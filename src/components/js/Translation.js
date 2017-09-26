import $ from 'jquery';

export function showIt() {
  $.post("https://www.googleapis.com/language/translate/v2", {
    q: $("#text").val(),
    target: $("#target").val(),
    format: "html",
    source: "en",
    key: "AIzaSyBI79wkJ7YAuxb-gGP3SJ2wefl4s8hpIpw"
  }, (response) => {
    $("#translated").html("<blockquote><p>" + response.data.translations[0].translatedText + "</p></blockquote>");
  }, "json").fail((jqXHR, textStatus, errorThrown) => {
    alert("error :" + errorThrown);

    return errorThrown;
  });
}
