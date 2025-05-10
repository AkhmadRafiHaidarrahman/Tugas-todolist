let teks = document.getElementById ("isiteks")
let order = document.getElementById ("list-item")

function tambah(){
    if (teks.value === ""){
        alert (`mohon di isi!!`)
        return
    }
    let li = document.createElement ("li");
    li.innerText = teks.value;
    let button = document.createElement ("button")
        button.innerHTML = "Hapus"
        li.appendChild(button)
    button.addEventListener("click", () =>{
        button.remove()
    })
    li.addEventListener("click", () => {
        li.remove();
    })
    order.appendChild(li)
    teks.value=""
    localStorage.getItem(teks)
}


      
