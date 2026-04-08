import React from "react";

const Card=(props)=>{
    return(
        <>
           <div className="card">
        <div className="top">
          <div class="logo">
            <img
              src={props.logo}
              alt=""/>
            
            
          </div>
          <div className="save">
          <button>Save<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACUCAMAAABRNbASAAAAaVBMVEX///8AAADo6Og5OTn19fVJSUn8/Px6enq9vb35+fnj4+PKysrv7++RkZHr6+vExMSampomJibV1dU0NDSqqqqBgYEeHh5gYGBQUFC1tbUZGRmIiIhnZ2d0dHSjo6MuLi5AQEBYWFgLCwtNHmQVAAADaUlEQVR4nO2c2YKqMAyGrSJQFlkEEQFHff+HPDoexhbDYkmYuch/qTPxMzFpgKarFYvFYi0rG0EkYF4Z5w6CwtD1cMms8/EgsHQ7FOcdGtru/IVG1gJWSHjRFhvtoa2LgCbPFGgPZdZsuJyKTYhmJpp1pGMT4jqvsMSUbEKc57C5N1o4UZqzrU/EbOJkXFEkYTK0Ck3hUnLHCbE3XcsaejZz13Wz4VqV7kyVeZF0rJqxpbqRSykNv6Qu/6Lb9Y2s6DVuu0ZBu2utr9WxiQ2r1vyWYrHdfadF1jEJiA5n9P36VKmWC5P1P9CW1Rml/F2lavloUod36k8jQYzqveVXm9etCZz2u93M770UWZu5mcZwDMdwDMdwDMdwDMdwDMdwDMdwDMdwDMdwDMdwDMdwDMdwDMdwDMdwDMdwDMdwDMdwDMdwDMdwDMdw0+C8aRsUfwHuuYm1TseHHJaHi//vZE/GN3QvDZcq+6ZH9xQvDFdqY2Ff2R+CC94GJ/Lgr8D5+y6bEPuh0C4Il3WHCJ50A3mxGFxaQGgPFb3OWwrOBUL647zoV+GCsB/tIQfOi0Xg0tF5uiMY2iXg4EzQtYdKHj2cN3G4qXkfniKHiwYyoeO8txEgYjgLnpCsa/DlqpMXtHAeWNxOoW2H4Ox1oYeWFM4FM2H7nZnRBXpv76tdHiHcGi5u7YiUDY9POsqoDR1cuul+7rde83SyBP9g8yp5VHCyJxO0T0jBKnOLWyNEcIEDsjmdZJZwDWxXMxo4OGBQW57CZTCyqeAmhbQVvIAcKkkDB2dC//UCvPQ+8gIbTq4ycDL9OtCO+2CpPmRSIsN5PZkwfCED/1Pj4cKd4OuE0aleH3R3ok6Sz4cDVU+YJE9h51HDneJJJz/Y8cgxLBRwx8mD2nArQAlXD2aCrp5lhQouKT86zMMuB0KLDTdU3GD5cIuMD5c4BtZWTd+lGipcYnZkwcpfAK4xPmFkDbfIeHCHacUNlh1DoUWDg+8uTFf3UAtMOKNM0FXhwO3e7tJECGeCyAgFLuh0Y80Ha8KQui3y1ciufnlaoT1gknpocyMjtmJhbiboUh9a3AwPaXm5DiukrZSSN/LIol/Rsy59uMxPkR09O/VL323jCfLOueNkaKfjqNpl4d30vIhQHaH4tE1mmsVisX70D790PHTPEAamAAAAAElFTkSuQmCC" alt=""/></button>
        </div>
          
        </div>
        <div className="center">
            <h3>{props.company}<span>{props.datePosted}</span></h3>
            <h2>{props.post}</h2>
            <span className="i">{props.tag}</span>
            <span className="i">Senior Level</span>
        </div>
        <div className="bottom">
           <div className="fare">
            <h2>{props.pay}</h2>
            <p>{props.location}</p>
           </div>
           <button>Apply Now</button>
        </div>
      </div>
        </>
    )
}
export default Card;