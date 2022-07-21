let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image1.png') {
      myImage.setAttribute('src','image2.png');
    } else {
      myImage.setAttribute('src','image1.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('please enter your name');
  if(!myName) {
    alert('Enter name!');
    setUserName();
  } else {
    localStorage.setItem('name', myName);
  myHeading.textContent = 'My first webpage is cool!' + myName;
  }
	
}
if(!localStorage.getItem('name')) {
  setUserName();
}
else  {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'My first webpage is cool!' + storedName;
}

myButton.onclick = function() {
  setUserName();
}