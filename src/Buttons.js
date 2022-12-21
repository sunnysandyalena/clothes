function Buttons ({filters}) {
    return (
        <div className="container">
            <div>
                <button className="btn" onClick={() => filters("dress")}>DRESSES</button>
            </div>
            <div>
                <button className="btn" onClick={() => filters("pants")}>PANTS</button>
            </div>
            <div>
                <button className="btn" onClick={() => filters("top")}>TOPS</button>
            </div>
            <div>
                <button className="btn" onClick={() => filters("coat")}>COATS & JACKETS</button>
            </div>
            <div>
                <button className="btn" onClick={() => filters("shoes")}>SHOES</button>
            </div>
        </div>
    )
}

export default Buttons;