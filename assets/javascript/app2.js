$(document).ready(function(){

    //click function for gifting new categories
    $("#select-gif").on("click", function(){
        //value of whatever user gif
        var input = $("#gif-input").val()
        $(".gifBtns").append($("<button class='gifBTN' data-name='" + input +"'>" + input + "</button>"))
        event.preventDefault()
        
        
        $(".gifBTN").on("click", function (){
            var input = $(this).attr("data-name")
            var APIKey = "y5KIXr4zxOUPpyUsmrtlZQejlJGkK563"
            var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + APIKey + "&q=" + input + "&limit=12&offset=0&rating=R&lang=en"
            
            console.log(queryURL)
            event.preventDefault()
            
            $.ajax({
                url: queryURL,
                method: "GET",
            }).then(function(r) {
                
                console.log(r)
                
                var dataArr = r.data
                var gifs = $(".gifImages")
                for (var i = 0; i <= dataArr.length; i++) {
                    var gifUrl = dataArr[i].images.original.url
                    var gifRating = dataArr[i].rating
                    var gifImage = dataArr[i].images.original_still.url
                    gifThumb = $("<img class='gif-ind' src='" + gifImage + "' data-hover='" + gifUrl + "' data-off='" + gifImage + "'>")
                    gifs.prepend(gifThumb)     
                    gifThumb.mouseover(function(){
                        $(this).attr('src', $(this).data("hover"))
                    }).mouseout(function(){
                        $(this).attr('src', $(this).data("off"))
                    })
                }
                event.preventDefault()

            })

        })
    }) 
    })
