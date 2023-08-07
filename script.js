const asgardianBrothers = [
    {
        firstName: "Thor",
        familyName: "Odinsson"
    },
    {
        firstName: "Loki",
        familyName: "Laufeysson-Odisson"
    }
]

function intro(person, line){
    return `${person.firstName} ${person.familyName} says: ${line}`
}

const phrase = "I like this brown drink very much, bring me another."

// console.log(intro(asgardianBrothers[0], phrase))

// Intro with context.
function introWithContext(line){
    console.log(`${this.firstName} ${this.familyName} says ${line}`)
}

// console.log(introWithContext.call(asgardianBrothers[0], phrase))

// Explicitly lock context for a function with bind
const thorIntro = introWithContext.bind(asgardianBrothers[0])
thorIntro("Hi, Joel")