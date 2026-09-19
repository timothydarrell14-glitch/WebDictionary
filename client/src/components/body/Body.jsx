import '../styles/body.css'
import SearchBar from './SearchBar'
import SearchWord from './SearchWord'
import WordOfTheDay from './WordOfTheDay'
import Types from './TypesOfWords'

function Body() {

    return (
        <>
            <section>
                <SearchBar />
                <SearchWord />
                <WordOfTheDay />
                <Types />
            </section>
        </>
    )
}

export default Body