$.ajax({
    type: "get",
    url: "http://www.omdbapi.com",
    dataType: "json",
    data: {
        "apikey": "1fc6926a",
        "s": "harry potter"
    },
    success: function (result) {
        if (result.Response === 'True') {
            const movie = result.Search;
            $.each(movie, function(i, data) {
               $('#list-card').append(`
                    <li class="col-md-4">
                        <div class="card mt-2 mb-2" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${data.Title}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    </li>
               `);
            })
        } else {
            console.log(result.Error);
        }
    }
});