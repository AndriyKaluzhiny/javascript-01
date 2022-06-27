'use strict';

// task 1


let admin = "John";
let name = admin;

console.log(name);


// task 2


console.log();

let login = 'admin';
let password = 'TheMaster';

if (login == 'cancel') {
    console.log("Canceled");
    close();
} else if (login == 'admin') {
    if (password == 'cancel') {
        console.log("Canceled");
    } else if (password == 'TheMaster') {
        console.log("Welcome!");
    } else {
        console.log("wrong password");
    }

} else {
    console.log("I don't know you");
}

// task 3(Max) using previous variables login and password

console.log();

switch (login) {
    case 'admin': {
            switch (password) {
                case 'TheMaster': {
                    console.log("Welcome!");
                    break;
                }

                case 'cancel': {
                    console.log("Canceled");
                    break;
                }

                default: {
                    console.log("Wrong password");
                }
            }
            break;
        }

        case 'cancel': {
            console.log('Canceled');
            break;
        }

        default: {
            console.log("I'dont know you");
        }
}
