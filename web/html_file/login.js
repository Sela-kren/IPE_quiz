window.onload = function(){
    document.getElementById("login").onclick = function(){        
        var Lname = document.getElementById("lemail").value; 
        console.log(Lname);
        var Lpass = document.getElementById("lpass").value;
        console.log(Lpass);
        

        const name = localStorage.getItem("EMAL");
        


        if(Lname == name){
            console.log("hello my name is jeff")
            document.getElementById("login").onclick = location.href ='listuser.html';
        }
    }
}

