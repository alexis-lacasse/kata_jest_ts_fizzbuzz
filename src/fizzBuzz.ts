export class FizzBuzz {

    fizz = "Fizz";
    buzz = "Buzz";
    fizzBuzz = "FizzBuzz";

    answerFor(arg0: number): string | number {
        
        if (isFizzBuzz(arg0)) 
            return this.fizzBuzz;

        else if(isFizz(arg0)) return this.fizz;

        else if (isBuzz(arg0)) return this.buzz;

        return arg0;
    }
}

function isFizz(arg0: number) {
    return arg0 % 3 === 0;
}

function isBuzz(arg0: number) {
    return arg0 % 5 === 0;
}

function isFizzBuzz(arg0: number) {
    return arg0 % 3 === 0 && arg0 % 5 === 0;
}