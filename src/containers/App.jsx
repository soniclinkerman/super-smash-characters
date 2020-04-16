import React, { Component } from "react";
import CardList from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import {characters} from "../characters";
import "./App.css"
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            characters: [],
            searchfield: ""
        }
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    componentDidMount(){
        this.setState({
            characters: characters
        })
    }

    onSearchChange(e){
        this.setState({
            searchfield: e.target.value
        })
    }

    render(){
        const {characters, searchfield} = this.state;
        const filteredCharacters = characters.filter(character => {
            return (character.name.toLowerCase().includes(searchfield.toLowerCase()));
        })

        return !characters.length ? 
        <h1>Loading</h1> :
        (
            <div className="tc">
                <h1>Super Smash BrOthers Ultimate Characters</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                
                <Scroll>
                    <ErrorBoundary>
                        <CardList characters={filteredCharacters}/>
                    </ErrorBoundary>
                </Scroll>

                <div>
                    <p className="copyright">Zaltick 2020 ©</p>
                </div>

            </div>
        )
}

}

export default App