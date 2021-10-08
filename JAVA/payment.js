function validate()
{
	var cardnum=document.form1.creditnum.value;
	var cpattern="[0-9]{4}[-]{1}[0-9]{4}[-]{1}[0-9]{4}[-]{1}[0-9]{4}";
	var valid=document.form1.ex1.value;
	var vpattern="[0-9]{2}[/]{1}[0-9]{2}";
	var expiry=document.form1.ex2.value;
	var expattern="[0-9]{2}[/]{1}[0-9]{2}";
	var cv=document.form1.cvv.value;
	var cvpattern="[0-9]{3}";
	if(!cardnum.match(cpattern))
	{
		alert("Enter valid card number");	
	}	
	else if(!valid.match(vpattern))
	{
		alert("Enter valid Issued date");
	}
	else if(!expiry.match(expattern))
	{
		alert("Enter valid Expiry date");
	}
	else if	(!cv.match(cvpattern))
	{
		alert("Enter valid CVV number");
	}	
	else
	{
		confirm("Please confirm before payment");
	}	
}