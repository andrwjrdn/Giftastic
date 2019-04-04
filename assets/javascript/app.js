$(document).ready(function() {
    
// GLOBAL VARIABLES //

    var playerArray = ['Kobe Bryant', 'LeBron James', 'Carmelo Anthony', 'Kevin Durant'];
    var pausedGif = '';
    var playGif = '';
    var functionGif = '';
    var imageGif = '';
    var animateGif = '';

// FUNCTIONS //

//Creating a newButton function//
function newButton() {
        
    $('#buttondiv').empty();
     
        for (var i = 0; i < playerArray.length; i++) {
        
            var button = $('<button>');false
            
            button.attr('data-name', playerArray[i]);
            button.attr('class', 'gif');
            button.text(playerArray[i]);
        
            $('#buttondiv').append(button);
        }
    }

//Creating a button function to search for GIFs//
function searchButton() {

    event.preventDefault();
    var searchValue = $('#searchValue').val();
    playerArray.push(searchValue);
    newButton();
   
    
}

//On Click function for hitting searchButton
$('#searchButton').on('click', function(event) {
    searchButton();
});

//On 'ENTER' key function to searchButton
$(".search").keydown(function(event){
    if(event.keyCode == 13){
        searchButton();
        $('.search').val("");
        return false
    }
});

//Function that grabs API and displays GIFs in HTML
function allGifs()  {
    
    var apiButton = $(this).data('name');
    var apiKey = '528gfZGJfl2XSAJ9jFxVzudrMlCD4JFF';
    var apiUrl = 'https://api.giphy.com/v1/gifs/search?q=' + apiButton + '&api_key=' + apiKey;

    $.ajax({
        url: apiUrl,
        method: 'GET'
    }).done(function(response) {
        $('.gifsDiv').empty();
        let replace = $('<h1>');
        replace.html(apiButton);
        replace.attr('class', 'text-center');
        $('.gifsDiv').append(replace);

    for (var i = 0; i < 10; i++) {
          
        pausedGif = response['data'][i]['images']['fixed_height_still']['url'];
        playGif = response['data'][i]['images']['fixed_height']['url'];
                
        var rating = response['data'][i]['rating'];
         
        var divTag = $('<div>');
        var pTag = $('<p>'); 
        var imgTag = $('<img>');
                
        imgTag.attr('data-still', pausedGif);
        imgTag.attr('data-animate', playGif);
        imgTag.attr('src', pausedGif);
        imgTag.attr('data-type', 'still');
        imgTag.addClass('gifImage');
                
        pTag.html('Giphy Rating: ' + rating);
        $(pTag).appendTo(divTag);
        $(imgTag).appendTo(divTag);
        $('.gifsDiv').append(divTag); 

            }
        });
    }

//Function for setting GIFs to play/pause
function gifType()  {

    functionGif = $(this).data('type');
    imageGif = $(this).data('still');
    animateGif = $(this).data('animate');

    if (functionGif === 'still') {
        
        $(this).attr('src', animateGif);
        $(this).data('type', 'animate');
       

    } else if (functionGif === 'animate') {

        $(this).attr('src', imageGif);
        $(this).data('type', 'still');
       
        }
    }

//Calling newButton function any time user searches for new GIF
    newButton();
    $(document).on('click', '.gif', allGifs);
    $(document).on('click', '.gifImage', gifType);
});
