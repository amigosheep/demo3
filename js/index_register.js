function checkInput(){
	if(checkPhonenum()&&checkPassword()&&checkRepassword()&&checkCode()){
		var registername = $(".phoneNum").val();
		var registerpwd = $(".passWord").val();
		if(localStorage.getItem(registername)){
        	alert("已经被注册");
        	return false;
		}else{
			localStorage.setItem(registername,registerpwd);
			alert("注册成功");
		}
	}else{
			alert("输入有误");	
	}
	return checkPhonenum()&&checkPassword()&&checkRepassword()&&checkCode();
}
function checkPhonenum(){
	var regPhonenum=/^1\d{10}$/;
	if(regPhonenum.test($(".phoneNum").val())){
		$(".hint_phoneNum").html("输入正确");
		$(".hint_phoneNum").css("color","green");
		$(".li_Phonenum,.phoneNum").css("border-color","green");
		$(".li_Phonenum").css("background-color","#dff0d8");
		$(".li_Phonenum i").css("color","#3c763d");
		return true;
	}else{
		$(".hint_phoneNum").html("手机号码不合法");
		$(".hint_phoneNum").css("color","red");
		$(".li_Phonenum,.phoneNum").css("border-color","#b76260");
		$(".li_Phonenum").css("background-color","#f2dede");
		$(".li_Phonenum i").css("color","#b76260");
		return false;
	}
}
function checkPassword(){
	var regPassword=/^[\da-zA-Z]{6,}$/;
	// 密码必须是由数字和字母组成，长度6-14
	if(regPassword.test($(".passWord").val())){
		$(".hint_passWord").html("输入正确");
		$(".hint_passWord").css("color","green");
		$(".li_passWord,.passWord").css("border-color","green");
		$(".li_passWord").css("background-color","#dff0d8");
		$(".ul_passWord i").css("color","#3c763d");
		return true;
	}else{
		$(".hint_passWord").html("密码是由数字和字母组成,长度最少6位");
		$(".hint_passWord").css("color","red");
		$(".li_passWord,.passWord").css("border-color","#b76260");
		$(".li_passWord").css("background-color","#f2dede");
		$(".ul_passWord i").css("color","#b76260");
		return false;
	}
}
function checkRepassword(){
	var regrepassWord=/^[\da-zA-Z]{6,}$/;
	if($(".passWord").val()!=$(".rePassword").val()){
		$(".hint_rePassword").html("两次密码不一致");
		$(".hint_rePassword").css("color","red");
		$(".li_repassWord,.rePassword").css("border-color","#b76260");
		$(".li_repassWord").css("background-color","#f2dede");
		$(".ul_repassWord i").css("color","#b76260");
		return false;
	}else if(!regrepassWord.test($(".rePassword").val())){
		$(".hint_rePassword").html("密码是由数字和字母组成,长度最少6位");
		$(".hint_rePassword").css("color","red");
		return false;
	}else{
		$(".hint_rePassword").html("两次密码一致");
		$(".hint_rePassword").css("color","green");
		$(".li_repassWord,.rePassword").css("border-color","green");
		$(".li_repassWord").css("background-color","#dff0d8");
		$(".ul_repassWord i").css("color","#3c763d");
		return true;
	}

}

function refresh(){
	getCode();
	var time=15;
	$(".code_btn").val(time+"秒后重新获取");
	time--;
	$(".code_btn").attr("disabled","disabled");
	var timer=setInterval(function(){
		$(".code_btn").val(time+"秒后重新获取");
		
		time--;
		if(time<0){
			clearInterval(timer);
			$(".li_getCode").css("display","none");
			$(".li_getCode").html("");
			$(".li_icon").css("width","10%");
			$(".code_btn").css("width","90%");
			$(".code_btn").val("获取验证码");
			$(".code_btn").removeAttr("disabled");
		}
	},1000);
}

function getCode(){
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
	$(".li_icon").css("width","14%");
	$(".code_btn").css("width","95%");
	$(".li_getCode").show();
	$(".li_getCode").html(code);
}
function checkCode(){
	if($(".input_code").val()!=$(".li_getCode").html()){
		$(".hint_code").html("输入错误");
		$(".hint_code").css("color","red");
		$(".li_icon,.input_code").css("border-color","#b76260");
		$(".li_icon").css("background-color","#f2dede");
		$(".ul_code i").css("color","#b76260");
		return false;
	}else if($(".input_code").val().trim()==""){
		$(".hint_code").html("验证码必填");
		$(".hint_code").css("color","red");
		return false;
	}
	else{
		$(".hint_code").html("输入正确");
		$(".hint_code").css("color","green");
		$(".li_icon,.input_code").css("border-color","green");
		$(".li_icon").css("background-color","#dff0d8");
		$(".ul_code i").css("color","#3c763d");
		return true;
	}
}
// $(function(){
// $(".register_btn").click(function(){
// 	alert(1);
// 	var registername = $(".phoneNum").val();
// 	var registerpwd = $(".passWord").val();
// 	if(localStorage.getItem(registername)){
//         alert("已经被注册");
//         return;
// 	}else{
// 		localStorage.setItem(registername,registerpwd);
// 		alert("注册成功");
// 	}
// });
// });


