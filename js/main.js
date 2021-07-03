'use strict'
{
  const btn = document.getElementById('btn')

  btn.addEventListener('click',() => {
    const uuu = ['１','２','３','4','5','6']
    btn.textContent = uuu[Math.floor(Math.random() * uuu.length)];
    btn.classList.toggle('kaitenn');
    btn.classList.toggle('kaitenn1');

  });


}