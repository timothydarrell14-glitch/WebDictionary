import { useEffect, useState } from "react"

function SearchBar() {

    const [word, SetWord] = useState('')

    function handleChange(e) {
        SetWord(e.target.value)
    }

    useEffect(() => {
        console.log(word)
    }, [word])

    function handleHistoryButton() {
    }

    function handleKeyPress(e) {
        const key = e.key
        if (key === "Enter") {
            console.log("Enter key is pressed")
        }
    }

    function HandleSearchWord() {
        useEffect(() => {
        }, [])
    }
    return (
        <div id="search">
            <button onClick={handleHistoryButton}>History</button>
            <input id="search-word-input" type="text" placeholder="Please enter search word" value={word} onChange={handleChange} onKeyDown={handleKeyPress}></input><br></br>
            <button onClick={HandleSearchWord}>Search</button>
        </div>
    )
}

export default SearchBar