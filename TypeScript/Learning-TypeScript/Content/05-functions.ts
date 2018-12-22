
function part5() {
    console.clear();

    function askForName(fullName?: string): void {
        if (fullName) {
            console.log(`<${fullName}> What is your name?`);
        }
        else {
            console.log(`What is your name?`);
        }
    }

    function reply(firstName: string = "John", lastName: string = "Smith") {
        console.log(`<${firstName} ${lastName}> My name is ${firstName} ${lastName}.`);
    }

    askForName("John Smith");
    reply();

    askForName();
    reply("James", "Madison");
}