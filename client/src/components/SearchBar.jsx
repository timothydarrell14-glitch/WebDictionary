import { useEffect, useState } from "react"

function SearchBar() {

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
        }, [])
    }
    return (
        <div id="search">
            <button onClick={handleHistoryButton}>History</button>
            <input id="search-word-input" type="text" placeholder="Please enter search word" value={word} onChange={handleChange} ></input><br></br>
            <button onClick={HandleSearchWord}>Search</button>
        </div>
    )
}

export default SearchBar