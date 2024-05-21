const Quotes =  ({quotes, calfunc}) => {

    // calfunc(20);

    return (
        <div>
            <h1>Quotes</h1>

            <ul className="list-group">
                {
                    quotes.map((quo, index)=>{
                        return (
                            <li key={index} className="list-group-item">
                                {quo.text} <span>{quo.author}</span>
                            </li>
                        )
                    })
                }
            </ul>

            <button onClick={()=>{calfunc(5)}} className="btn btn-primary">Click Me</button>
        </div>
    )

}

export default Quotes