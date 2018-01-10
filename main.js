const students = [ 
{ name: "Brian Sutachan",
      score:  15},
{ name: "Joana Sutachan",
    score: 70},
{ name: "Diana Sutachan",
    score: 80},


]

class FinalExam {
    constructor(students) {
        this.students = students
        this.extraCredit = this.giveExtraCredit(this.students)
        this.passers = this.getPassers(this.extraCredit)
        this.average = this.getAverage(this.extraCredit)
    }
    



giveExtraCredit(students) {
    return students.map((student)=>{
        return student.score + 15
        
    })
        

 }
getPassers(scores){
    return scores.filter((score)=>{
        return (score > 59) ? 1 : 0
    })
}

getAverage(scores){
    return scores.reduce((acc, cur, index)=>{
        return (index === scores.length - 1) ? ((acc + cur)/(index+1)) : (acc + cur)
            
    })
}
}

let test = new FinalExam(students)

console.log(test.average)