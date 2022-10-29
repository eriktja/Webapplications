import questions from './questions.json';

export function question(answer, index) {
    let value = false
    const { answers } = questions[index]
    answers.forEach(({option, correct}) => {
        if(option === answer) value = correct
    })
    return value
}

export function checkHelper(index){
    const { helper } = questions[index]

    return helper
}