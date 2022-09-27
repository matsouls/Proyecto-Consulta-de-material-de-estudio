$('#btn-likeC').click(function(e){
    e.preventDefault();
    let LikeComment = $(this).data('id');
    $.post('/caso-abierto/' + LikeComment + '/likeC')
        .done(data => {
            console.log(data);
            $('.likes-count2').text(data.likes);
        });
    });