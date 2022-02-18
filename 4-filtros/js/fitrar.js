$(document).ready(function() {

  // al primer elemento
  // $('.caja').first().css({
  //   background: 'green'
  // })

  // al ultimo elemento
  // $('.caja').last().css({
  //   background: 'red'
  // })

  // eq
  // $('.caja').eq(4).css({
  //   background: 'red'
  // })

  // filter
  // $('.caja').filter('#segundo').css({
  //   background: '#f9a03f'
  // })

  // not
  $('.caja').not('#segundo').css({background: 'green'})

});