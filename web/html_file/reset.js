window.onload = function(){
    document.getElementById("rp").onclick = function(){        
    const Oname =  document.getElementById("email1").value;
    const name = localStorage.getItem("EMAl");
    const nPass =document.getElementById("Npass").value;
    const oPass =document.getElementById("Opass").value;
    
        if( nPass==oPass){
            localStorage.setItem("PASS",nPass);
        }

        document.getElementById("rp").onclick = location.href = 'index.html';

    }

}