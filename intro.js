
    document.getElementById("submit").addEventListener("click", function(event) 
   {
    const fname = document.getElementById("f-name");
    const lname = document.getElementById("l-name");
    const email = document.getElementById("email");
    const password = document.getElementById("pass");
    let l1=document.getElementById('l1');
    let l2=document.getElementById('l2');
    let l3=document.getElementById('l3');
    let l4=document.getElementById('l4');

    if(l1,l2,l3,l4)
  {
     if (fname.value.trim() === "") {
      l1.style.display="block";
      fname.style.borderColor = 'hsl(0, 59%, 61%)';
      event.preventDefault();
    }  
    else{
      l1.style.display="none";
      fname.style.borderColor = '';
    }
    
     if ( lname.value.trim() === "") {
      l2.style.display="block";
      lname.style.borderColor = 'hsl(0, 59%, 61%)';
      event.preventDefault();
    }
    else{
      l2.style.display="none";
      lname.style.borderColor = '';
    }
    
    if (email.value.trim() === "" || !email.value.includes("@gmail.com")) {
      l3.style.display="block";
    email.style.borderColor = 'hsl(0, 59%, 61%)';
      event.preventDefault();
    }   
    else{
      l3.style.display="none";
      email.style.borderColor = '';
    }
    
    if (password.value.trim() === "") {
      l4.style.display="block";
      password.style.borderColor = 'hsl(0, 59%, 61%)';
      event.preventDefault();
    }
    else{
      l4.style.display="none";
      password.style.borderColor = '';
    }
  }
  else{
     document.getElementById("form").submit();
    }
 });
 
