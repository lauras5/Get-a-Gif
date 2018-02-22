$(document).ready(function(){
    // categories for preset buttons 
    var categories = [
        'coding', 'robots', 'anime'
    ]

    var gifThumb;

    // create for loop to create buttons and append
    for (var i = 0; i <categories.length; i++) {
        var setBtns = $("<button class='gifBtn' data-name='" + categories[i] + "'>" + categories[i] + "</button>")
        $(".gifBtns").append(setBtns)
        
        $(".gifBtn").on("click", function(){
            var input = $(this).attr("data-name")
            var APIKey = "y5KIXr4zxOUPpyUsmrtlZQejlJGkK563"
            var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + APIKey + "&q=" + input + "&limit=12&offset=0&rating=R&lang=en"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            //run through data array
            var dataArr = response.data
            for (var i = 0; i <= dataArr.length; i++) {
                var gifImage = dataArr[i].images.original_still.url
                var gifUrl = dataArr[i].images.original.url
                var gifRating = dataArr[i].rating
                var gifs = $(".gifImages")
                gifThumb = $("<img class='gif-ind' src='" + gifImage + "' data-hover='" + gifUrl + "' data-off='" + gifImage + "'><div class='bottom-left'> Rated '" + gifRating + "'</div>")
                gifs.prepend(gifThumb)     
                gifThumb.mouseover(function(){
                    $(this).attr('src', $(this).data("hover"))
                }).mouseout(function(){
                    $(this).attr('src', $(this).data("off"))
                })
            }
        })
            console.log(this)
            event.preventDefault()
        })
    }


    //click function for inputting new categories
    $("#select-gif").on("click", function(){
        //value of whatever user input
        var input = $("#gif-input").val()
        categories.push(input)
        console.log(categories)
        $(".gifBtns").append("<button class='gifBtn' data-name='" + input + "'>" + input + "</button>")

        //my unique API key
        var APIKey = "y5KIXr4zxOUPpyUsmrtlZQejlJGkK563"
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + APIKey + "&q=" + input + "&limit=12&offset=0&rating=R&lang=en"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            //run through data array
            var dataArr = response.data
            for (var i = 0; i <= dataArr.length; i++) {
                var gifImage = dataArr[i].images.original_still.url
                var gifUrl = dataArr[i].images.original.url
                var gifRating = dataArr[i].rating
                var gifs = $(".gifImages")
                gifThumb = $("<img class='gif-ind' src='" + gifImage + "' data-hover='" + gifUrl + "' data-off='" + gifImage + "'><div class='bottom-left'> Rated '" + gifRating + "'</div>")
                gifs.prepend(gifThumb)     
                gifThumb.mouseover(function(){
                    $(this).attr('src', $(this).data("hover"))
                }).mouseout(function(){
                    $(this).attr('src', $(this).data("off"))
                })
            }
        })
        event.preventDefault()
        $(".gifBtn").on("click", function(){
            var input = $(this).attr("data-name")
            var APIKey = "y5KIXr4zxOUPpyUsmrtlZQejlJGkK563"
            var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + APIKey + "&q=" + input + "&limit=12&offset=0&rating=R&lang=en"
            
            $.ajax({
                url: queryURL,
            method: "GET"
        }).then(function(response) {
            //run through data array
            var dataArr = response.data
            for (var i = 0; i <= dataArr.length; i++) {
                var gifImage = dataArr[i].images.original_still.url
                var gifUrl = dataArr[i].images.original.url
                var gifRating = dataArr[i].rating
                var gifs = $(".gifImages")
                gifThumb = $("<img class='gif-ind' src='" + gifImage + "' data-hover='" + gifUrl + "' data-off='" + gifImage + "'><div class='bottom-left'> Rated '" + gifRating + "'</div>")
                gifs.prepend(gifThumb)     
                gifThumb.mouseover(function(){
                    $(this).attr('src', $(this).data("hover"))
                }).mouseout(function(){
                    $(this).attr('src', $(this).data("off"))
                })
            }
        })
        event.preventDefault()
    })
})
})