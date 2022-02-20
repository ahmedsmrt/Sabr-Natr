// import GalleryNav from "../../shared/components/UIElements/GalleryNav";
import React from "react";
import { useState } from "react";
import Photos from "./Photos";
import JapanMap from "./JapanMap";

const PhotoContainer = (props) => {
  const [countryNumber, setCountryNumber] = useState(1);
  const [placeTitle, setPlaceTitle] = useState("Mt. Fuji");
  const [quickFacts, setQuickFacts] = useState([
    "Largest Mountain in Japan",
    "Best time to visit is in the fall",
    "Best Nearby Restaurant: Tontaro",
  ]);

  const countryObj = {
    countries: [
      [
        "United States",
        ["Mt. Fuji", "Osaka Temple", "Meditation Forest", "Yasuke's Residence"],
      ],
      [
        "Japan",
        [
          "Mt. Fuji",
          "Osaka Temple",
          "Hotel Beat Wave",
          "Fushini Inari",
          "Seki-juku District",
          "Chureito Pagoda",
        ],
      ],
      [
        "Germany",
        ["Mt. Fuji", "Osaka Temple", "Meditation Forest", "Yasuke's Residence"],
      ],
      [
        "Sudan",
        ["Mt. Fuji", "Osaka Temple", "Meditation Forest", "Yasuke's Residence"],
      ],
      [
        "Spain",
        ["Mt. Fuji", "Osaka Temple", "Meditation Forest", "Yasuke's Residence"],
      ],
      [
        "Brazil",
        ["Mt. Fuji", "Osaka Temple", "Meditation Forest", "Yasuke's Residence"],
      ],
      [
        "Korea",
        ["Mt. Fuji", "Osaka Temple", "Meditation Forest", "Yasuke's Residence"],
      ],
      [
        "Russia",
        ["Mt. Fuji", "Osaka Temple", "Meditation Forest", "Yasuke's Residence"],
      ],
    ],
  };

  const countryOne = countryObj.countries[1][0];
  const placeOne = countryObj.countries[1][1][0];
  const placeTwo = countryObj.countries[1][1][1];
  const placeThree = countryObj.countries[1][1][2];
  const placeFour = countryObj.countries[1][1][3];
  const placeFive = countryObj.countries[1][1][4];
  const placeSix = countryObj.countries[1][1][5];

  const photoClickOne = () => {
    const photoOneArray = [
      "Largest Mountain in Japan",
      "Best time to visit is in the fall",
      "Best Nearby Restaurant: Tontaro",
    ];
    setPlaceTitle(placeOne);
    setQuickFacts(photoOneArray);
    setCountryNumber(1);
  };
  const photoClickTwo = () => {
    const photoOneArray = [
      "Most Peaceful Bridge in Japan",
      "Best time to visit is in the Spring",
      "Best Nearby Restaurant: Jinsei",
    ];
    setPlaceTitle(placeTwo);
    setQuickFacts(photoOneArray);
    setCountryNumber(2);
  };
  const photoClickThree = () => {
    const photoOneArray = [
      "Well Known Love Hotel",
      "Best time to visit is Never",
      "Best Nearby Restaurant: Bar Benfiddich",
    ];
    setPlaceTitle(placeThree);
    setQuickFacts(photoOneArray);
    setCountryNumber(3);
  };

  const photoClickFour = () => {
    const photoOneArray = [
      "Peaceful Shrine where Meditation is Sublime",
      "Best time to visit is in the all year round",
      "Best Nearby Restaurant: Omiya",
    ];
    setPlaceTitle(placeFour);
    setQuickFacts(photoOneArray);
    setCountryNumber(4);
  };
  const photoClickFive = () => {
    const photoOneArray = [
      "One of the most aesthetic neighborhoods in Japan",
      "Best time to visit is in the fall",
      "Best Nearby Restaurant: Suzuka-tei",
    ];
    setPlaceTitle(placeFive);
    setQuickFacts(photoOneArray);
    setCountryNumber(5);
  };

  const photoClickSix = () => {
    const photoOneArray = [
      "Has the best view of Mt. Fuji",
      "Best time to visit is all year rpund",
      "Best Nearby Restaurant: Arakura",
    ];
    setPlaceTitle(placeSix);
    setQuickFacts(photoOneArray);
    setCountryNumber(6);
  };

  return (
    <React.Fragment>
      {/* <GalleryNav /> */}
      <div id="gallery-container">
        <div id="gallery-wrap">
          <div id="imgbox">
            <Photos
              imgSrc={`../../images/${countryOne}/${countryOne}-${countryNumber}.jpg`}
            />
          </div>
          <div id="info-container">
            <div id="countries">
              <h1>{placeTitle}</h1>
            </div>
            <div id="country"></div>
            <div id="map">
              <JapanMap />
            </div>
            <div id="quick-facts">
              <h3>Quick Facts</h3>
              <ul>
                <li>{quickFacts[0]}</li>
                <li>{quickFacts[1]}</li>
                <li>{quickFacts[2]}</li>
              </ul>
            </div>
          </div>
          <div id="photo-container">
            <div className="photoOnClickHack">
              <div onClick={photoClickOne} className="photo-gallery">
                <div className="gallery-overlay">
                  <h1>{placeOne}</h1>
                </div>
              </div>
              <div onClick={photoClickTwo} className="photo-gallery">
                <div className="gallery-overlay">
                  <h1>{placeTwo}</h1>
                </div>
              </div>{" "}
              <div onClick={photoClickThree} className="photo-gallery">
                <div className="gallery-overlay">
                  <h1>{placeThree}</h1>
                </div>
              </div>{" "}
              <div onClick={photoClickFour} className="photo-gallery">
                <div className="gallery-overlay">
                  <h1>{placeFour}</h1>
                </div>
              </div>{" "}
              <div onClick={photoClickFive} className="photo-gallery">
                <div className="gallery-overlay">
                  <h1>{placeFive}</h1>
                </div>
              </div>{" "}
              <div onClick={photoClickSix} className="photo-gallery">
                <div className="gallery-overlay">
                  <h1>{placeSix}</h1>
                </div>
              </div>
            </div>

            <Photos
              imgSrc={`../../images/${countryOne}/${countryOne}-1.jpg`}
              imgTitle={`${placeOne}`}
            />
            <Photos
              imgSrc={`../../images/${countryOne}/${countryOne}-2.jpg`}
              imgTitle={`${placeTwo}`}
            />
            <Photos
              imgSrc={`../../images/${countryOne}/${countryOne}-3.jpg`}
              imgTitle={`${placeThree}`}
            />
            <Photos
              imgSrc={`../../images/${countryOne}/${countryOne}-4.jpg`}
              imgTitle={`${placeFour}`}
            />
            <Photos
              imgSrc={`../../images/${countryOne}/${countryOne}-5.jpg`}
              imgTitle={`${placeFive}`}
            />
            <Photos
              imgSrc={`../../images/${countryOne}/${countryOne}-6.jpg`}
              imgTitle={`${placeSix}`}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PhotoContainer;
