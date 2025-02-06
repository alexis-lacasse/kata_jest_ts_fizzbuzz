import { FizzBuzz } from "../src/fizzBuzz";

const fizzBuzz = new FizzBuzz();
var result:number|string;

for (let i = 1; i <= 100; i++){
 
    let expected: string | number = 0;

    if ((i % 3 === 0 && i % 5 === 0) || (i.toString().includes("3") && i.toString().includes("5")))
        expected = "FizzBuzz";

    else if (i % 3 === 0 || i.toString().includes("3")) 
        expected = "Fizz";

    else if (i % 5 === 0 || i.toString().includes("5"))
         expected = "Buzz";

    else expected = i;

    it("Un argument de " + i + " retourne " + expected + ".", () => {
        
        // Act.
        result = fizzBuzz.answerFor(i);

        // Assert.
        expect(result).toEqual(expected);
    })

}