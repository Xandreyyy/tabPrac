class Answers{
    constructor(originalAnswer, additionalsAnswers){
        this.rAnswer = originalAnswer
        this.answers = new Array()
        this.addtAnswers = additionalsAnswers
        this.loop()
        // todo: refatorar o código para que deixe de ser linguiça;
        //       criar um método que tenha verifica se é par, então vai adicionar ou subtrair 2, senão, vice-versa com o número 3
    }

    multiplyByTen(numToMultiply){
        const rAnswerStringified = `${numToMultiply}`
        const negativeStrLen = rAnswerStringified.length * -1
        const randomNegativeIndex = this.getRandomNegativeIndex(negativeStrLen)
        let integerAcc = 1
        let integerOfRightAnswer = 0

        if (numToMultiply <= 10){
            this.answers.push(this.addOrSubtractIfOddOrEven(numToMultiply))
            return
        }

        for (let i = -1; i >= negativeStrLen; i--){
            if (i != -1){
                integerAcc *= 10
            }
            if (i === randomNegativeIndex){
                integerOfRightAnswer += parseInt(rAnswerStringified.at(i)) * integerAcc

                while (this.answers.length < this.addtAnswers){
                    let ans = this.addOrSubtract(numToMultiply, integerOfRightAnswer)
                    if (!this.answers.includes(ans)){
                        this.answers.push(ans)
                    }
                }
            }
        }
    }

    isPrime(num){
        if(num <= 1){
            return false
        }
        for (let i = 2; i <= num * 2; i++){
            if (num % i === 0){
                return false
            }
        }
        return true
    }

    loop(){
        this.multiplyByTen(this.rAnswer)
        console.log(this.answers)
    }
    // 730.560
    // 2.366
    // 947
    // 39

    getRandomNegativeIndex(strLen){
        strLen *= -1
        return this.getRandomNumber(1, strLen - 1) * -1
    }

    addOrSubtract(firstNum, secondNum){
        if(this.getRandomNumber(1, 2) === 1){
            secondNum *= -1
            // firstnum 6 & secondNum -6 -> 0
        }
        return firstNum + secondNum
    }

    multiplyOrAdd(firstNum, secondNum){
        if(this.getRandomNumber(1, 2) === 1){
            return firstNum + secondNum
        }
        return firstNum + (2 * secondNum)
    }

    addOrSubtractIfOddOrEven(firstNum){
        if (firstNum > 0 && firstNum <= 10){
            if (firstNum % 2 === 0){
                if (firstNum === 2){
                    return this.multiplyOrAdd(firstNum, 2)
                }else{
                    return this.addOrSubtract(firstNum, 2)
                }
            }else if(firstNum % 5 === 0){
                if (firstNum === 5){
                    return this.multiplyOrAdd(firstNum, 5)
                }else{
                    return this.addOrSubtract(firstNum, 5)
                }
            }else{
                if (firstNum === 3){
                    return this.multiplyOrAdd(firstNum, 3)
                }else{
                    return this.addOrSubtract(firstNum, 3)
                }
            }
        }else{
            return -1
        }
    }

    getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}

const myClass = new Answers(5, 2)

function isPrime(num){
    if(num <= 1){
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            return false
        }
    }
    return true
}

class TablePrac{
    constructor(difficulty){
        this.diff = difficulty
        this.numsRange = {
            min: 0,
            max: 0,
            set setMin(num){
                this.min = num
            },
            set setMax(num){
                this.max = num
            },
            get getMin(){
                return this.min
            },
            get getMax(){
                return this.max
            }
        }
        this.defineNumsRange(this.numsRange)
    }

    defineNumsRange(rangeObj){
        switch (this.diff){
            case "easy":
                defineRange(2, 5)
                break
            case "medium":
                defineRange(2, 10)
                break
            case "hard":
                defineRange(7, 21)
                break
        }

        function defineRange(min, max){
            rangeObj.setMin = min
            rangeObj.setMax = max
        }
    }

    defineMultiplier(){
        return this.getRandomNumber(this.numsRange.getMin, this.numsRange.getMax)
    }

    defineMultiplicand(){
        if (this.numsRange.getMax <= 10){
            return this.getRandomNumber(2, 10)
        }else{
            return this.getRandomNumber(9, 21)
        }
    }

    getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}

class Main{
    constructor(difficulty){
        this.difficulty = difficulty
        this.Tp = new TablePrac(difficulty)
    }

    build(){
        const sectionPrac = document.querySelector(".answer-wrapper")
        const ans = [0, this.Tp.numsRange.getMin, this.Tp.numsRange.getMax]
        const totalButtons = 3

        for (let i = 0; i < totalButtons; i++) {
            const element = document.createElement("button")
            element.id = `btn${i + 1}`
            element.value = `${ans[i]}`
            element.textContent = `${ans[i]}`
            element.classList.add("answer")
            sectionPrac.append(element)
        }
    }
}