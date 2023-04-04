// 1
const add = (a, b) => a + b

// 2
const maximum = (nombres) => {
    return Math.max(nombres)
}

// 3
const voyelles = ['a', 'e', 'i', 'o', 'u', 'y']

const removeVoyelles = (chaine) => {
    voyelles.forEach(voyelle =>{
        chaine = chaine.replaceAll(voyelle, '')
    })
    return chaine
}

// 4
const sortByAlphabet = (input) => {
    return input.sort()
}

// 5
const numberAsWord = (number) => {
    console.assert(number < 100, "Can't handle numbers higher than 100")

    switch (number){
        case 11: return "onze";
        case 12: return "douze";
        case 13: return "treize";
        case 14: return "quatorze";
        case 15: return "seize";
        case 71: return "soixante-et-onze"
    }

    const chiffres = {
        1: "un",
        2: "deux",
        3: "trois",
        4: "quatre",
        5: "cinq",
        6: "six",
        7: "sept",
        8: "huit",
        9: "neuf",
    }

    const dizaines = {
        1: "dix",
        2: "vingt",
        3: "trente",
        4: "quarante",
        5: "cinquante",
        6: "soixante",
        7: "soixante",
        8: "quatre-vingt",
        9: "quatre-vingt"
    }

    let dizaine = Math.floor(number / 10)

    let unite = number % 10

    let ret = ''

    if(dizaine !== 0){
        ret += dizaines[dizaine]
    }

    if(unite !== 0 && (dizaine === 7 || dizaine === 9)){
        ret += '-' + dizaines[unite]
    }
    else if(unite === 0 && (dizaine === 7 || dizaine === 9)){
        ret += "-dix"
    }
    else if (unite !== 0 && dizaine !== 0){
        ret += "-" + chiffres[unite]
    }
    else if(unite !== 0){
        ret += chiffres[unite]
    }

    return ret
}



// 6
const getPropertyOfObjects = (objects, property) => {
    let ret = []
    objects.forEach(object => {
        ret.push(object[property])
    })
    return ret
}

// 7
const sortNumbersDesc = (numbers) => {
    return numbers.sort((a, b) => {
        if(a > b) return -1
        if(a < b) return 1
        return 0
    })
}

// 8
const uppercaseVoyelles = (string) => {
    let ret = ''
    string.split('').forEach(c => {
        if(voyelles.includes(c)){  ret += c.toUpperCase() }
        else { ret += c }
    })
    return ret
}

// 9
const countVoyelles = (string) => {
    return string
        .split('')
        .filter(c => voyelles.includes(c))
        .length
}

// 10
const uppercaseConsonnes = (string) => {
    let ret = ''
    string.split('').forEach(c => {
        if(!voyelles.includes(c)){  ret += c.toUpperCase() }
        else { ret += c }
    })
    return ret
}

console.log('addition : ' + add(2,5))
console.log('max : ' + maximum([1,4,2]))
console.log(removeVoyelles('retirer les voyelles : ' + 'ceci est un test aeiouy'))
console.log('tri par alphabet : ' + sortByAlphabet(['ab', 'bf', 'ba', 'ce']))


const objects = [{a : "test", b : "inutile"},
                 {a : "test2", b : "inutile"}]
console.log(getPropertyOfObjects(objects,"a"))

console.log(sortNumbersDesc([1,4,3,2,6,7,0,9]))
console.log(uppercaseVoyelles("test voyelles uppercase"))
console.log(countVoyelles("test 5 voyelles"))
console.log(uppercaseConsonnes("test consonnes uppercase"))
console.log(numberAsWord(81))