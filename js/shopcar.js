$(function(){

  $.ajax({
    url: './json/shopcar.json',
    type: 'get',
    dataType: 'json',
    success: function(json){
      // console.log(json);

      var carStr = '';
      $.each(json,function(index,item){

        carStr += `<div class="car_list">
        <div class="title">
          <p class="shopName"><input type="checkbox" class="car_check">聚美香港香琳仓发货</p>
          <span class="car_price car_other">聚美价(元)</span>
          <span class="car_num car_other">数量</span>
          <span class="car_count car_other">小计(元)</span>
          <span class="car_more car_other">操作</span>
        </div>

        <div class="car_main">
          <ul class="car_ul">
            <li class="car_item_shop">
              <input type="checkbox" class="car_item_check">
              <div class="car_item_box">
                <a href="" class="img_box">
                  <img src="${item.imgurl}" alt="">
                </a>
                <a href="" class="img_title">
                  <h2>${item.title}</h2>
                </a>
              </div>
            </li>
            <li class="car_item_price">
              <p class="now_price">${item.price}</p>
              <p class="market_price">325.00</p>
            </li>
            <li class="car_item_num">
              <div class="item_num">
                <span class="item_minus">-</span>
                <input type="text" value="1" class="num_inp">
                <span class="item_add">+</span>
              </div>
            </li>
            <li class="car_item_count">
              <p class="item_count">179.00</p>
            </li>
            <li class="car_item_more">
              <a href=""></a>
            </li>
          </ul>
        </div>
        <div class="car_footer">
          <p class="car_item_footer">商品金额： <span>¥179.00</span></p>
        </div>
      </div>`

      })

      $('.car_wrap').html(carStr);
      //console.log($('.car_item_num .item_add'));

      $.each(carStr,function(){
        
        $('.car_item_num .item_add').on('click',function(){
          $('.car_item_num .num_inp').val();
          var carNum = Number($('.car_item_num .num_inp').val());
          // console.log(carNUm);
          carNum++;
          $('.car_item_num .num_inp').val(carNum);
  
      })
      




      })
    }
    
  })


})