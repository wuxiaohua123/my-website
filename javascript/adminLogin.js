function checkALL(){
	var password=document.getElementById("password");
	var phone=document.getElementById("phone");
	if(password.value == "")
	{
		var phoneMsg=document.getElementById("password1");
		phoneMsg.innerHTML="密码不能为空";
		phoneMsg.style="display: show;";
	}
	if(phone.value == "")
	{
		var nameMsg=document.getElementById("phone1");
		nameMsg.innerHTML="手机号码不能为空";
		nameMsg.style="display: show;";
	}
	else if(phone.value.length != 11)
	{
		var nameMsg=document.getElementById("phone1");
		nameMsg.innerHTML="请输入11位手机号码";
		nameMsg.style="display: show;";
	}
	else if(isNaN(phone.value)){
		var nameMsg=document.getElementById("phone1");
		nameMsg.innerHTML="请确认手机号码是否有非数字字符";
		nameMsg.style="display: show;";
	}
	
    if(password.value=="" || phone.value=="" || phone.value.length != 11 || isNaN(phone.value)){
        return false;
    }else{
        return true;
    }
}
function nameCheck3(){
	var name=document.getElementById("phone");
	if(name.value == "")
	{
		var nameMsg=document.getElementById("phone1");
		nameMsg.innerHTML="手机号不能为空";
		nameMsg.style="display: show;";
	}
	else if(name.value.length != 11)
	{
		var nameMsg=document.getElementById("phone1");
		nameMsg.innerHTML="请输入11位手机号码";
		nameMsg.style="display: show;";
	}
	else if(isNaN(name.value)){
		var nameMsg=document.getElementById("phone1");
		nameMsg.innerHTML="请确认手机号码是否有非数字字符";
		nameMsg.style="display: show;";
	}
	else
	{
		var nameMsg=document.getElementById("phone1");
		nameMsg.style="display: none;";
	}
}
function nameCheck4(){
	var name=document.getElementById("password");
	if(name.value == "")
	{
		var nameMsg=document.getElementById("password1");
		nameMsg.innerHTML="密码不能为空";
		nameMsg.style="display: show;";
	}
	else
	{
		var nameMsg=document.getElementById("password1");
		nameMsg.style="display: none;";
	}
}