// random number generator
const getRandomNumber = arr => {
    return Math.floor(Math.random()*arr.length)
};

// mixed message source object
const mm = {
    city : ['Tokyo', 'London', 'Accra', 'Casa Blanca', 'Caracas', 'Ohio', 'Montreal', 'Mumbai', 'Da Nang', 'Brisbane'],
    occupation : ['a fisherman', 'a banker', 'a software developer', 'a biomedical researcher', 'a dancer', 'a film director', 'a teacher', 'a train driver', 'an accountant', 'a surgeon', 'a hobo'],
    state : ['happy', 'healthy', 'miserable', 'at peace', 'joyful', 'resentful', 'unsatisfied', 'unstable', 'comfortable', 'curious', 'furious', 'proud', 'worshipped', 'greedy', 'generous', 'humble', 'adventurous', 'unstoppable', 'lazy']
};

// generate mixed message
const generateMixedMessage = () => {
    let message = [];
    for (let prop in mm) {
        const opIndex = getRandomNumber(mm[prop])
        if (prop === 'city') {
            message.push(`You will live in ${mm[prop][opIndex]}.`)
        } else if (prop === 'occupation') {
            message.push(`You will be ${mm[prop][opIndex]}.`)
        } else {
            message.push(`You'll be ${mm[prop][opIndex]}.`)
        }
    }
    return message.join('\n')
};


// Display Mixed Message
const mixedMessage = generateMixedMessage();
console.log(mixedMessage)
