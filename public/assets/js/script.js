$(window).ready(function () {
    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        $('.filter #time-show').html(h + ":" + m + ":" + s);
        var t = setTimeout(startTime, 1000);
    }
    function checkTime(i) {
        if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
        return i;
    }
    //set height for filter
    var maxHeight = 100;
    $('div.filter>div').each(function(){
        $(this).height(maxHeight + 20);
    })
    var height = $(window).height() - 120;
    
    $('div.my-table').height(height);
    $('div.filter-button button:nth-child(2)').click(function () {
        $('div.my-table').height(height-120);
        if($('#filter').is('div.show'))
        {
            $('div.my-table').height(height);
        }
    })
    $('#chat-history-modal div.my-table').height(height-105)
    $('#chat-history-modal div.message-detail').height(height-25)
    $('#close-chat-icon').click(function(){
        $('div.chat-box').removeClass('active')
        $('div.chat-box').addClass('inactive')
    })
    var state_chatbox='block';
    $('.chat #chat-icon').click(function(){ 
        $('div.chat-box').removeClass('inactive')
        $('div.chat-box').addClass('active');
    })
    $('span.reciever i').click(function(){
        var id= $(this).parent().data('id');
        $(this).parent().removeClass('active').addClass('inactive');
        $(`.reciever-button button[data-id=${id}]`).removeClass('chosen');
    })
    $('.reciever-button button').click(function(){
        var id= $(this).data('id');
       $(`span.reciever[data-id=${id}]`).removeClass('inactive').addClass('active');
       $(this).addClass('chosen');
    })
    $('div.line-group button').click(function(){
        var buttons=$('div.line-group button.active');
        buttons.removeClass('active');
        $(this).addClass('active');
        $('div.line-group select').val($(this).data('id'));
    })
    $('div.line-group select').change(function(){
        var id=$(this).val();
        var buttons=$('div.line-group button.active');
        buttons.removeClass('active');
        $(`div.line-group button[data-id="${id}"]`).addClass('active');
    })
    $('#set-time-button').click(function(){
        if($(this).hasClass('active')==true)
        {
            $(this).removeClass('active')
            return;
        }
        else{
            $(this).addClass('active')
        }
    })
    $('body').load(startTime());
})