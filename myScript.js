function ValidateName()
{
var regex=/^[a-zA-Z\s\'\-]{2,15}$/;
var inp=document.getElementById("fn").value;
if(regex.test(inp))
	{
 		document.getElementById("msg1").style.color='green';
 		document.getElementById("msg1").innerHTML="Valid";
 		return(true);
	}
else
	{
		document.getElementById("msg1").style.color="red";
 		document.getElementById("msg1").innerHTML="Must have 2-15 characters";
 		return(false);
	}
}



function ValidateLastName()
{
var regex= /^[a-zA-Z\s\'\-]{2,25}$/;
var inp=document.getElementById("ln").value;
if(regex.test(inp))
{
 document.getElementById("msg2").style.color='green';
 document.getElementById("msg2").innerHTML="Valid";
 return(true);
}
else
{
document.getElementById("msg2").style.color="red";
 document.getElementById("msg2").innerHTML="Must have 2-25 characters";
 return(false);
}
}


function validatephonenumber()
{
var regex= /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

var inp=document.getElementById("pnumber").value;
if(regex.test(inp))
{
 document.getElementById("msg3").style.color='green';
 document.getElementById("msg3").innerHTML="Valid";
 return(true);
}
else
{
document.getElementById("msg3").style.color="red";
 document.getElementById("msg3").innerHTML="Must be xxx-xxx-xxxx ";
 return(false);
}
}



function validateusername()
{
var regex= /^[a-zA-Z\s\'\-]{2,25}$/;
var inp=document.getElementById("username").value;
if(regex.test(inp))
{
 document.getElementById("msg4").style.color='green';
 document.getElementById("msg4").innerHTML="Valid";
 return(true);
}
else
{
document.getElementById("msg4").style.color="red";
 document.getElementById("msg4").innerHTML="Must have 2-25 characters";
 return(false);
}
}
















