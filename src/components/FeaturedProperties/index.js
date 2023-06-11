import useFetch from "../../hooks/useFetch";
// import ft_img1 from "../../asset/featured_img1.webp";
// import ft_img2 from "../../asset/featured_img2.jpg";
// import ft_img3 from "../../asset/featured_img3.jpg";
// import ft_img4 from "../../asset/featured_img4.jpg";

const FeaturedProperties = () => {
  const { data, loading } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div className="ft__properties d-flex justify-content-between">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.hotels.map((item) => (
            <div className="ft__properties__item d-flex column" key={item._id}>
              <img src={item.photos[0]} alt="hotel_img" />
              <span className="ft__property__name">{item.name}</span>
              <span className="ft__property__city">
                {`${item.city.at(0).toUpperCase()}${item.city.slice(1)}`}
              </span>
              <span className="ft__property__price">
                Starting from {item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="ft__property__rating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}

      {/* <div className="ft__properties__item d-flex column">
        <img src={ft_img1} alt="" />
        <span className="ft__property__name">Aparthotel Stare Miasto</span>
        <span className="ft__property__city">Madrid</span>
        <span className="ft__property__price">Starting from $120</span>
        <div className="ft__property__rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="ft__properties__item d-flex column">
        <img src={ft_img2} alt="" />
        <span className="ft__property__name">Comfort Suites Airport</span>
        <span className="ft__property__city">London</span>
        <span className="ft__property__price">Starting from $120</span>
        <div className="ft__property__rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="ft__properties__item d-flex column">
        <img src={ft_img3} alt="" />
        <span className="ft__property__name">Four Seasons Hotel</span>
        <span className="ft__property__city">Las Vegas</span>
        <span className="ft__property__price">Starting from $120</span>
        <div className="ft__property__rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="ft__properties__item d-flex column">
        <img src={ft_img4} alt="" />
        <span className="ft__property__name">Hilton Garden Hill</span>
        <span className="ft__property__city">Autsin</span>
        <span className="ft__property__price">Starting from $120</span>
        <div className="ft__property__rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div> */}
    </div>
  );
};

export default FeaturedProperties;
