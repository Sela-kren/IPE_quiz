

function handle(){

    const emal = document.getElementById("emal").value;
    const pass = document.getElementById("mypass").value;
    console.log(emal);
    console.log(pass);
    localStorage.setItem("EMAL",emal);
    localStorage.setItem("PASS",pass);

    document.getElementById("rs").onclick = location.href = 'index.html';
    
    return;
}






