function calculateMoney(ticketSale) {
    const totalEarned = ticketSale * 120

    const guardCost = 500;
    const stuffCost = 8 * 50;
    const totalExpenditure = guardCost + stuffCost;

    const bakerHas = totalEarned - totalExpenditure;

    if (ticketSale < 0) {
        return 'Invalid Number';
    }
    return bakerHas;
}



function checkName(name) {
    if (typeof name === 'string') {

        name = name.toLowerCase();
        const special = ['a', 'y', 'i' , 'e' , 'o' , 'u', 'w'];

        const str = name.split('');
    
        if (special.includes(str.pop())) {
            return 'Good Name';
        }
        else if (str !== special.includes(str.pop())) {
            return 'Bad Name'
        }
    }
    else{
        return 'invalid'
    }
}



function deleteInvalids(array) {
    if (array.constructor === Array) {
        const num = [];
        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] === 'number') {
                num.push(array[i]);
            }
        }
        const filteredArray = num.filter(num => !isNaN(num))
        return filteredArray;
    }
    else{
        return 'Enter an array';
    }
}



function password(obj) {
    if (obj.constructor === Object) {
        if (obj.hasOwnProperty('name') && obj.hasOwnProperty('birthYear') && obj.hasOwnProperty('siteName')) {

            if (obj.name !== "" && obj.birthYear !== undefined && obj.siteName !== "") {

                const numToString = obj.birthYear.toString();

                if (numToString.length === 4) {
                    const addAll = obj.siteName + '#' + obj.name + '@' + obj.birthYear;
                    const letter = addAll.split('');

                    if (letter.length > 0) {
                        letter[0] = letter[0].toUpperCase();
                        const output = letter.join('');
                        return output;
                    }
                }
                else {
                    return 'invalid'
                }
            }
            else {
                return "invalid";
            }
        }
        else{
            return 'invalid';
        }
    }
    else{
        return 'invalid'
    }
}



function monthlySavings(arr , livingCost) {
    if (Array.isArray(arr) && typeof livingCost === 'number') {

        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] >= 3000){
                sum+=arr[i] * 0.8
            }
            else{
                sum+=arr[i]
            }
        }
        let savings = sum - livingCost;
        if (savings < 0) {
            return 'earn more';
        }
        return savings;
    }
    else {
        return 'invalid input'
    }
}