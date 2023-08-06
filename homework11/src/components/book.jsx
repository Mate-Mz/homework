const Book = ({name, desc, characters, image, action}) => {
    return <div className="book">

        <h1 className="book-title">{name}</h1>

        <div className="img-box">
            <img src={image} alt={name} />
        </div>
        
        <button onClick={() => action(name, characters)}  className="btn">Button</button>
        
        <p><span>Description: </span>{desc}</p>
        
        <span>Characters: </span>
        {characters.map(char => <div key={char.id}>{char.name}</div>)}


    </div>
}

export default Book;