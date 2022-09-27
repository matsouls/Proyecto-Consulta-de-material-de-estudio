$('#btn-likeM').click(function(e){
    e.preventDefault();
    let materiaid = $(this).data('id');
    $.post('/material-abierto/' + materiaid + '/likeC')
        .done(data => {
            console.log(data);
            $('.likes-count3').text(data.likes);
        });
    });