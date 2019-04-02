$(document).ready(function() {

// GLOBAL VARIABLES //
var playerArray = ['Kobe Bryant', 'LeBron James', 'Michael Jordan', 'Magic Johnson']
var pausedGif = '';
var playGif = '';

// FUNCTIONS //

                //Creating a button function
function newButton () {

    $('#button').empty ();

    for (var i = 0; i < playerArray.length; i++) {
        
        var button = $('<button>');
        
        button.attr('data-name', playerArray[i]);
        button.attr('class', 'gif');
        button.text(playerArray[i]);
    
    $('#button').append(button);



    }
}

            //Submit button function for searching gifs
function submit () {
    event.preventDefault();

    var value = $('#searchValue').val();
    playerArray.push(value);
    newButton();
    //console.log(value);
    //console.log(playerArray);
    
}


            // On click & Enter functions
$('#submit').on('click', function (event) {
submit();
        
 });

$('.enter').keydown(function(event) {
    if(event.keyCode == 13) {
        console.log ("yessir");
        submit();
        $('.enter').val("");
        return false
        
    }
})

// Function that grabs API and displays gifs in html

function allGifs() {

var apiButton = $(this).data('name');

var apiKey = '528gfZGJfl2XSAJ9jFxVzudrMlCD4JFF';
var apiUrl = 'https://api.giphy.com/v1/gifs/search?q=' + apiButton + '&api_key=' + apiKey;

}


    //Search functions when hitting submit/enter
        // New button function any time user searches for new gif

});