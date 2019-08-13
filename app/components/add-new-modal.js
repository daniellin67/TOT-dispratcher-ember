import Component from '@ember/component';
import dateFormater from "../utils/date-formater";
var today = new Date();
export default Component.extend({
    today: today,
    actions: {
        add_click() {
            var newDiv = $('#car-request-template').clone();
            newDiv.removeAttr('id');
            newDiv.removeClass('hidden');
            newDiv.addClass('sub-car-request');
            newDiv.find('i').click(this.actions.remove_click);
            newDiv.appendTo('.car-request');
        },
        remove_click() {
            var newDiv = $(this).parent().parent();
            newDiv.remove();
        },
        onsubmit(e) {
            e.preventDefault();
            var today = new Date();
            var date = dateFormater(today, 'date');
            var phone = $('div#add-new-modal form input[name="phonenumber"]').val();
            var address = $('div#add-new-modal form input[name="address"]').val();
            var line = $('div.line-group select').val();
            var ddv = $('.navbar div.username').text();
            var chanel = $('.navbar div.line strong').text();
            var car_type = $('.car-request .main-car-request select option:selected').text();
            var request = $('.car-request .sub-car-request select option:selected');
            var num_request = request.length;
            var now = dateFormater(today, 'time')
            var socket = io.connect("http://localhost:5000/", { transports: ['websocket'] });
            var data_main = {
                "vip": null,
                "time": now,
                "phone": phone,
                "address": address,
                "line": `K${line}`,
                "num-driver": null,
                "ddv": ddv,
                "dtv": "DTV",
                "car-type": car_type,
                "chanel": chanel,
                "state": null
            };
            var nextAjax = function (index, num_req, req) {
                if (index == num_req)
                    return;
                else {
                    var now = dateFormater(today, 'time')
                    var c_type = req[index].innerText;
                    var data_sub = {
                        "vip": null,
                        "time": now,
                        "phone": phone,
                        "address": address,
                        "line": `K${line}`,
                        "num-driver": null,
                        "ddv": ddv,
                        "dtv": "DTV",
                        "car-type": c_type,
                        "chanel": chanel,
                        "state": null
                    };
                    $.ajax({
                        url: 'http://localhost:5000/hienhanhs',
                        data: data_sub,
                        type: 'POST',
                        complete: function (data, status) {
                            if (status == "success") {
                                socket.emit('CLIENT-ADD-DATA', data_sub);
                                nextAjax(index + 1, num_req, req)
                            }
                            else {
                                console.log(status)
                                return;
                            }
                        }
                    });
                }
            }
            $.ajax({
                url: 'http://localhost:5000/hienhanhs',
                data: data_main,
                type: 'POST',
                complete: function (data, status) {
                    if (status == "success") {
                        socket.emit('CLIENT-ADD-DATA', data_main);
                        nextAjax(0, num_request, request)
                    }
                    else {
                        return;
                    }
                }
            });
            $('.close-button').click();
        }
    }
});
