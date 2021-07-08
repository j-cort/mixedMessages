// Random future path generator: predicts future domicile, occupation and state of mind.

// random number generator
const getRandomNumber = arr => {
    return Math.floor(Math.random()*arr.length);
};

// mixed message source object
const mm = {
    city : ['Tokyo', 'London', 'Accra', 'Casa Blanca', 'Caracas', 'Ohio', 'Montreal', 'Mumbai', 'Da Nang', 'Brisbane'],
    occupation : ['a fisherman', 'a banker', 'a software developer', 'a biomedical researcher', 'a dancer', 'a film director', 'a teacher', 'a train driver', 'an accountant', 'a surgeon', 'a hobo'],
    state : ['happy', 'healthy', 'miserable', 'at peace', 'joyful', 'resentful', 'unsatisfied', 'unstable', 'comfortable', 'curious', 'furious', 'proud', 'worshipped', 'greedy', 'generous', 'humble', 'adventurous', 'unstoppable', 'lazy']
};

// generate mixed message
const generateMixedMessage = obj => {
    let message = [];
    for (let prop in obj) {
        const index = getRandomNumber(obj[prop])
        prop === 'city' ? message.push(`You will live in ${obj[prop][index]}.`)
        : prop === 'occupation' ? message.push(`You will be ${obj[prop][index]}.`)
        : message.push(`You'll be ${obj[prop][index]}.`)
        };
        return message.join('\n')
    };
    

// Display Mixed Message
console.log(generateMixedMessage(mm));
