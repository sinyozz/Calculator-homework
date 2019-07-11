$(document).ready(function() { 
	function calculate(op)
	{
		
	first=parseFloat($('#num_one').val());
		
	second=parseFloat($('#num_two').val());		
		
		
	var res;
		
		          switch(op){
			       case '+': res=+first+second;
					  break;
	        case '-': res=+first-second; 
					  break;	
			case '/': if(second==0)	    
						res="Error";	
					  else
					    res=+first/second; 
					  break;
			case '*': res=+first*second;
					  break;
		}
		$('#answer').val(res);
	}
	
	$('#add').bind('click', function(){calculate('+');}); 
	
	
	$('#subtract').bind('click', function(){calculate('-');}); 
	
	
	$('#multiply').bind('click', function(){calculate('*');});
	
	
	$('#divide').bind('click', function(){calculate('/');});
});