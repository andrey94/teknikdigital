function btnDetails_onClick(bgcolorcode, title){
    $('#divDetails').css('visibility', 'visible');
    $('#divDetails').css('background-color', bgcolorcode)
    $('#detailsTitle').html(title);
    $('#form' + title).css('display', 'block');
    // alert('active');
}

function btnBack_onClick(){
    $('#divDetails').css('visibility', 'hidden');

    var title = $('#detailsTitle').html();
    $('#form' + title).css('display', 'none');
}

function btnSwitch(obj, n){
    n = (n+1)%2;

    if(n == 1){
        
        $(obj).css('background-color', '#FF0000');
    } else if(n == 0){
        $(obj).css('background-color', '#00FF00');
    }

    return n;
}