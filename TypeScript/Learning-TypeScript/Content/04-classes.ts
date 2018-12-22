
function part4() {
    console.clear();

    class Person {
        public name: string;
        private password: string;

        constructor(name: string, password: string) {
            this.name = name;
            this.password = password;
        }

        greet(target: Person): void {
            console.log(`<${this.name}> Hello, ${target.name}!`);
        }

        revealPassword(): void {
            console.log(`<${this.name}> My password is ${this.password}.`);
        }
    }

    class PersonWithAppendix extends Person {
        constructor(name: string, password: string) {
            super(name, password);
        }

        greet(target: Person): void {
            super.greet(target);
            console.log(`<${this.name}> I have an appendix.`);
        }
    }

    let johnSmith = new Person('John Smith', 'password');
    let jamesMadison = new PersonWithAppendix('James Madison', '1234567890');

    johnSmith.greet(jamesMadison);
    jamesMadison.greet(johnSmith);

    johnSmith.revealPassword();
    jamesMadison.revealPassword();
}