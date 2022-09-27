$('#btn-like').click(function(e){
e.preventDefault();
let casoid = $(this).data('id');
$.post('/caso-abierto/' + casoid + '/like')
    .done(data => {
        console.log(data);
        $('.likes-count').text(data.likes);
    });
});