$(function(){
  $('.nav a').click(function(){
    var a = this;
    $('.nav a').each(function(){
      if (this == a ) {
        this.style.backgroundColor = '#ed145b';
      } else {   //不定义样式
        this.style.backgroundColor = '';
      }
    })
  })

  $('.car').on('click',function(){
    window.open('shopcar.html');
  })

})