function isArithmeticProgession(numbers) {
    // Check if the array has less than 2 elements
    if (numbers.length < 2) {
        return false;
    }

    // Calculate the difference between the first two elements
    const diff = numbers[1] - numbers[0];

    // Check if the difference is the same between all elements
    for (let i = 1; i < numbers.length; i++) {
        //
        if (numbers[i] - numbers[i - 1] !== diff) {
            return false;
        }
    }
    return true;
}