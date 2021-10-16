let id = 0;
let movies = [];

$('#submit').on('click', function (event) {
    event.preventDefault();
    if ($('#title').val().length < 2) {
        throw 'Title is too short.'
    }
    let title = $("#title").val();
    let rating = $("#review").val();

    let movieData = { title, rating, id };

    $('#tableBody').append(`<tr>
    <td style="padding:10px;">${$('#title').val()}</td>
    <td style="padding:10px;">${$('#review').val()}</td>
    <td style="padding:10px;"><button class="delete" id=${id}>Delete</button></td>
    </tr>`)
    id++;

    movies.push(movieData);


})

$('#tableBody').on('click', ".delete", function () {
    $(this).parent().parent().remove();
    let index = $(this).attr('id');
    console.log(index);
    movies.splice(index, 1);
})

$('#sortRating').on('click', function () {
    let data = movies.sort(function (a, b) {
        return a.rating - b.rating;
    });
    for (let i = 0; i < movies.length; i++) {
        movies[i].id = i;
    }
    $('#tableBody').empty();
    for (let movie of data) {
        $('#tableBody').append(`
          <tr>
            <td style="padding:10px;">${movie.title}</td>
            <td style="padding:10px;">${movie.rating}</td>
            <td style="padding:10px;">
              <button class="delete" id=${movie.id}>
                Delete
              </button>
            </td>
          </tr>
        `)
    }

})
