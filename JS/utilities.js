// blog page connection
document.getElementById('blogs-btn').addEventListener('click', function(){
  window.location.href = 'blogs.html';
});

function getColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementsByClassName('shape-card').addEventListener('mouseover', function(){
  document.body.style.backgroundColor = getColor();
});



// get inner-text function
function shapeText(id){
 const text = document.getElementById(id).innerText;
 return text;
}

// get input-value function
function shapeValue(id){
 const value = document.getElementById(id).value;
 return value;
}

// show result function
function showResults(shapeName, shapeArea){
  const container = document.getElementById('result-container');
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${serial}</td>
  <td>${shapeName}</td>
  <td>${shapeArea}</td>
  
`;
container.appendChild(tr);
}

