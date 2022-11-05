

const arrayOfNames = ["Anil", "Shantanu", "Nutan", "Suyog", "DD", "Pradnya"];
arrayOfNames.sort();
console.log(arrayOfNames);


const arrayOfNumbers = [22, 36, 50, 100, 600, 77, 455];
arrayOfNumbers.sort( (first, second) => {
    return (first > second ? 1 : -1)
});
console.log(arrayOfNumbers);