class BooleanQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices() {
        console.log(`1. True`)
        console.log(`2. False`)
    }
}

class MultipleChoiceQuestion {
    constructor(description, options) {
        this.description = description
        this.options = options
    }

    printQuestionChoices() {
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`)
        })
    }
}

class TextQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices() {
        console.log(`Answer: ____________________`)
    }
}

class RangeQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices() {
        console.log(`Minimum: ________________`)
        console.log(`Maximum: ________________`)
    }
}

function printQuiz(questions) {
    questions.forEach( question => {
        console.log(question.description)
        question.printQuestionChoices()
        console.log('')
    })
}

const questions = [
    new BooleanQuestion(`This video is useful`),
    new MultipleChoiceQuestion(`What is your favourite language?`, [`CSS`, `JS`, `HTML`, `Python`]),
    new TextQuestion(`Describe you favourite JS feature`),
    new RangeQuestion(`What is your speed limit of your city`)
]

printQuiz(questions)