
//
// let obj = {class: 'Mrs. Goodson'};
// console.log(obj.class)
//
// let obj1 = {class: "6th grade history", students: 18}
//
// console.log(obj1.class, obj1.students);
// console.log(obj1.students);
//
// let arrayOfAnything = [0,1,2]

//********************************

// function lowest(passInParameter) {
//     let lowNum = passInParameter[0];
//     for (var i = 0; i < passInParameter.length; i++) {
//         if (passInParameter[i] < lowNum) {
//             lowNum = passInParameter[i]
//         }
//     }
//     return lowNum;
// }
// console.log('Lowest is', lowest(grades))

//********************************

let classes = [
    {class: "6th grade history", students: 18},
    {class: "7th grade history", students: 20},
    {class: "8th grade history", students: 22}
];

function highestNum(classes) {
    var max = classes[0].students;
    for (var i = 0; i < classes.length; i++) {
        if (classes[i].students > max) {
            max = classes[i].students
        }
    }
    return max;
}
console.log(highestNum(classes));