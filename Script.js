let btn = document.querySelector(".btn");
btn.addEventListener("click", login);

function login() {
    let name = document.querySelector(".name").value;
    document.querySelector(".container").style.display = "none";
    
    let newElement = document.createElement("div");
    newElement.classList.add("newElement");
    newElement.textContent = "Welcome Back! " + name;
    document.body.appendChild(newElement);
}
