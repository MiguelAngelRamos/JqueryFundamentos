$(document).ready(function(){

  // $('#padre'); acceder directamente al padre las cajas

  // $('#tercero').parent(); en caso de que el padre no tenga el id
  // podemos acceder al padre por medio de uno de sus hijos

  // Encadenación (acciendo a un hijo para darle estilos css a un padre)
  // $('#tercero').parent().css({
  //   background: 'tomato'
  // });

  // $('#tercero').parents() // nos devuelve un arreglo, todos sus padres
  // $('#tercero').parents()[0];
  // $('#tercero').parents()[1];
  // $('#tercero').parents()[2];
  // $('#tercero').parents()[3];

  // Children
  // $('#padre').children().fadeOut(3000);
  // $('#padre').children('#tercero').fadeOut(3000);

  // find nos permite encontrar dentro el contenedor los elementos html que tengan la clase .caja y aplicamos una animación de slideUp();
  // $('#contenedor').find('div.caja').slideUp();

  // Siblings que nos permite seleccionar a los elementos hermanos
  // $('#tercero').siblings().fadeOut(1500);
  // con esta animacion de fadeOut los elementos html hermanos de se van ocultar

  // al elemento anterior
  // $('#tercero').prev().css({
  //   background: '#000'
  // });

  // al elemento siguiente
  // $('#tercero').next().css({
  //   background: 'tomato'
  // });

  $('#tercero').prevAll().css({
    background: '#000'
  });

  $('#tercero').nextAll().css({
    background: 'tomato'
  });
  


});