let password;

while (true){
    password = parseInt(prompt('please type in your Password'));

    if (password == '123'){
        alert('Correct Password');
        break;
    }else{
        alert('Incorrect password,Please try again');
    }
}