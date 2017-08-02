window.onload = function(){
	getCode();
}

function checkInput(){
	if (checkUsername()&&checkCode()){
		var loginname = $(".userName").val();
		var loginpwd = $(".passWord").val();
		if(localStorage.getItem(loginname)==null){
			alert("该号码未被注册");
			return false;
		}else{
			if(localStorage.getItem(loginname)!=loginpwd){
				alert("用户名或密码错误");
				return false;
			}else{
				localStorage.setItem("nowlogin",loginname);
				alert("登录成功");
			}
		}
	}
	return checkUsername()&&checkCode();
}
function checkUsername(){
	var reg=/^1\d{10}$/;
	if(reg.test($(".userName").val())){
		$(".hint_userName").html("用户名必须填写");
		$(".hint_userName").css("color","green");
		$(".li_userName,.userName").css("border-color","green");
		$(".li_userName").css("background-color","#dff0d8");
		$(".ul_username i").css("color","#3c763d");
		return true;
	}else{
		$(".hint_userName").html("用户名输入有误");
		$(".hint_userName").css("color","red");
		$(".li_userName,.userName").css("border-color","#b76260");
		$(".li_userName").css("background-color","#f2dede");
		$(".ul_username i").css("color","#b76260");
		return false;
	}
}
function checkPassword(){
	if($(".passWord").val()!=""){
		$(".hint_passWord").html("密码必须填写");
		$(".hint_passWord").css("color","green");
		$(".li_passWord,.passWord").css("border-color","green");
		$(".li_passWord").css("background-color","#dff0d8");
		$(".ul_password i").css("color","#3c763d");
		return true;
	}else{
		$(".hint_passWord").html("密码输入有误");
		$(".hint_passWord").css("color","red");
		$(".li_passWord,.passWord").css("border-color","#b76260");
		$(".li_passWord").css("background-color","#f2dede");
		$(".ul_password i").css("color","#b76260");
		return false;
	}
}

function getCode(){
		// alert(1);
	var code="";//建立空字符串
	var codeLength=4;
	var arr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	for(var i=0;i<=9;i++){
		arr.push(i);
	}
	for(var j=0;j<codeLength;j++){
		var index=Math.floor(Math.random()*36);
		code+=arr[index];
	}
	// alert(code);
	console.log(code);
	$(".li_getCode").html(code);
	$(".li_getCode").css("color","#000").css("font-size","20px");
}


function checkCode(){
	if($(".code").val()!=$(".li_getCode").html()){
		$(".hint_code").html("输入错误");
		$(".hint_code").css("color","red");
		$(".code,.li_getCode").css("border-color","#b76260");
		return false;
	}else if( $(".code").val().trim() =="" ){
		$(".hint_code").html("验证码必须填写");
		$(".hint_code").css("color","red");
		return false;
	}
	else{
		$(".hint_code").html("输入正确");
		$(".hint_code").css("color","green");
		$(".code,.li_getCode").css("border-color","green");
		return true;
	}
}

var state=1;
function eye(){
	if(state%2!=0){
		$(".icon-biyan").attr("class","icon iconfont icon-zhengyan");
		$(".passWord")[0].type="text";
	}else{
		$(".icon-zhengyan").attr("class","icon iconfont icon-biyan");
		$(".passWord")[0].type="password";
	}
	state++;
}








