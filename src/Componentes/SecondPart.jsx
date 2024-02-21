import React from "react";
import styles from "./SecondPart.module.css";
import List from "../../images/List.svg?react";
import Timer from "../../images/Timer.svg?react";
import Exercise from "../../images/Exercise.svg?react";
import Button from "./Button";
import Arrow from "../../images/Arrow.svg?react";
import Machine from "../../images/machine.svg?react";
import Modern from "../../images/modern.svg?react";
import Professional from "../../images/ProfessionalWeight.svg?react";
import P from "./P";

const SecondPart = () => {
  return (
    <section className={styles.secondPart}>
      <section className={styles.internContainer}>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <Timer />
            <h1>PROGRESSION</h1>
            <p>
              Our team of experts will work with you to create a customized plan
              that helps you achieve success one step at a time.
            </p>
          </div>
          <div className={styles.card}>
            <Exercise />
            <h1>WORKOUT</h1>
            <p>
              With a variety of workouts to choose from, you`ll have everything
              you need to get into the best shape of your life.
            </p>
          </div>
          <div className={styles.card}>
            <List />
            <h1>NUTRITIONS</h1>
            <p>
              Our team will work with you to create a personalized meal plan
              that helps you reach your specific health goals.
            </p>
          </div>
        </div>

        <div className={styles.whoweare}>
          <div className={styles.takeatour}>
            <P>WHO WE ARE</P>
            <div>
              <h1>Take Your Health And Body To Next Level </h1>
              <p className={styles.textHealth}>
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p>
            </div>

            <div className={styles.types}>
              <div className={styles.someMov}>
                <Professional />
                <h2>PROFESSIONAL TRAINER</h2>
              </div>
              <div className={styles.someMov}>
                <Modern />
                <h2>MODERN EQUIPAMENTS</h2>
              </div>
              <div className={styles.someMov}>
                <Machine />
                <h2>FANCY GYM MACHINES</h2>
              </div>
            </div>
            <Button>
              TAKE A TOUR <Arrow />
            </Button>
          </div>
          <div className={styles.girlRunning}>
            <img
              className={styles.girl}
              src="https://gymate-iota.vercel.app/static/media/girl-run.2823e00263d26d8f8230.png"
              alt=""
            />
            <img
              className={styles.circleRed}
              src="https://gymate-iota.vercel.app/static/media/girl-redbg.f8dedc2cc0539fb0e60979db3b5245da.svg"
              alt=""
            />
            <img
              className={styles.running}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAI1CAYAAACudRZTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplNGJiYzEzNi02MGQyLTAzNGMtYjViMS05NDhiODhlZjEzOGYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUU1NjdDNTQ5NTMwMTFFQ0E4QUJGNUQ3QTg2NjBCNjQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUU1NjdDNTM5NTMwMTFFQ0E4QUJGNUQ3QTg2NjBCNjQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODA5MTdlY2YtYjRhYS0zYTQzLTllMzctNjRlOWJiZTJiYWQxIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NjZlNjAxNTMtYTNlYS1lODQ2LTljZjQt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"
              alt=""
            />
            <img
              className={styles.wind}
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default SecondPart;
