import '../styles/Cards.css'

function Cards(props) {
    const { Title, Year, imdbID, Type, Poster } = props.movie;

  return (
    <div className="moviecontainer">

   
    <div className="card1" onClick={() =>{
        props.setSelectedMovie(imdbID);
        window.scrollTo({ top: 0, behavior: "smooth" });

    }}>
         <img src={Poster} className='image' alt='movie-poster'/>
         
         <div className='info-column'>
            <h4 className='title1'>{Title}</h4>
            <h5 className='year'>{Year}</h5>
            <h5 className='type'>{Type}</h5>
         </div>
    </div>
    </div>
  )
}

export default Cards