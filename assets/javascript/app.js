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

    // var input = prompt("What would you like to search for?")
    var input;
    var APIKey = "y5KIXr4zxOUPpyUsmrtlZQejlJGkK563"
        // $("#input").html(input)
    var queryURL = "https://api.giphy.com/v1/stickers/search?api_key=" + APIKey + "&q=" + input + "&limit=20&offset=0&rating=R&lang=en"

        // $("#select-gif").on("submit", function(){
        $("form").submit(function() {
            var input = $("#gif-input").val()
            console.log(input)

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
                //grab actors id, inner html will be 
                // $(actors).html(r)
                //run through data array
                var dataArr = response.data
                for (var i = 0; i <= response.data.length; i++) {
                    console.log(response.data)
                    // console.log(dataArr[1])
                    console.log(response.data[i].images.downsized.url)
                    // console.log(response.data.images)
                    var gifUrl = response.data[i].images.downsized.url
                    var gifs = $(".gifImages")
                    gifs.append("<img class = 'gif-images' src='" + gifUrl + "'>")
    
                }
            })
        })
    // })
})