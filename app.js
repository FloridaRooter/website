document.addEventListener('DOMContentLoaded', function() {
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();
  });

form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
})