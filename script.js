const opend = document.getElementById('open')
const closed = document.getElementById('close')
const container = document.querySelector('.container')


opend.addEventListener('click',() => container.classList.add('show-nav'))
closed.addEventListener('click',() => container.classList.remove('show-nav'))



