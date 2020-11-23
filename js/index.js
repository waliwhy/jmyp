$('.header').load('./header.html')
$('.footerall').load('./footerall.html')

$(function(){
  //console.log(11);

  //获取商品列表
  $.ajax({
    url: './json/goods.json',
    type: 'get',
    dataType: 'json',
    success: function(json){
      console.log(json);
      var goodsStr = '';
      $.each(json,function(index,item){
        //动态添加列表
        goodsStr += `<li class="goods_box">
        <div class="img_box">
        <div class="tip">
          <span class="tip0"></span>
        </div>
        <img class="img0" src="${item.imgurl}" alt="">
        <div class="new_box">
          <p>新品上线，赶快来试试吧！</p>
          <button class="btn_add">加入购物车</button>
        </div>
      </div>
      <div class="title_box">
        <h3>${item.title}</h3>
        <p>${item.price}</p>
      </div>
      </li>`
      $('.goods ul').html(goodsStr);
      })
    },
  //  error:function(err){
  //    console.log(err)
  //  }
  })

  //点击跳转商品详情页
  $('.goods ul').on('click','li',function(){
    // alert(11)
    // $(window).attr('location','goodslist.html');
    window.open('goodslist.html');
  })

})