import React from "react";
import "./Styles/moviesList.scss";

class MoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesdata: "",
    };
  }

  async componentDidMount() {
if(localStorage.getItem("islogged")=== null || localStorage.getItem("islogged")=== undefined){
  this.props.history.push("/?err=loginfirst")
}else{



    await fetch("https://hoblist.com/movieList", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          moviesdata: data.result,
        });
      });

    }
  }

  render() {
    const { moviesdata } = this.state;

    return (
      <div style={{display:"grid",placeItems:"center"}}>
        {moviesdata ? <div className="moviesmainrow">
        {
          moviesdata.map((movie) => {
            return (
              <div key={movie._id} className="moviesmaincol">
                <div className="moviesrow">
                  <div className="moviescol align">
                    <i
                      style={{ fontSize: "50px" }}
                      className="ri-arrow-up-s-fill"
                    ></i>

                    <p>{movie.voting}</p>
                    <i
                      style={{ fontSize: "50px" }}
                      className="ri-arrow-down-s-fill"
                    ></i>
                    <p>Votes</p>
                  </div>
                  <div className="moviescol">
                    <img className="poster" src={movie.poster} />
                  </div>
                  <div className="moviescol">
                    <h3>{movie.title}</h3>
                    <p>Genre: {movie.genre}</p>
                    <p>Director: {movie.director[0]}</p>
                    <p>{movie.stars[0]}</p>
                    <span>Mins |</span>
                    <span> {movie.language} |</span>
                    <span> 1 Apr</span>
                    <br />
                    <br />
                    <span style={{ color: "blue" }}>
                      {movie.pageViews} views |
                    </span>
                    <span style={{ color: "blue" }}>
                      {" "}
                      voted by {movie.voting} people
                    </span>
                  </div>
                </div>
                <p className="trailer">Watch Trailer</p>
              </div>
            );
          })}
      </div>

       :  <img src="https://i.pinimg.com/originals/24/2e/12/242e12c5180073807fc7ff2d5f244d1c.gif" />           }
      </div>
    );
  }
}

export default MoviesList;
