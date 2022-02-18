function efecto() {

 // $(selector).efecto(velocidad, callback)
 // 3000 milisegundos corresponde a 3 segundos

// ** hide **
//  $('.caja').hide(1500, function() {
//    alert('Oculto!!')
//  });

// ** show **
// para volver a mostrar la caja 
//  $('.caja').show(3000, function(){ alert('Regrese')});

// ** toggle **
// el toggle cumple las dos funcionalidades
// $('.caja').toggle(2000, function(){
//   alert('soy toggle cumplo las dos funciones!')
// });

// fadeIn ** es necesario que la caja este oculta para aplicarlo **
// $('.caja').fadeIn(3000); 

// fadeOut 
// $('.caja').fadeOut(1000);

// realiza ambos efectos fade a la vez
$('.caja').fadeToggle(1000, function() {
  alert('EFECTO FADE');
});

}