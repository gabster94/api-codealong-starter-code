// console.log("🌻 Script connected")
// 9a4807cb-1e38-4de9-bb9c-5b732a84a6c9
// https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=your-api-key
// URL = base url + word + api_key

const API_KEY = "9a4807cb-1e38-4de9-bb9c-5b732a84a6c9"
const BASE_URL = "https://www.dictionaryapi.com/api/v3/references/thesaurus/json"
const word = "umpire"

const URL = `${BASE_URL}/${word}?key=${API_KEY}`

console.log(URL)

//DOM selectors
const wordTitle = document.getElementById("word")

wordTitle.innerHTML = word


fetch(URL)
  .then(response => response.json()) 
  .then(data => {
    console.log(data)

    
})