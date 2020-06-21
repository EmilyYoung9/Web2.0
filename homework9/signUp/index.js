//中山大学 数据科学与计算机学院 18级软件工程3班 杨玲 18342115  2019.12


// 这个js是在客户端进行信息格式输入检测的

//检查用户名
function checkUsernameValid() {
	var name = $("#txtUsername").val();
	if (/^[a-zA-Z]\w{5,17}/.test(name)) {
		return true;
	} else {
		$("#txtUsername").next("span").css("color", "red").text("Username Invalid");
		return false;
	}
}

//检查学号
function checkStudentidValid() {
	var id = $("#txtStudentid").val();
	if (/^[1-9][0-9]{7}/.test(id)) {
		return true;
	} else {
		$("#txtStudentid").next("span").css("color", "red").text("Studentid Invalid");
		return false;
	}
}

//检查电话
function checkPhoneValid() {
	var phone = $("#txtPhone").val();
	if (/^[1-9][0-9]{10}/.test(phone)) {
		return true;
	} else {
		$("#txtPhone").next("span").css("color", "red").text("Phone Invalid");
		return false;
	}
}

//检查邮箱
function checkEmailValid() {
	var email = $("#txtEmail").val();
	if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email)) {
		return true;
	} else {
		$("#txtEmail").next("span").css("color", "red").text("Email Invalid");
		return false;
	}
}


function checksubmit() {
	$("#txtUsername").next("span").css("color", "red").text("");
	$("#txtStudentid").next("span").css("color", "red").text("");
	$("#txtPhone").next("span").css("color", "red").text("");
	$("#txtEmail").next("span").css("color", "red").text("");
	return checkUsernameValid()&&checkStudentidValid()&&checkPhoneValid()&&checkEmailValid();
}
