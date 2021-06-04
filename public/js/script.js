// Merriam Webster API 
// https://dictionaryapi.com/api/v3/references/collegiate/json/test?key=

var mainLetter = "";
var letters = [];

$("#submit").on("click", function() {

    if ($("#letter1").val() != "" && $("#letter2").val() != "" && $("#letter3").val() != "" && $("#letter4").val() != "" && $("#letter5").val() != "" && $("#letter6").val() != "" && $("#letter7").val() != "" ) {
        mainLetter = $("#letter1").val();
        letters = [$("letter2").val(), $("letter3").val(), $("letter4").val(), $("letter5").val(), $("letter6").val(), $("letter7").val()];

        dictionaryAPISearch(mainLetter, letters);
    }
});

var dictionaryAPISearch = function(mainLetter, letters) {
    alert("letters are: " + mainLetter);
}

