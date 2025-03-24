
interface vowelCount {
    [key: string]: number
}

const isVowel = (letra: string): boolean => {
    return (
        letra == 'a' || letra == 'e' ||
        letra == 'i' || letra == 'o' ||
        letra == 'u'
    )
}

const countVowels = (input: string): vowelCount => {
    const vowelCount: vowelCount = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
        total: 0
    }

    for (const letter of input.toLowerCase()) {
        if (isVowel(letter)) {
            vowelCount[letter] += 1
            vowelCount.total += 1
        }
    }

    return vowelCount
}

console.log(countVowels('AAAAAAAAEeeeeIIIIOOOUUU'))