// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.speciality = attr.speciality;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }

    demo(sub) {
        console.log(`Today we are learning about ${sub}.`)
    }

    grade(stud, sub) {
        console.log(`${stud.name} receives a perfect score on ${sub}`);
    }
}

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }

    listSubjects() {
        this.favSubjects.forEach(element => {
            console.log(element);
        });
    }

    PRAssignment(sub) {
        console.log(`${this.name} has submitted a PR for ${sub}`);
    }

    sprintChallenge(sub) {
        console.log(`${this.name} has begun a sprint challenge on ${sub}`);
    }
}

class ProjectManager extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }

    standUp(chan) {
        console.log(`${this.name} announces to ${chan}, @channel standy times!`);
    }

    debugsCode(stud, sub) {
        console.log(`${this.name} debugs ${stud.name}'s code on ${sub}`);
    }
}

// Person - fred, john | Instructor - jim, sally | Student - chris, bob | PM's jake, janice


const fred = new Person({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
});

const john = new Person({
    name: 'John',
    location: 'Springfield',
    age: 40,
});


const jim = new Instructor({
    name: 'Jim',
    location: 'Los Angeles',
    age: 30,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const sally = new Instructor({
    name: 'Sally',
    location: 'Philadelphia',
    age: 43,
    favLanguage: 'Ruby',
    specialty: 'Back-End',
    catchPhrase: `I Like Ruby`
});


const chris = new Student({
    name: 'Chris',
    location: 'Bartlesville',
    age: 35,
    favSubjects: ['Less', 'Math', 'Java', 'Node'],
    className: 'Web23',
    previousBackground: `Programming`
});

const bob = new Student({
    name: 'Bob',
    location: 'Saint Louis',
    age: 20,
    favSubjects: ['html', 'css', 'Javascript'],
    className: 'Web23',
    previousBackground: `Web development`
});

const jake = new ProjectManager({
    name: 'Jake',
    location: 'Anaheim',
    age: 29,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `I'm your boss.`,
    gradClassName: 'CS2',
    favInstructor: 'Sally'
});

const janice = new ProjectManager({
    name: 'Janice',
    location: 'Bakersfield',
    age: 31,
    favLanguage: 'C#',
    specialty: 'Back-End',
    catchPhrase: `C# is the best`,
    gradClassName: 'CS3',
    favInstructor: 'Jim'
});

fred.speak();
john.speak();
jim.speak();
jim.demo('CS');
jim.grade(chris, 'Less');
sally.speak();
sally.demo('JS');
sally.grade(bob, 'Node');
chris.speak();
chris.listSubjects();
chris.PRAssignment('Node');
chris.sprintChallenge('Javascript');
chris.speak();
bob.listSubjects();
bob.PRAssignment('Math');
bob.sprintChallenge('Science');
jake.speak();
jake.demo('Javascript');
jake.grade(chris, 'Node');
jake.standUp('Web23');
jake.debugsCode(chris, 'Math');
janice.speak();
janice.demo('Java');
janice.grade(bob, 'HTML');
janice.standUp('Web20');
janice.debugsCode(bob, 'CSS');