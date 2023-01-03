// Write a program that reads a variable with language code and prints the translation of "Hello World" for that language.

/* Requirements

You should have a variable for the language code (e.g. "es", "de", "fr", "en").
Your program should print the translation of "Hello World" based on the language code in the variable.
It should support at least 3 languages
Make sure to test with the different languages you choose.
(Feel free to Google the translation if you aren't fluent.)
*/

/*{
    es: 'Hola mundo',
    de: 'Hallo Welt',
    fr: 'Salut tout le monde',
    en: 'Hello World'
    }
*/

let lang = 'es'

console.log(lang)

if (lang === 'es') {
    console.log('Hola mundo')
} else if (lang === 'de') {
    console.log('Hallo Welt')
} else if (lang === 'fr') {
    console.log('Salut tout le monde')
} else if (lang === 'en') {
    console.log('Hello World')
} else {
    console.log('Hi')
}
  