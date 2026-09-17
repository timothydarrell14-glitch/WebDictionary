import { useEffect, useState } from "react"
import { SearchWord } from './SearchWord'
import { WordOfTheDay } from './WordOfTheDay'
import { Types } from './TypesOfWords'

function Body() {
    const [word, SetWord] = useState('')

    function handleChange(e) {
        SetWord(e.target.value)
        print(word)
    }

    function handleHistoryButton() {  
    }

    function HandleSearchWord() {
        print(word)
        useEffect(() => {
        },[])
    }
    
    return (
        <>
            <section id="body">
                <div id="search">
                    <button onClick={handleHistoryButton}>History</button>
                    <input id="search-word-input" type="text" placeholder="Please enter search word" value={word} onChange={handleChange} ></input><br></br>
                    <button onClick={HandleSearchWord}>Search</button>
                </div>
                <SearchWord />
                <WordOfTheDay />
                <Types/>
            </section>
        </>
    )
}

export default Body