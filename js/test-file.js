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