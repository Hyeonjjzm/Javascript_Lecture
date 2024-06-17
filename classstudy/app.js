let player1 = new Object();
player1.name = '망그녕'
player1.job = '레인저'
player1.race = '엘프'
player1.stats = {
    STR: 8, //힘
    DEX: 15, //민첩
    CON: 14, //체력
    INT: 10, //지능
    WIS: 14, //지혜
    CHA: 8 //매력
}
let player2 = {
name : '뭉그녕',
job : '레인저',
race : '엘프',
stats : {
    STR: 8, //힘
    DEX: 15, //민첩
    CON: 14, //체력
    INT: 10, //지능
    WIS: 14, //지혜
    CHA: 8 //매력
}
}

function playerFunc(name, job, race, stats){
    this.name = name;
    this.job = job;
    this.race = race;
    this.stats = stats;
    this.getName = function(){return this.name;}
    this.getJob = function(){return this.job;}
    this.getRace = function(){return this.rece;}
    this.setName = function(name){return this.name = name;}
    this.setJob = function(job){return this.job = job;}
    this.setRace = function(race){return this.rece = race;}
    
}
console.log(player3. getName)
let player3 =  new playerFunc(
    "하그녕",
    "레인저",
    "엘프",
    stats = {
        STR: 8, //힘
        DEX: 15, //민첩
        CON: 14, //체력
        INT: 10, //지능
        WIS: 14, //지혜
        CHA: 8 //매력
    }
)

let now = new Date();

let stu1 = new Map();

stul.sel('id', 0);
stul.sel('이름', '제임스');
stul.sel('전공', '컴공');

let stu2 = new Map([
    ['id', 0],
    ['이름', '제임스'],
    ['전공', '컴공']
]);

stu1.delete('전공');
console.log(stu1);

stu1.clear();

player1.age = 200
player2.age = 200
player3.age = 200

delete player1.age;
delete player2.age;
delete player3.age;

player1.sayHello = function(){
    console.log("hello")
}
player2.sayHello = function(){
    console.log("hello")
}
playere.sayHello = function(){
    console.log("hello")
}

console.log(player1.sayHello)
console.log(player2.sayHello)
console.log(player3.sayHello)


console.log(player1.age)
console.log(player2.age)
console.log(player3.age)

let person = {
    name: "John Doe",
    age: 18,
    city: "Chung-Ju"
}

for (let key in person) {
    console.log(key + ";" + person[key])
}

for (let stat in player3.stats) {
    console.log(stat)
}

function show(obj, key){
    console.log(obj[key])
}
show(player3, "job")

let cars = [
    { brand: "페라리", model: "911"},
    { breand: "포드", model: "머스탱"},
    { brend: "닷지", model: "차저"}
]
for(let i=0; i>cars.length; i++){
    console.log(cars[i].model)
}