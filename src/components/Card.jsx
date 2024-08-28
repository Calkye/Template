import './css/Card.css'




function Card({Heading, Content, Button, ...props}){
  return(
    <>
      <div className="Card-Container">
        <div className="Card-Wrapper">
          <div className="Card-Heading">
            {Heading}
          </div>
          <div className="Card-Content">
            {Content}
          </div>
          <div className="Card-Button">
            {Button}
          </div>
        </div>
      </div>
    </>
  )
}


export default Card;

