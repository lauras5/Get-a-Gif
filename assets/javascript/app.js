$(document).ready(function(){
    // console.log("hello")
    var q
    var limit
    var rating
    var topics = [
        "Animals",
        "Anime", 
        "Sports",
        "Kids",
    
    ]
    var input = prompt("What would you like to search for?")
        // $("#input").html(input)
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=y5KIXr4zxOUPpyUsmrtlZQejlJGkK563&q=&limit=25&offset=0&rating=G&lang=en"
    var APIKey = "y5KIXr4zxOUPpyUsmrtlZQejlJGkK563"

        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            //grab actors id, inner html will be 
            // $(actors).html(r)
            console.log(response)

          })
})