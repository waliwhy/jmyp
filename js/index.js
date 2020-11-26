$('.bar0').load('./bar.html')
$('.header').load('./header.html')
$('.footerall').load('./footerall.html')

$(function () {
  //console.log(11);

  //获取商品列表
  $.ajax({
    url: './json/goods.json',
    type: 'get',
    dataType: 'json',
    success: function (json) {
      //console.log(json);
      var goodsStr = '';
      $.each(json, function (index, item) {
        //动态添加列表
        goodsStr += `<li class="goods_box" >
        <button class="btn_add" code="${item.code}">加入购物车</button>
        <a href="goodslist.html?code=${item.code}" target="_blank">
        <div class="img_box">
          <div class="tip">
            <span class="tip0"></span>
          </div>
          <img class="img0" src="${item.imgurl}" alt="">
          <div class="new_box">
            <p>新品上线，赶快来试试吧！</p>
            
          </div>
        </div>
        <div class="title_box">
          <h3>${item.title}</h3>
          <p>${item.price}</p>
        </div>
      </a>
      </li>`
        $('.goods ul').html(goodsStr);

        //点击添加购物车
        $('.goods').on('click', '.goods_box .btn_add', function () {
          // alert(111);
          var code = $(this).attr('code');
          // console.log(code);

          if (localStorage.getItem('goods')) {
            var goodsArr = JSON.parse(localStorage.getItem())
          }



        })
      })
    },
    //  error:function(err){
    //    console.log(err)
    //  }
  })




})




