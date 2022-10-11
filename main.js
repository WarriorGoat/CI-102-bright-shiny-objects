// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

//Function Library

function createUser(firstName,lastName) {
    let student1 = {
        firstName: "Mesi",
        lastName: "Kaleziq"
    }
    return student1;
}

function setAge(user, age) {
    user.age=age;
    return user;
}

function incrementAge(user) {
    user.age=user.age+1;
    return user;
}

function fixCar (car) {
    car.needsMaintenance = false;
    return car;
}

function addGrades(student, newGrades) {
    student.grades = student.grades.concat(newGrades);
    return student;
}

function getDataType(obj, key) {
    type = typeof(obj[key]);
    return type;
}

function addTodo(toDoList, newTask) {
    toDoList.push(newTask);
    return toDoList;
}

function addSong(play, song){
    play.songs.push(song); 
    play.duration=play.duration+song.duration; 
    return play
}

function updateReportCard(report,newGrade){
    report.grades.push(newGrade);// add new grade to array
    let hG = report.grades[0] //initializes highest score
    let lG = report.grades[0] //initializes lowest score
    let sum=0 //initializes sum at zero

    for(let i = 0; i<report.grades.length; i++){
        sum = sum + report.grades[i]
        if (report.grades[i]<report.grades[i+1] && report.grades[i]<lG){lG=report.grades[i];} 
        else if (report.grades[i]>report.grades[i+1] && report.grades[i+1]<lG){lG=report.grades[i+1];} 
        else if (report.grades[i]>report.grades[i+1] && report.grades[i]>hG){hG=report.grades[i];}
        else if (report.grades[i]<report.grades[i+1] && report.grades[i+1]>hG){hG=report.grades[i+1];}
    }//find highest and lowest values and sums all scores together

    avg = sum/(report.grades.length); //calculates average grade
    avg = Number((Math.round(avg * 2) / 2).toFixed(1)) //rounds average grade to nearest .5 or 1
   
    report.lowestGrade=lG; //assigns lowest score to report card
    report.highestGrade=hG; //assigns highest score to report card
    report.averageGrade=avg; //assigns average score to report card.

    return report
}






// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
