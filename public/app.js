function shuffle(array){
	ary = array.slice();
	for(var i = ary.length - 1; i > 0; i--){
		var r = Math.floor(Math.random() * (i + 1));
		var tmp = ary[i];
		ary[i] = ary[r];
		ary[r] = tmp;
	}
	return ary;
}
function createSecretString(len,passContainNums){
	if(passContainNums > len){
		passContainNums = len;
	}
	var letters = 'abcdefghijklmnopqrstuvwxyz';
	var numbers = '0123456789';
    var string  = letters + letters.toUpperCase() + numbers;
    var password='';
    for (var i = 0; i < (len - passContainNums); i++) {
		password += string.charAt(Math.floor(Math.random() * string.length));
    }
	for (var i = 0; i < passContainNums; i++) {
		password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
	console.log(password);
	console.log(shuffle(password.split()).join(''));
	return shuffle(password.split("")).join('');
}
function createSecretStrings(n,length,passContainNums){
	pss = new Array();
	for(i=0;i<n;i++){
		pss.push(createSecretString(length,passContainNums));
	}
	return pss;
}
angular.module('myapp',[])
	.controller('MainController',['$scope', function($scope){
		$scope.passwords = createSecretStrings(8,8,1);
		$scope.psclick = (n,len,passConNums) => {
			$scope.passwords = createSecretStrings(n,len,passConNums);
		}
	}]);
