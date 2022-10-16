import expect from 'expect'
import {  question, checkHelper } from '../src'


// Question 1
it('should return false because you have only heard rumors about sticks', () => {
    const result = question("Veldig lang", 0)
    expect(result).toBe(false)
})
it('should return true all sticks are different', () => {
    const result = question("Ingen pinner er like", 0)
    expect(result).toBe(true)
})
it('should be a good helper', () => {
    const result = checkHelper(0)
    expect(result).toBe("Gå ut i skogen og sjekk")
})

// Question 2
it('should return false you havnt seen Kai og Kai kjøpe kajakk', () => {
    const result = question("Hva", 1)
    expect(result).toBe(false)
})
it('should return true because kaikakkehanokaiakkno', () => {
    const result = question("Kahakano", 1)
    expect(result).toBe(true)
})
it('should be a good helper', () => {
    const result = checkHelper(1)
    expect(result).toBe("Se Kai og Kai kjøper kano")
})

// Question 3
it('should return false you dont know what a knock knock joke is', () => {
    const result = question("Hva", 2)
    expect(result).toBe(false)
})
it('should return true because joe moma', () => {
    const result = question("Who's there?", 2)
    expect(result).toBe(true)
})
it('should be a good helper', () => {
    const result = checkHelper(2)
    expect(result).toBe("google knock knock joke")
})

// Question 4
it('should return false if you are not in on the joke', () => {
    const result = question("Erik", 3)
    expect(result).toBe(false)
})
it('should return true because answer is true', () => {
    const result = question("Simen", 3)
    expect(result).toBe(true)
})
it('should be a good helper', () => {
    const result = checkHelper(3)
    expect(result).toBe("You had to be there")
})