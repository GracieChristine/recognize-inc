function showIt() {
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

// function showIt()
//     {
//         $.get("https://www.googleapis.com/language/translate/v2",
//             {
//             key:"AIzaSyBPNKaYskcfvuUWyDRQ6n9ZzTGFbLfMaHY",
//             source:"en",
//             target:$("#target").val(),
//             q:$("#text").val()
//             },
//             function(response)
//             {
//                 $("#translated").html(response.data.translations[0].translatedText);
//
//             },"json") .fail(function(jqXHR, textStatus, errorThrown)
//             {
//                 alert( "error :"+errorThrown );
//             });
//     }
