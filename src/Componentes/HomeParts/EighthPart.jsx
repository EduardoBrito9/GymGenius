import React from "react";
import styles from "./EighthPart.module.css";
import Juice from "../../../images/Juice.svg?react";


const EighthPart = () => {
  const [weight, setWeight] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [imc, SetImc] = React.useState(0);
  const [status, setStatus] = React.useState("");

  const calculateImc = () => {
    console.log(weight, height);
    console.log(imc);
    const result = weight / (height * height);

    if (result < 18.5) setStatus("Abaixo do peso");

    if (result >= 18.5) setStatus("Peso normal");

    if (result >= 25) setStatus("Sobrepeso");

    if (result >= 30) setStatus("Obesidade grau 1");

    if (result >= 35) setStatus("Obesidade grau 2");

    if (result >= 40) setStatus("Obesidade grau 3");

    SetImc(result.toFixed(1));
  };

  return (
    <section className={styles.eighth}>
      <div className={styles.calculatePart}>
        <h1>
          Lets Calculate your <strong>BMI</strong>
        </h1>
        <span>
          Easily determine your body mass index with our accurate calculation
          tool.
        </span>
        <div className={styles.values}>
          <input
            type="number"
            onChange={({ target }) => {
              setWeight(target.value);
            }}
            placeholder="Weight / kg"
          />
          <input
            type="number"
            onChange={({ target }) => {
              setHeight(target.value / 100);
            }}
            placeholder="Height / cm"
          />
          <span>
            Your BMI is: <p className={styles.result}> {imc}</p>
          </span>
          <span>
            Your weight is: <p className={styles.result}> {status}</p>
          </span>
        </div>

        <button className={styles.calcButton} onClick={calculateImc}>
          CALCULATE
        </button>
      </div>
      <Juice/>
    </section>
  );
};

export default EighthPart;
