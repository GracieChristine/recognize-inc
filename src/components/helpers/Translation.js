import $ from 'jquery';
import Config from './../../config';


export function showIt() {
  $.post("https://translation.googleapis.com/language/translate/v2", {
    q: $("#text").val(),
    target: $("#target").val(),
    format: "html",
    source: "en",
    key: `${Config.googleTranslationAPIKey}`
  }, (response) => {
    $("#translated").html("<blockquote><p>" + response.data.translations[0].translatedText + "</p></blockquote>");
  }, "json").fail((jqXHR, textStatus, errorThrown) => {
    alert("error :" + errorThrown);

    return errorThrown;
  });
}
