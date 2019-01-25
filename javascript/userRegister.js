function checkALL(){
	var name = document.getElementById("sysUser_name");
	var password=document.getElementById("sysUser_Password");
	var password1=document.getElementById("password1");
	var phone=document.getElementById("phone");
	var a456=document.getElementById("456");
	
	if(name.value == "")
	{
		var nameMsg=document.getElementById("error_sysUser_name");
		nameMsg.innerHTML="姓名不能为空";
		nameMsg.style="display: show;";
	}
	if(password.value == "")
	{
		var phoneMsg=document.getElementById("error_sysUser_Password");
		phoneMsg.innerHTML="密码不能为空";
		phoneMsg.style="display: show;";
	}
	if(password1.value == "")
	{
		var password1Msg=document.getElementById("error_password1");
		password1Msg.innerHTML="确认密码不能为空";
		password1Msg.style="display: show;";
	}
	else if(password.value != password1.value){
		var nameMsg=document.getElementById("error_password1");
		nameMsg.innerHTML="密码和确认密码不一致";
		nameMsg.style="display: show;";
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
	if(a456.value == "")
	{
		var nameMsg=document.getElementById("error_456");
		nameMsg.innerHTML="手机验证码不能为空";
		nameMsg.style="display: show;";
	}
	
    if(name.value=="" || password.value=="" || password1.value=="" || phone.value=="" || phone.value.length != 11 || isNaN(phone.value) || a456.value==""){
        return false;
    }else{
        return true;
    }
}
function nameCheck(){
	var name=document.getElementById("sysUser_name");
	if(name.value == "")
	{
		var nameMsg=document.getElementById("error_sysUser_name");
		nameMsg.innerHTML="姓名不能为空";
		nameMsg.style="display: show;";
	}
	else
	{
		var nameMsg=document.getElementById("error_sysUser_name");
		nameMsg.style="display: none;";
	}
}
function nameCheck1(){
	var name=document.getElementById("sysUser_Password");
	if(name.value == "")
	{
		var nameMsg=document.getElementById("error_sysUser_Password");
		nameMsg.innerHTML="密码不能为空";
		nameMsg.style="display: show;";
	}
	else
	{
		var nameMsg=document.getElementById("error_sysUser_Password");
		nameMsg.style="display: none;";
	}
}
function nameCheck2(){
	var name1=document.getElementById("sysUser_Password");
	var name=document.getElementById("password1");
	if(name.value == "")
	{
		var nameMsg=document.getElementById("error_password1");
		nameMsg.innerHTML="确认密码不能为空";
		nameMsg.style="display: show;";
	}
	else if(name.value != name1.value){
		var nameMsg=document.getElementById("error_password1");
		nameMsg.innerHTML="密码和确认密码不一致";
		nameMsg.style="display: show;";
	}
	else
	{
		var nameMsg=document.getElementById("error_password1");
		nameMsg.style="display: none;";
	}
}
function nameCheck3(){
	var name=document.getElementById("phone");
	if(name.value == "")
	{
		var nameMsg=document.getElementById("phone1");
		nameMsg.innerHTML="手机号码不能为空";
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
function nameCheck5(){
	var name=document.getElementById("456");
	if(name.value == "")
	{
		var nameMsg=document.getElementById("error_456");
		nameMsg.innerHTML="手机验证码不能为空";
		nameMsg.style="display: show;";
	}
	else
	{
		var nameMsg=document.getElementById("error_456");
		nameMsg.style="display: none;";
	}
}