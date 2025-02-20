let h1 = document.querySelector('h1');
h1.innerHTML = h1.innerText.split('').map((letters, i)=> `<span style="animation-delay: ${i*30}ms">${letters}</span>`).join('');
