let errorMsg = document.getElementsByClassName('form_block_error')[0];
let button = document.getElementsByClassName('form_block-button')[0];

phone.onchange = () => {
   if(phone.value.length > 0 && phone.value.length < 11) {
       errorMsg.style.display = 'block';
       button.disabled = true;
   }
   else {
       errorMsg.style.display = 'none';
       button.disabled = false;
       button.style.backgroundColor = '#0d972b';
   }
}

window.onload = () => {
    if(window.matchMedia("(max-width: 500px)").matches) {
        let elems = document.getElementsByClassName('form_block-field');

        elems[1].placeholder = 'Укажите телефон для связи'
        elems[2].placeholder = 'Название франшизы'
    }
}


