console.log("\n\n------------------------------------------------ TP Part 1.1 START ------------------------------------------------");
console.log("\n\n------------------------------------------------ TP Part 1.1 END ------------------------------------------------\n\n");
console.log("\n\n------------------------------------------------ TP Part 1.2 START ------------------------------------------------");
console.log("\n\n------------------------------------------------ TP Part 1.2 END ------------------------------------------------\n\n");
console.log("\n\n------------------------------------------------ TP Part 1.3 START ------------------------------------------------");
console.log("\n\n==> Section S.1.3.1");
var myUserMap = new Map([
    ["louis.legrand@formation.fr", "Louis Legrand"],
    ["louis.legrand.junior@formation.fr", "Louis Legrand"],
    ["michel.dupont@formation.fr", "Michel Dupont"]
]);
function sendNotification(fullName, email) {
    if ((fullName != null || fullName != undefined) && (email != null || email != undefined)) {
        console.log("Hello " + fullName + " , you have received an notification from email : " + email);
    }
    else if ((fullName != null || fullName != undefined) && (email == null || email == undefined)) {
        email = "administrator@formation.fr";
        console.log("Hello " + fullName + " , you have received an notification from email : " + email);
    }
}
sendNotification(null, null);
console.log("\n\n------------------------------------------------ TP Part 1.3 END ------------------------------------------------\n\n");
console.log("\n\n------------------------------------------------ TP Part 2.1 START ------------------------------------------------");
console.log("\n\n------------------------------------------------ TP Part 2.1 END ------------------------------------------------\n\n");
console.log("\n\n------------------------------------------------ TP Part 2.2 START ------------------------------------------------");
console.log("\n\n------------------------------------------------ TP Part 2.2 END ------------------------------------------------\n\n");
