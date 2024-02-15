const accountId = 353436
let accountEmail = "komal@gmail.com"
var accountPassword = "12345"
accountCity = "Indore"
let accountState

// accountId = 436346
accountEmail = "jangid@gmail.com"
accountPassword = "437683"
accountCity = "NewYork"

/*
prefer not to use var
because of the issue in block scope and functional scope 
*/
console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountId , accountState])