 
var name=document.myform.name.value;  
var password=document.myform.password.value;  
 
 function validateform(){  
if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
}else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  } 
}