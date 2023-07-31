module.exports.average = (array) => {
    let sum = 0;
    array.forEach(ele=>{
        sum += ele;
    })
    return (sum/array.length).toFixed(2);
};

module.exports.grades = {
    best: 97,
    average: 56
}
console.log(module);