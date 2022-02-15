//execute a função. No VScode é através do (Ctrl + Alt + N)
let arr = ['ovo']; // digite a palavra que você deseja saber se é anagrama


let allAnagrams = function(arr) {
    let anagrams = {};
    arr.forEach(function(str) {
        let recurse = function(ana, str) {
            if (str === '') 
                anagrams[ana] = 1;
            for (let i = 0; i < str.length; i++)
                recurse(ana + str[i], str.slice(0, i) + str.slice(i + 1));
        };
        recurse('', str);
    });
    return Object.keys(anagrams);
}

console.log(allAnagrams(arr)); // imprime os anagramas

const numberOfString = allAnagrams(arr);

console.log(numberOfString.length); // imprime a quantidade de anagramas