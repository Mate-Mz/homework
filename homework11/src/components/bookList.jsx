import Book from "./book";
import HarryPotter from "../assets/Harry Potter.jpg";
import NineteenEightyFour from "../assets/1984.jpg";
import PrideAndPrejudice from "../assets/Pride and Prejudice.jpg";
import TheGreatGatsby from "../assets/The Great Gatsby.jpg";
import Vepkhistkaosani from "../assets/The Knight In The Panther's Skin.jpg";
import TLOTR from "../assets/The Lord Of The Rings.jpg";
import ToKillaMockingbird from "../assets/To Kill a Mockingbird.jpg";

const data = [
    {
        id: 1,
        name: "Harry Potter",
        image: HarryPotter,
        description: "The start of a magical journey, this book introduces young Harry Potter as he learns about his wizarding heritage and enters the Hogwarts School of Witchcraft and Wizardry.",
        characters: [
            { id: 1, name: "Harry Potter" },
            { id: 2, name: "Ron Weasley" },
            { id: 3, name: "Hermione Granger" },
            { id: 4, name: "Albus Dumbledore" },
            { id: 5, name: "Severus Snape" }
        ]
    },
    {
        id: 2,
        name: "1984",
        image: NineteenEightyFour,
        description: "Set in a dystopian future, this novel follows the life of Winston Smith as he rebels against a totalitarian regime that controls every aspect of citizens' lives.",
        characters: [
            { id: 6, name: "Winston Smith" },
            { id: 7, name: "Julia" },
            { id: 8, name: "Big Brother" },
            { id: 9, name: "O'Brien" },
            { id: 10, name: "Emmanuel Goldstein" }
        ]
    },
    {
        id: 3,
        name: "Pride and Prejudice",
        image: PrideAndPrejudice,
        description: "A witty exploration of societal norms and the complexities of romance, focusing on the independent-minded Elizabeth Bennet and the proud Mr. Darcy.",
        characters: [
            { id: 11, name: "Elizabeth Bennet" },
            { id: 12, name: "Mr. Darcy" },
            { id: 13, name: "Jane Bennet" },
            { id: 14, name: "Mr. Bingley" },
            { id: 15, name: "Mr. Collins" }
        ]
    },
    {
        id: 4,
        name: "The Great Gatsby",
        image: TheGreatGatsby,
        description: "Set in the Roaring Twenties, this novel delves into the American Dream through the enigmatic millionaire Jay Gatsby and his obsession with Daisy Buchanan.",
        characters: [
            { id: 16, name: "Jay Gatsby" },
            { id: 17, name: "Nick Carraway" },
            { id: 18, name: "Daisy Buchanan" },
            { id: 19, name: "Tom Buchanan" },
            { id: 20, name: "Jordan Baker" }
        ]
    },
    {
        id: 5,
        name: "The Knight in The Panther's Skin",
        image: Vepkhistkaosani,
        description: "An epic poem of love, chivalry, and heroic deeds, this masterpiece follows the adventures of Tariel and Avtandil as they seek to rescue their beloveds in a world of nobility and magic.",
        characters: [
            { id: 21, name: "Tariel" },
            { id: 22, name: "Avtandil" },
            { id: 23, name: "Nestan-Darejan" },
            { id: 24, name: "Tinatin" }
        ]
    },
    {
        id: 6,
        name: "The Lord Of The Rings",
        image: TLOTR,
        description: "The first installment of a high fantasy epic, this book follows the perilous journey of a diverse group of companions as they seek to destroy a powerful ring and save Middle-earth.",
        characters: [
            { id: 25, name: "Frodo Baggins" },
            { id: 26, name: "Samwise Gamgee" },
            { id: 27, name: "Aragorn" },
            { id: 28, name: "Gandalf" },
            { id: 29, name: "Legolas" },
            { id: 30, name: "Gimli" }
        ]
    },
    {
        id: 7,
        name: "To Kill a Mockingbird",
        image: ToKillaMockingbird,
        description: "This classic novel explores racial injustice and moral growth in a small Southern town during the Great Depression.",
        characters: [
            { id: 31, name: "Scout Finch" },
            { id: 32, name: "Atticus Finch" },
            { id: 33, name: "Jem Finch" },
            { id: 34, name: "Boo Radley" },
            { id: 35, name: "Calpurnia" }
        ]
    }
];

function BookList() {
    function action(name, characters) {
        const characterNames = characters.map(character => character.name);
        console.log(`Book: ${name} \n Characters: ${characterNames.join(', ')}`);
    }

    return <div className="book-list">
        {data.map( (book) => <Book key={book.id} name={book.name} image={book.image} desc={book.description} characters={book.characters} action={action}/>)}
    </div>
}

export default BookList;