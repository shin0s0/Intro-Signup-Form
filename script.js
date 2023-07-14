
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
      fname.classList.add('error');
      event.preventDefault();
    }  
    else{
      l1.style.display="none";
      fname.style.borderColor = '';
        fname.classList.remove('error');
    }
    
     if ( lname.value.trim() === "") {
      l2.style.display="block";
      lname.style.borderColor = 'hsl(0, 59%, 61%)';
      lname.classList.add('error');
      event.preventDefault();
    }
    else{
      l2.style.display="none";
      lname.style.borderColor = '';
      lname.classList.remove('error')
    }
    
    if (email.value.trim() === "" || !email.value.includes("@gmail.com")) {
      l3.style.display="block";
    email.style.borderColor = 'hsl(0, 59%, 61%)';
    email.classList.add('error');
      event.preventDefault();
    }   
    else{
      l3.style.display="none";
      email.style.borderColor = '';
     email.classList.remove('error');
    }
    
    if (password.value.trim() === "") {
      l4.style.display="block";
      password.style.borderColor = 'hsl(0, 59%, 61%)';
      password.classList.add('error');
      event.preventDefault();
    }
    else{
      l4.style.display="none";
      password.style.borderColor = '';
      password.classList.remove('error');
    }
  }
  else{
     document.getElementById("form").submit();
    }
 });
 
