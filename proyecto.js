document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('El formulario ha sido enviado!');
});

$('#modal1').on('shown.bs.modal', function (e) {
    alert('Modal 1 abierto');
  })
  
  $('#modal2').on('shown.bs.modal', function (e) {
    alert('Modal 2 abierto');
  })
  
  $('#modal3').on('shown.bs.modal', function (e) {
    alert('Modal 3 abierto');
  })
  