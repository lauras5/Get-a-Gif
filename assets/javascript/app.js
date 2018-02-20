$(document).ready(function(){
    // console.log("hello")
    
    
    $("#select-gif").on("click", function(){
        var input = $("#gif-input").val()
        $(".gifBtns").append($("<button class='gifBtn' value='"+input+"' data-name='"+input+"'>"+input+"</button>"))
        //add on click event for gifBtns/ add value
        var APIKey = "y5KIXr4zxOUPpyUsmrtlZQejlJGkK563"
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + APIKey + "&q=" + input + "&limit=24&offset=0&rating=R&lang=en"
        console.log(input)
        event.preventDefault()
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            //run through data array
            var dataArr = response.data
            for (var i = 0; i <= response.data.length; i++) {
                // console.log(response.data)
                // console.log(dataArr[1])
                // console.log(response.data[i].images.downsized.url)
                // console.log(response.data.images)
                var gifUrl = response.data[i].images.downsized.url
                var gifs = $(".gifImages")
                gifs.prepend("<a href = '" + gifUrl + "' target = '_blank'><img class='gif-images' src='" + gifUrl + "'></a>")
                $("#gif-input").empty()
                
            }
        })
    })
})