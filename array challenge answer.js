const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Challenge: Display the numbers using the below format:")

    let evenNumbers = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenNumbers = (arr[i])
            console.log(evenNumbers)
        } 
    }

    console.log("ODD NUMBERS:")
    let oddNumbers = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1)
        oddNumbers = (arr[i])
        console.log(oddNumbers)
    }

