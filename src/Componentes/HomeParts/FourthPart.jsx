import React from "react";
import styles from "./FourthPart.module.css";
import Button from "../Elements/Button.jsx";
import P from "../Elements/P.jsx";

const FourthPart = () => {
  return (
    <section className={styles.fourthPart}>
      <div className={styles.redAd}>
        <h1>We are Always Providing Best Fitness Service For You</h1>
        <Button>JOIN WITH US</Button>
      </div>
      <section className={styles.internContainer}>
        <div className={styles.GiveShape}>
          <div className={styles.videoDiv}>
            {" "}
            <div className={styles.buttonPlayer}>
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <img
              className={styles.videoGym}
              src="https://gymate-iota.vercel.app/static/media/main-img.dc4a3b692a7f198eb88b.png"
              alt=""
            />
          </div>
          <div className={styles.whychoose}>
            <P>WHY CHOOSE US</P>
            <div className={styles.wecan}>
              <h1>We Can Give A Shape Of Your Body Here!</h1>{" "}
              <p>
                At <strong>Gymate</strong>, we are dedicated to helping you achieve the body of
                your dreams. Our expert trainers and nutritionists will work
                with you to create a personalized fitness and nutrition plan
                that helps you reach your specific goals.
              </p>
            </div>
            <div className={styles.forms}>
              {" "}
              <div className={styles.typesWe}>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />{" "}
                <h3> Free Fitness Training</h3>
              </div>
              <div className={styles.typesWe}>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />{" "}
                <h3>Modern Gym Equipments</h3>
              </div>
              <div className={styles.typesWe}>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />{" "}
                <h3>Gym Bag Equipments</h3>
              </div>
              <div className={styles.typesWe}>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAEAQAAABQ8GUWAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cBBw0vMrUxai0AAANqSURBVHja7Zs9SBthGMcvEbVWRKEughSkguhQqVgQjVCXDp0dOlpsBKEiNIPSSRA0UHTRSUFs91IQnJQMShf3NrSDVjAtmKr4ERDB59fhIV7Aj5h4uTcx91/uvbs3zz3/392b9+MSy/LkyXHBt29krEQCIhF48cJ0/g4AWF/PHECqPnww7cEhEKrbnEdqayEUgrMzEIFXr0zn7yoA+1gopEcjEdP5Z29cSkuRqam7NYOkYjEIh5GyMtO+MgDglPlUhcOmfWUAIB7XpDs77x4rEEg+CaZ93T7pNG3fdLxU+d3Dkp/yAJhOwLQ8ALkMnl13t75uf17nFAULIFtsdlnEdDZZWvC6wYKR4wCQ0tKLskOyY09Pw8EB7O8j09N5OT9AJiacnwdcI5maMu33MgB2djS7u88DbKjJ+YDGvdiXeNy03ysA5OYLy77rgQDS3W0DGRsz7dldAFfq/XvTvl0E8O8fEo8jHz9Cf78eOztDWltNe3cFwOXjs7PaNFZXTXs3BODRIzg+VgjPn2caN2cDIeTdO1hchI0N2N7Wdf9EQstfv8KbN/DgwV2v4/Pt7VnMzenewECu/NzeeEaKxaCvD0pKro/n9yO9vTc9WdDSomd3d2+K5TKAz59hcBC6upDGRqishIoKaGhA3r5FolG7a4tGkWAQnjyBhw+R6mpoa4OREfj1KxXZ9df9+VNrdHTkBYD09UpK9O4nB043aXs7LQCZn9caw8MFAcBOvLwc+vqQL19gawsSCeTkBH78gIUF5OVL8PvTAwgGtcanTwUFwKm40NOjNdbWMol7j6bDv3/r9vHjIgVwcKDb6uriBEAioYXKyuIEYPl8us1sHfH+APBVVWnh6Kg4ASTbPsfHRQqgocGyLMvy/flTpACamnT7/XtxAuDZMy1Eo2bzMDYS3NzUGm1tRQcAmpv17N+/kOwOb6f70QQIBrWwtOTz5fZlavpcXF8Sq6mBvT1dV3j61Kh5MwBmZtT8yopp764DgNev4fwcTk+hpcW0d1cAQF0dUl8P4+P6s1qAoSHTvl0EkKrzcxgdNe3ZZQCHh3B0BMvLSHu7ab+uA3A67v0YB3gAPAAeAA+AB8AD4AHIEwC6KIkEAk5FRLq7U2PntSAcTv+6O1tNTpr2lx6AlJUphFjMOeMF+Nc5TwWi/5iynA+hIN6NAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTAxLTA3VDEzOjQ3OjUwKzAwOjAwJd9YuAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0wMS0wN1QxMzo0Nzo1MCswMDowMFSC4AQAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjMtMDEtMDdUMTM6NDc6NTArMDA6MDADl8HbAAAAAElFTkSuQmCC"
                  alt=""
                />{" "}
                <h3>Fresh Bottle Watter</h3>
              </div>
            </div>
            <Button>OUR CLASSES</Button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FourthPart;
