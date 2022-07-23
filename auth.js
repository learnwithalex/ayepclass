	
	$("#login").click(function(){


	const username = $("#uname").val();
		const pwd = $("#pwd").val();

		const r_uname = 'john';
		const r_pwd = 123456;
 
		if(username === ''){
			document.getElementById('message').innerHTML = 'Please Enter a Username';
			$("#success").hide();
			$("#message").show();

		}else{
			if(username == r_uname){
				if(pwd == r_pwd){
					$("#success").show();
					document.getElementById('success').innerHTML = 'Welcome John';
					$("#message").hide();
					window.location = 'welcome.html';
				}else{
					$("#message").show();
					document.getElementById('message').innerHTML = 'No User Found For Your Credentials';
					$("#success").hide();
				}
			}else{
				$("#message").show();
				document.getElementById('message').innerHTML = 'Incorrect Username';
				$("#success").hide();
			}
		}



		




	});