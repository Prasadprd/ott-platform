import "./rowPoster.scss";
// import { BASE_IMG_URL, FALLBACK_IMG_URL } from "../../requests";
import { useDispatch } from "react-redux";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../redux/favourites/favourites.actions";
import { FaPlus, FaMinus, FaPlay, FaChevronDown } from "react-icons/fa";
// import useGenreConversion from "../../hooks/useGenreConversion";
import { showModalDetail } from "../../redux/modal/modal.actions";
import { Link } from "react-router-dom";

// imdb movie
// adult: false
// backdrop_path: "/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg"
// genre_ids: Array(2)
// 0: 18
// 1: 80
// id: 278
// isFavourite: false
// original_language: "en"
// original_title: "The Shawshank Redemption"
// overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope."
// popularity: 63.112
// poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
// release_date: "1994-09-23"
// title: "The Shawshank Redemption"
// video: false
// vote_average: 8.7
// vote_count: 21479

//fake flix movie

// contentType: "MOVIES"
// description: "&lt;p>Hi atoadchaodpfadsf&lt;/p>"
// id: "6293feedaec8a639d9cc3b87"
// images: {orientation: 'H'}
// isFavourite: false
// lang: "english"
// rating: 0
// status: "Processing"
// title: "Hello"
const RowPoster = (result) => {
  console.log(result);
  const {
    item,
    item: {
      title,
      id,
      //   original_name,
      //   original_title,
      //   name,
      genre,
      //   poster_path,
      //   backdrop_path,
    },
    isLarge,
    isFavourite,
  } = result;
  let fallbackTitle = title;
  //   const genresConverted = useGenreConversion(genre_ids);
  const dispatch = useDispatch();

  const handleAdd = (event) => {
    event.stopPropagation();
    dispatch(addToFavourites({ ...item, isFavourite }));
  };
  const handleRemove = (event) => {
    event.stopPropagation();
    dispatch(removeFromFavourites({ ...item, isFavourite }));
  };
  const handleModalOpening = () => {
    dispatch(showModalDetail({ ...item, fallbackTitle, genre, isFavourite }));
  };
  const handlePlayAction = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      className={`Row__poster ${isLarge && "Row__poster--big"}`}
      onClick={handleModalOpening}
    >
      {/* poster_path ? (
          <img src={`${BASE_IMG_URL}/${poster_path}`} alt={fallbackTitle} />
        ) : (
          ""
        )
      ) : backdrop_path ? (
        <img src={`${BASE_IMG_URL}/${backdrop_path}`} alt={fallbackTitle} />
      ) : ( */}
      {
        <>
          <img
            src={
              "https://image.tmdb.org/t/p/original//gG9fTyDL03fiKnOpf2tr01sncnt.jpg"
            }
            alt={fallbackTitle}
          />
          <div className="Row__poster__fallback">
            <span>{fallbackTitle}</span>
          </div>
        </>
      }
      <div className="Row__poster-info">
        <div className="Row__poster-info--iconswrp">
          <Link
            className="Row__poster-info--icon icon--play"
            onClick={handlePlayAction}
            to={`/play/${id}`}
          >
            <FaPlay />
          </Link>
          {!isFavourite ? (
            <button
              className="Row__poster-info--icon icon--favourite"
              onClick={handleAdd}
            >
              <FaPlus />
            </button>
          ) : (
            <button
              className="Row__poster-info--icon icon--favourite"
              onClick={handleRemove}
            >
              <FaMinus />
            </button>
          )}
          <button className="Row__poster-info--icon icon--toggleModal">
            <FaChevronDown onClick={handleModalOpening} />
          </button>
        </div>
        <div className="Row__poster-info--title">
          <h3>{fallbackTitle}</h3>
        </div>
        <div className="Row__poster-info--genres">
          {/* {genresConverted &&
            genresConverted.map((genre) => ( */}
          <span key={`Genre--id_${genre}`} className="genre-title">
            {genre}
          </span>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default RowPoster;
