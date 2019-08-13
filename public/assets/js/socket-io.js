$(document).ready(function(){
    var socket = io.connect("http://localhost:5000/", { transports: ['websocket'] });
    socket.on('SERVER-ADD-DATA-RESPONSE',function(data){
        var tr=$('<tr></tr>')
        var dt=[data.vip,
            data.time,
            data.phone,
            data.address,
            data.line,
            data['num-driver'],
            data.ddv,
            data.dtv,
            data['car-type'],
            data.chanel,
            data.state];
            for(let i=0;i<dt.length;i++){
                var td=$(`<td>${dt[i]}</td>`)
                td.appendTo(tr);
            }
            tr.appendTo('table tbody');
            
    })
})