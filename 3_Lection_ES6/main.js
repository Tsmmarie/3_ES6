//დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს n ცალ რიცხვს (n > 2). ფუნქციამ
// უნდა დააბრუნოს 2 - ელემენტიანი მასივი,
// სადაც პირველი ელემენტია პირველი და
// მეორე პარამეტრის ჯამი, ხოლო მეორე
// ელემენტი - მესამე ელემენტიდან
// დაწყებული ყველა დანარჩენის ნამრავლი

function numF(...numbers){
    if (numbers.lengt <= 2) {return 'please enter more than 2 numbers'}


const sumFirstTwo = numbers[0] + numbers[1];
const productRest = numbers 
        .slice(2)
        .reduce((accumulator, currentValue) => accumulator * currentValue, 1);
        return [sumFirstTwo, productRest];
}        

const result = numF(4, 1, 3, 1, 2);
console.log("result:", result);


///////////////////////////////////////////////


// დავუშვათ გვინდა ობიექტიდან წავიკითხოთ
// შემდეგი ველი: user.banks[2].address.city.
// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user ობიექტს და დააბრუნებს cityს. გამოიყენე destructuring-ი. თუ ასეთი
// ველი არ არსებობს უნდა დაბრუნდეს
// undefined


const user ={
    banks: [
        {},
        {},
        {
            address: {
                city: 'example city'
            }
        }
    ]
};

function getCityFromUser(user){
    const { banks } = user;
    if (banks && banks[2] && banks[2].address){
        const { city } = banks[2].address;
        return city;
    }

    return undefined;
}


////////////////////////////////////


// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს ნებისმიერ ობიექტს და
// დააბრუნებს იგივე მნიშვნელობების მქონე
// ახალ (განსხვავებულ) ობიექტს

// გაითვალისწინე, რომ თუ ობიექტში კიდევ
// სხვა ობიექტებია იმათი ასლებიც უნდა
// შეიქმნას
// ● გამოიყენეთ (...) ოპერატორი


const originalObject = {
    name: 'mari',
    age: 20,
    address: {
        city: 'Tbilisi',
        country: 'Georgia'
    },
    hobbies: ['programming', 'dancing'],
    nestedObject: {
        prop1: 'value1',
        prop2: 'value2'
    }
};

function deepcopywithSpread(obj){
    const copiedObject = {
        ...obj,
        address: {...obj.address},
        hobbies: [...obj.hobbies],
        nestedObject: {...obj.nestedObject}
    };
    return copiedObject;
}
