$('.bar0').load('./bar.html');

$('.footerall').load('./footerall.html');

$(function () {

  var code = location.href.split('?')[1].split('=')[1];

  $.ajax({

    url: './json/goods.json',
    type: 'get',
    dataType: 'json',
    success: function (json) {

      console.log(json);
      var listStr = '';
      $.each(json, function (index, item) {

        if (code === item.code) {
          listStr = `<div class="con_l1">
          <h2>
            <p class="con_title">
            ${item.title}
          </p>
          </h2>
            
          <div class="details">
            <img src="${item.imgurl}" class="con_img" alt="" >
          </div>
        </div>`
        }
      })
      $('.con_l1').html(listStr);
    }

  })

  $('.add_car').on('click',function(){
    var code = $(this).attr('code');
    // alert(1);
    if (localStorage.getItem('goods')) {
      
    }
  })


})
