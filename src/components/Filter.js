import "bootstrap/dist/css/bootstrap.min.css";
import "../css/index.css";

function Filter({
  genres,
  selectedGenre,
  setSelectedGenre,
  setMinRating,
  setStartDate,
  setEndDate,
}) {
  //Genre
  const handleAddGenre = (genre) => {
    setSelectedGenre((prev) => (prev === genre.id ? null : genre.id));
    console.log(genre);
  };

  const allGenre = { id: null, name: "All" };

  //Rating
  function handleRatingChange(rating) {
    if (rating === "all") {
      setMinRating(0);
    } else {
      setMinRating(rating);
    }
  }

  //Release date
  function handleReleaseDate(release) {
    let startYear;
    let endYear;

    switch (release) {
      case "before1900":
        startYear = null;
        endYear = "1899-12-31";
        break;
      case "1900-1950":
        startYear = "1900-01-01";
        endYear = "1949-12-31";
        break;
      case "1950-1970":
        startYear = "1950-01-01";
        endYear = "1969-12-31";
        break;
      case "1970-1990":
        startYear = "1970-01-01";
        endYear = "1989-12-31";
        break;
      case "1990-2000":
        startYear = "1990-01-01";
        endYear = "1999-12-31";
        break;
      case "2000-2010":
        startYear = "2000-01-01";
        endYear = "2009-12-31";
        break;
      case "2010-2020":
        startYear = "2010-01-01";
        endYear = "2019-12-31";
        break;
      case "From 2020":
        startYear = "2020-01-01";
        endYear = "2100-12-31";
        break;
      default:
        startYear = null;
        endYear = null;
    }

    setStartDate(startYear);
    setEndDate(endYear);
  }

  return (
    <div className="filter m-3">
      {/* GENRE */}
      <div>
        <p className="filter-text">Select genre</p>
        <ul className="list-unstyled d-flex flex-wrap justify-content-start gap-3 list-m">
          {[allGenre, ...genres].map((genre) => (
            <li
              key={genre.id}
              className={`genre-li ${
                selectedGenre === genre.id ? "selected" : ""
              }`}
              onClick={() => handleAddGenre(genre)}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="two-filter">
        {/* RATING */}
        <div className="mb-4">
          <p className="filter-text">Select rating</p>
          <div
            className="btn-group gap-3 mr-60 list-m"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradioAll"
              autoComplete="off"
              value="all"
              onChange={(e) => handleRatingChange(e.target.value)}
              defaultChecked
            />
            <label className="btn btn-outline-primary" htmlFor="btnradioAll">
              All
            </label>
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio6"
              autoComplete="off"
              value="6"
              onChange={(e) => handleRatingChange(e.target.value)}
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio6">
              6+
            </label>
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio7"
              autoComplete="off"
              value="7"
              onChange={(e) => handleRatingChange(e.target.value)}
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio7">
              7+
            </label>
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio8"
              autoComplete="off"
              value="8"
              onChange={(e) => handleRatingChange(e.target.value)}
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio8">
              8+
            </label>
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio9"
              autoComplete="off"
              value="9"
              onChange={(e) => handleRatingChange(e.target.value)}
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio9">
              9+
            </label>
          </div>
        </div>
        {/* RELEASE DATE */}
        <div className="mb-4">
          <p className="filter-text">Select year</p>

          <div
            className="btn-group gap-3 list-m"
            role="group"
            aria-label="Year radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="btnradioYear"
              id="btnradioAllYear"
              autoComplete="off"
              value="all"
              onChange={(e) => handleReleaseDate(e.target.value)}
              defaultChecked
            />
            <label
              className="btn btn-outline-primary"
              htmlFor="btnradioAllYear"
            >
              All
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradioYear"
              id="btnradioBefore1900"
              autoComplete="off"
              value="before1900"
              onChange={(e) => handleReleaseDate(e.target.value)}
            />
            <label
              className="btn btn-outline-primary"
              htmlFor="btnradioBefore1900"
            >
              Before 1900
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradioYear"
              id="btnradio1900-1950"
              autoComplete="off"
              value="1900-1950"
              onChange={(e) => handleReleaseDate(e.target.value)}
            />
            <label
              className="btn btn-outline-primary"
              htmlFor="btnradio1900-1950"
            >
              1900-1950
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradioYear"
              id="btnradio1950-1970"
              autoComplete="off"
              value="1950-1970"
              onChange={(e) => handleReleaseDate(e.target.value)}
            />
            <label
              className="btn btn-outline-primary"
              htmlFor="btnradio1950-1970"
            >
              1950-1970
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradioYear"
              id="btnradio1970-1990"
              autoComplete="off"
              value="1970-1990"
              onChange={(e) => handleReleaseDate(e.target.value)}
            />
            <label
              className="btn btn-outline-primary"
              htmlFor="btnradio1970-1990"
            >
              1970-1990
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradioYear"
              id="btnradio1990-2000"
              autoComplete="off"
              value="1990-2000"
              onChange={(e) => handleReleaseDate(e.target.value)}
            />
            <label
              className="btn btn-outline-primary"
              htmlFor="btnradio1990-2000"
            >
              1990-2000
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradioYear"
              id="btnradio2000-2010"
              autoComplete="off"
              value="2000-2010"
              onChange={(e) => handleReleaseDate(e.target.value)}
            />
            <label
              className="btn btn-outline-primary"
              htmlFor="btnradio2000-2010"
            >
              2000-2010
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradioYear"
              id="btnradio2010-2020"
              autoComplete="off"
              value="2010-2020"
              onChange={(e) => handleReleaseDate(e.target.value)}
            />
            <label
              className="btn btn-outline-primary"
              htmlFor="btnradio2010-2020"
            >
              2010-2020
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradioYear"
              id="btnradio2020Next"
              autoComplete="off"
              value="2020-next"
              onChange={(e) => handleReleaseDate(e.target.value)}
            />
            <label
              className="btn btn-outline-primary"
              htmlFor="btnradio2020Next"
            >
              2020 and After
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
