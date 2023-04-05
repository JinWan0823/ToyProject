;(function () {
  'use strict'
  const get = (target) => {
    return document.querySelector(target)
  }

  const $button = get('.modal_open_button');
  const $body = get('body');
  const $modal = get('.modal');
  const $modalCancleButton = get('.modal_button.cancel');
  const $modalConfirmButton = get('.modal_button.confirm');


  const toggleModal = () => {
    $body.classList.toggle('scroll_lock');
    $modal.classList.toggle('show');
  }

  $button.addEventListener('click', () => {
    toggleModal();
  })

  $modalConfirmButton.addEventListener('click', () => {
    toggleModal();
    console.log('confirmed!');
  })

  $modalCancleButton.addEventListener('click', () => {
    toggleModal();
  })

  window.addEventListener('click', (e) => {
    if(e.target === $modal) {
      toggleModal();
    }
  })

})()
