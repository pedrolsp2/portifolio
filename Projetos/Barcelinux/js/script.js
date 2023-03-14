function menu() {

  const navMenu = document.getElementById('nav');
  navMenu.classList.toggle('toggle')

  const btnMenu = document.getElementById('botao-menu');
  btnMenu.classList.toggle('active')
}


const vw = document.querySelector('.view')
const minhaDiv = document.getElementById(div);
const img = document.getElementById('img-view')

function viewImg(div) {
  const img = document.getElementById('img-view')
  let imgCaneca = 'img/Caneca-vw.png'
  let imgColete = 'img/Colete-vw.png'
  let imgBucket = 'img/Bucket-vw.png'
  let imgKit = 'img/Kit-vw.png'

  switch (div) {
    case 1:
        img.src = imgCaneca;
      break;

    case 2:
      img.src = imgColete;
      break;

    case 3:
      img.src = imgBucket;
      break;

    default:
      img.src = imgKit;
      break;

  }

  vw.classList.add('visible')
  document.querySelector('body').style.overflow = 'hidden';
  window.location.href = 'index.html#view';
}



function closeapp() {
  vw.classList.remove('visible')
  document.querySelector('body').style.overflow = 'auto';
}