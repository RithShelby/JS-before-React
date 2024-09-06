//This property can be used to get or set the HTML content of an element.
const text = document.querySelector(".text")
text.textContent = "Hello"
//his method can be used to set the value of an attribute on an element
text.setAttribute("style","color:white; background-color:skyblue;width:300px");
//This property can be used to get or set inline CSS styles on an element 
const h1Text = document.getElementById('text2')
h1Text.innerText = 'Cambodia'
const change = ()=>{
    h1Text.style.backgroundColor = 'gray'
}
let parent = document.createElement("div")
parent.textContent = "This is text from Parent"
let child = document.createElement("p")
child.textContent = "This is P text"
parent.append(child)
document.body.appendChild(child);
