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
    if ($('#sortRating').html() === "↓") {
        $('#sortRating').html('&#8593;')
        let data = movies.sort(function (a, b) {
            return a.rating - b.rating;
        });
        for (let i = 0; i < movies.length; i++) {
            movies[i].id = i;
        }
        $('#tableBody').empty();
        createTable(data);
    } else {
        $('#sortRating').html('&#8595;')
        let data = movies.sort(function (a, b) {
            return b.rating - a.rating;
        });
        for (let i = 0; i < movies.length; i++) {
            movies[i].id = i;
        }
        $('#tableBody').empty();
        createTable(data);
    }

})

$('#sortTitle').on('click', function () {
    if ($('#sortTitle').html() === "↑") {
        $('#sortTitle').html('&#8595;')
        let data = movies.sort(function (a, b) {
            var titleA = a.title.toUpperCase(); // ignore upper and lowercase
            var titleB = b.title.toUpperCase(); // ignore upper and lowercase
            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB) {
                return 1;
            }

            // names must be equal
            return 0;
        });
        for (let i = 0; i < movies.length; i++) {
            movies[i].id = i;
        }
        $('#tableBody').empty();
        createTable(data);

    } else {
        $('#sortTitle').html('&#8593;')
        let data = movies.sort(function (a, b) {
            var titleA = a.title.toUpperCase(); // ignore upper and lowercase
            var titleB = b.title.toUpperCase(); // ignore upper and lowercase
            if (titleA > titleB) {
                return -1;
            }
            if (titleA < titleB) {
                return 1;
            }

            // names must be equal
            return 0;
        });
        for (let i = 0; i < movies.length; i++) {
            movies[i].id = i;
        }
        $('#tableBody').empty();
        createTable(data);
    }
})
function createTable(data) {
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
}
