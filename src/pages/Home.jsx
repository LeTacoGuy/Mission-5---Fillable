import Card from "../components/Card"
import { useState } from "react";

//prop example
function Home() {

    const filaments = [
        {id: 1, 
            brand: "eSUN", 
            color: "Ocean Blue", 
            material_type: "PLA", 
            weight: 862,
            image: "esun_blue_pla.png"},
         {id: 2, 
            brand: "eSUN", 
            color: "Dark Green", 
            material_type: "PLA", 
            weight: 233,
            image: "esun_darkgreen_pla.png"},
         {id: 3, 
            brand: "eSUN", 
            color: "Golden Yellow", 
            material_type: "PLA", 
            weight: 1000,
            image: "esun_yellow_pla.png"},
         {id: 4, 
            brand: "Sunlu", 
            color: "Black", 
            material_type: "PETG", 
            weight: 932,
            image: "sunlu_black_petg.png"},
         {id: 5, 
            brand: "Sunlu", 
            color: "Bone White", 
            material_type: "PETG", 
            weight: 125,
            image: "sunlu_bonewhite_petg.png"},
         {id: 6, 
            brand: "Sunlu", 
            color: "Pink", 
            material_type: "PETG", 
            weight: 468,
            image: "sunlu_pink_petg.png"},
         {id: 7, 
            brand: "Sunlu", 
            color: "Green", 
            material_type: "PLA", 
            weight: 1000,
            image: "sunlu_green_pla.png"},
         {id: 8, 
            brand: "Sunlu", 
            color: "Grey", 
            material_type: "PLA", 
            weight: 697,
            image: "sunlu_grey_pla.png"},
         {id: 9, 
            brand: "Sunlu", 
            color: "Orange", 
            material_type: "PLA", 
            weight: 351,
            image: "sunlu_orange_pla.png"},
         {id: 10, 
            brand: "Sunlu", 
            color: "White", 
            material_type: "PLA", 
            weight: 122,
            image: "sunlu_white_pla.png"},
     ];


const [searchQuery, setSearchQuery] = useState("");

const handleSearch = (e) => {
    e.preventDefault()
}

//search component
return (
    <div className ="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search filament" 
            className="search-input" 
            value = {searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}/>

        <button type="submit" className="search-button">Search</button>
        </form>

        <div className="filaments-grid">
            {filaments
                .filter(filament =>
                    filament.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    filament.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    filament.material_type.toLowerCase().includes(searchQuery.toLowerCase()))
                .map(filament => (
                    <Card filament={filament} key={filament.id} /> )
                )
                }


      {/*about us and footer*/}
        </div>
        <section id="about" className="about-section">
            <h2>What is Fillable?</h2>
            <p> Fillable is a filament inventory tracker that helps you keep track of all your Filaments.</p>
        </section>
    </div>
    )
}

export default Home