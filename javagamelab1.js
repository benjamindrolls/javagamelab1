let grantHealth = 10;
let userHealth = 40;
let grantDeath = 0;

let userName = prompt('Enter your name challenger.');

while (userHealth > 0 && grantDeath <= 3) {
    console.log(`${userName} has ${damageUser()} health left`);
    console.log(`Grant the mighty has ${damageGrant()} health left`);


    if (grantHealth <= 0) {
        grantDeath++;
        grantHealth = 10;
    } 

}

if (grantDeath === 3) {
    console.log("You have defeated me gaaaaaaaaah")
}else if (userHealth <= 0) {
    console.log("I have defeated you muahahahahahahaha!")
} 
    



function getRandomNumber(min, max) {
    min = Math.ceil(1);
    max = Math.floor(2);
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;

}


function damageGrant() {
    grantHealth -= getRandomNumber();
    return grantHealth > 0 ? grantHealth : 0;
}

function damageUser() {
    userHealth -= getRandomNumber();
    return userHealth > 0 ? userHealth : 0;
}
