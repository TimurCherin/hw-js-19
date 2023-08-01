                                                        // ex 1
const array2 = ['apple', 'banana', 'orange', 'banana', 'grape', 'apple', 'kiwi'];
function changeArray (array) {
    const newArray = array.reduce((acc, arr) => { 
        acc.push(arr[0] + arr[arr.length - 1])
    return acc
},[])
    return newArray
}
console.log(changeArray(array2))
                                                        // ex 2
const people = [
{ name: 'John', surname: "Doe", age: 32, occupation: 'programmer' },
{ name: 'Jane', surname: "Lee", age: 26, occupation: 'teacher' },
{ name: 'Mike', surname: "Watson", age: 42, occupation: 'engineer' },
{ name: 'Emily', surname: "Brad", age: 29, occupation: 'designer' }
];
// const myArray = people.map((obj) => {return {fullName: `${obj.name} ${obj.surname}`, id: obj.age}})
const myArray = people.reduce((acc, el) => {
    acc.push({fullName: el.name + " " + el.surname, id: el.age})
    return acc
}, [])
console.log(myArray)