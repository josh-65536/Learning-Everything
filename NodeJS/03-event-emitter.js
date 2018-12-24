var events = require('events');
var util = require('util');

// ============================================================================

var scarecrow = new events.EventEmitter();

scarecrow.on('appear', function(message) {
    console.log(message);
});

scarecrow.emit('appear', 'Boo!');

// ============================================================================

var Person = function(name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var johnSmith = new Person('John Smith');
var jamesMadison = new Person('James Madison');
var sashaGrey = new Person('Sasha Grey');
var people = [johnSmith, jamesMadison, sashaGrey];

people.forEach(function(person) {
    person.on('speak', function(message) {
        console.log(`<${person.name}> ${message}`);
    });
});

johnSmith.emit('speak', 'My name is John Smith.');
jamesMadison.emit('speak', 'The rights of persons, and the rights of property, are the objects, for the protection of which Government was instituted.');
sashaGrey.emit('speak', 'My body is my art, and it\'s also the tool that I use to make money.');