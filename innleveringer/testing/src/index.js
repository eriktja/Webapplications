import questions from './questions.json';

export function question(answer, index) {
    let value = false
    const { answers } = questions[index]
    answers.forEach(a => {
        let {option, correct} = a
        if(option === answer) {
            value = correct
        }
    })
    return value
}
