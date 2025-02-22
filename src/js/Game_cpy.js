class TablePrac{
    constructor(difficulty){
        this.diff = difficulty
        this.numsRange = {min: 0, max: 0}
        this.defineNumsRange()
        this.multiplication = {firstFactor: 0, secondFactor: 0, product: 0}
        this.calc()
    }

    defineNumsRange(){
        console.log("NUMSRANGE: "+ this.numsRange.min)
        switch (this.diff){
            case "easy":
                defineRange(2, 5)
            case "medium":
                defineRange(2, 10)
            case "hard":
                defineRange(7, 21)
        }

        function defineRange(minimum, maximum) {
            this.numsRange.min = minimum
            this.numsRange.max = maximum
        }
    }

    defineMultiplier(){
        return getRandomNumber(this.numsRange.min, this.numsRange.max)
    }

    defineMultiplicand(){
        if (this.numsRange.max <= 10){
            return getRandomNumber(1, 10)
        }else{
            return getRandomNumber(9, 21)
        }
    }

    getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    calc(){
        let multiplier = this.defineMultiplier()
        let multiplicand = this.defineMultiplicand()
        let product = multiplier * multiplicand

        this.multiplication.firstFactor = multiplier
        this.multiplication.secondFactor = multiplicand
        this.multiplication.product = product
    }
    // todo: *criar método calc que vai pegar o multir e o multndo, efetuar a operação e alterará o obj this.multiplication;
    //       *criar de alguma forma um método que gere 2 alternativas coesas, porém erradas do produto da operação;
    //       *será que devo usar static em alguns métodos?

    answers(){
        const mult = this.multiplication
        const answers = [mult.product]
        const additionalAnswers = 2

        // todo: função com um switch case numérico que vai definir o método para definir outras respostas
        //       criar alguma maneira de que não hajam respostas repetidas
        for (let i = 0; i < additionalAnswers; i++) {
            if (mult.firstFactor > 5){
                answers.push(mediumAnswers(this.getRandomNumber(0, 1)))
            }
            else{
                answers.push(EvenOrOddAddition(mult.product))
            }
        }

        function mediumAnswers(rndNumber){
            switch(rndNumber){
                case 0:
                    return multiplierAddition(mult.product)
                case 1:
                    return EvenOrOddAddition(mult.product)
            }
        }

        function multiplierAddition(num){
            if(this.getRandomNumber(0, 1) === 1){
                mult.firstFactor *= -1
            }
            return num + mult.firstFactor
        }

        function EvenOrOddAddition(num){
            if(num % 2 === 0 && num % 10 !== 0){
                return evaluateSum(num, 2)
            }else if(num % 3 === 0){
                return evaluateSum(num, 3)
            }
            return evaluateSum(num, 10)

            function evaluateSum(multiplicandNumber, numToSum){
                if(this.getRandomNumber(0, 1) === 1){
                    numToSum *= -1
                }
                return multiplicandNumber + numToSum
            }
        }

        return answers
    }
}

export class Main{
    constructor(difficulty){
        this.difficulty = difficulty
        this.build()
    }

    build(){
        const sectionPrac = document.getElementById("sectionPrac")
        let ans = new TablePrac(this.difficulty)
        const totalButtons = 3

        for (let i = 0; i < totalButtons; i++) {
            const element = document.createElement("button")
            element.id = `btn${i}`
            element.value = `${ans[i]}`
            sectionPrac.append(element)
        }
    }
}
