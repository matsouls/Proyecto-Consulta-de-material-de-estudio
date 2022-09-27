$('#btn-like').click(function(e){
    e.preventDefault();
    let materiaid = $(this).data('id');
    $.post('/material-abierto/' + materiaid + '/like')
        .done(data => {
            console.log(data);
            $('.likes-count').text(data.likes);
        });
    });