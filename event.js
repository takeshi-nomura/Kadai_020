const changebtn=document.getElementById('btn');
const text=document.getElementById('text');

changebtn.addEventListener('click',()=>{
  const newMessage = document.querySelector('#text');
  newMessage.textContent ='ボタンをクリックしました';
　console.log({text:newMessage.textContent});
});
