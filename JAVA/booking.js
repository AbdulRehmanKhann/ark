function validate2()
{
	var location = document.form2.from.value;
	var destination= document.form2.to.value;
	var numofseats1=document.form2.adults.value;
	var numofseats2=document.form2.kids.value;
	var d1=document.form2.date1.value;
	var d2=document.form2.date2.value;
	
	if (location=="")
	{
		alert("Please choose your location");
		return false;
	}	
	else if (destination==location)
	{
		alert("Please select valid Destination & Location");
		return false;
	}
	else if (d1==d2)
	{
		alert("Please select valid Departure & Returning Date");
		return false;
	}	
	else if (destination=="")
	{
		alert("Please choose your destination");
		return false;
	}
	else if (numofseats1<=0)
	{
		alert("Please select valid number of seats for Kids");
		return false;
	}
	else if (numofseats2<0)
	{
		alert("Please select valid number of seats for Children");
		return false;
	}
	else
	{
		confirm("Please confirm before payment");	
		
				
	}	
}