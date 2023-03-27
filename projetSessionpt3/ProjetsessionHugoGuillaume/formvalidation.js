function validateForm() {
    let email=document.loginForm.email.value;  
    let password=document.loginForm.password.value;  
    if (email==null || email==""){  
    alert("Email ne peut pas être vide");  
    return false;  
    }else if(password.length<6){  
    alert("Le mot de passe doit contenir au moins 6 charactères.");  
    return false;  
  }
}
  function validateFormInscription(){  
    let email=document.inscriptionForm.email.value;  
    let password=document.inscriptionForm.password.value;  
    let secondpassword=document.inscriptionForm.password2.value; 
    if (email==null || email==""){  
    alert("Email ne peut pas être vide");  
    return false;  
    }else if(password.length<6){  
    alert("Le mot de passe doit contenir au moins 6 charactères.");  
    return false;  
  }  
    if(password==secondpassword){  
    return true;  
    }  
    else{  
    alert("Les mots de passe doivent être identique");  
    return false;  
    }  
    }  