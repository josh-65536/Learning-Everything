
function part2() {
    console.clear();

    let myBool: boolean = true;

    let myNumber: number = 1000;

    let hello: string = 'Hello';
    let helloWorld: string = `${hello} World!`;

    let myArray: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let anything: any = true;
    anything = 1000;
    anything = 'Hello World!';

    console.log(myBool);
    console.log(myNumber);
    console.log(hello);
    console.log(helloWorld);
    console.log(myArray);
    console.log(anything);

    function myFunction(name: string): void {
        console.log(`Hello, ${name}!`);
    }

    myFunction('John Smith');

    enum Direction { Up, Down, Left, Right };

    let myDirection: Direction = Direction.Up;

    console.log(myDirection);
}