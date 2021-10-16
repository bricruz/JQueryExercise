//appending elements with jquery

// $('ul').append('<li class="whatever"> I am new </li>')
// $('li').append('<input type = "checkbox"/>')
// $('li').prepend('<span>&hearts;</span>')

// $('<h1>HI</h1>').css('color', 'orange').appendTo('p')

// $('li').after('<bold>YOOOO</bold>')
// $('img').remove();

// $('img').click(function () {
//     alert('Hello');
// })

$('img').on('mouseenter', function () {
    $(this).css('border', '5px solid red')
})
$('img').on('mouseleave', function () {
    $(this).css('border', '0px')
})

$('#add-input').on('click', function () {
    $('form').append('<input type="text">');
})

$('form').on('focus', 'input', function () {
    $(this).val('BAMBOOZLED');
})

// $('img').on('click', function () {
//     $(this).fadeOut(function () {
//         $(this).remove();
//     });
// })

$('img').on('click', function () {
    $(this).animate({
        opacity: 0,
        width: '50px', //do not animate width... poor performance
    }, 2000, function () {
        $(this).remove();
    })
})