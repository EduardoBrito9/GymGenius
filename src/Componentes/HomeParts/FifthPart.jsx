import React from "react";
import styles from "./FifthPart.module.css";
import P from "../Elements/P";
import Facebook from "../../../images/Facebook.svg?react";
import Twitter from "../../../images/Twitter.svg?react";
import Linkedin from "../../../images/Linkedin.svg?react";

const FifthPart = () => {
  return (
    <section className={styles.fifthPart}>
      <section className={styles.internContainer}>
        <div className={styles.textExpert}>
          <P>GYM TRAINERS</P>
          <h1>Team Of Expert Coaches</h1>
          <p>
            Expert team of coaches helps you succeed in any goal, personalized
            guidance and motivation provided!
          </p>
        </div>
        <div className={styles.divTrainers}>
          <div className={styles.trainers}>
            <img
              className={styles.imgPersonal}
              src="https://gymate-iota.vercel.app/static/media/trainer1.2b262907a2293e42de47.png"
              alt=""
            />
            <img
              className={styles.imgRed}
              src="https://gymate-iota.vercel.app/static/media/trainer-bg.d8a91ceec330444b6dfd.png"
              alt=""
            />
            <div className={styles.contactPersonal}>
              <img
                className={styles.borderCircle}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAAcCAYAAAC51jtqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUxNEYyN0REN0Y1MDExRUM4NTVGRDY5QUNBREYzNzg5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUxNEYyN0RFN0Y1MDExRUM4NTVGRDY5QUNBREYzNzg5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTE0RjI3REI3RjUwMTFFQzg1NUZENjlBQ0FERjM3ODkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTE0RjI3REM3RjUwMTFFQzg1NUZENjlBQ0FERjM3ODkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7MUcegAAACVElEQVR42uyaz0tVQRTH55mIvIUkZWGCUQsXqRi5CWrTopVFKgrV0gKRMBch9CcIuTBcCdomqCDIoGhhizYibdKkDHGRFLbIH5QSLkR6fg73IIHi09679829M1/4cHdv5pzvPXfemZlUJpMxMVcZVEMd1OrzNBxXRD+Vr/AZZvT5HdbiHHwqhgaWwDm4CrfhWI6/twjD8AomYcMbGMI8oR56oCPksR7BQ/gEGW9gbiqGNhiEoxGPvQx34TlsegMPpiK4CUOQLvBc1qETnsBfb2B2nYWXcNKyef2AK/DRtjfdps/lCExZaJ6oSuc2onP1FfiPTsCEpcbtpm9wQavS+Qq8pomIi3lG57oAza4b2KPrXVw1qjE4Z6D0dQ9gwMRfAxpLyqU1sB/umWRpUPvGRFfgGXicQPNE3dr01yS1AmXTeckEe5lJluylHoE/SarAUph1wDyjMc5pzIkwUAKahkrjjio15pK4Gyhv4fuo1wVLVKOxh1qJYa6B5fABThm3NQ+N8CtOFVinOxWum2c0BwuaE+sNlGb2jgkOQ9Peu22lNSdd+W748/kJPQwv4JL3a0+9g1b4bUsFyhvVrj2eNy+7JEcrmrNUoStQdlZGHf2XmQ9Jv9gCX6KuQLnG99oE1/O8ebm1GjOay+qwDZRyb4AxExxoNvn8501NmtMxzfG+P637+YSW6QByZFLlcx2J5IC7F97A6v8YKJuxF+E+nPf5LKhkN6cPxvXPzw4DD/GsMMG19Mtwy0R/BzObbsCziMe8Dk8ty4PcVZVLVW917VzaEmAAL9SLC+jyPOkAAAAASUVORK5CYII="
                alt=""
              />
              <i className={styles.arrow}>▶</i>
              <h1>John Lewis</h1> <span>Yoga Trainer</span>{" "}
              <ul className={styles.socialTrainers}>
                <li>
                  {" "}
                  <Twitter />{" "}
                </li>
                <li>
                  <Facebook />
                </li>
                <li>
                  <Twitter />
                </li>
                <li>
                  <Twitter />
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.trainers}>
            <img
              className={styles.imgPersonal}
              src="https://gymate-iota.vercel.app/static/media/trainer2.e1fe210e1c836343c1fe.png"
              alt=""
            />
            <img
              className={styles.imgRed}
              src="https://gymate-iota.vercel.app/static/media/trainer-bg.d8a91ceec330444b6dfd.png"
              alt=""
            />
            <div className={styles.contactPersonal}>
              <img
                className={styles.borderCircle}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAAcCAYAAAC51jtqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUxNEYyN0REN0Y1MDExRUM4NTVGRDY5QUNBREYzNzg5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUxNEYyN0RFN0Y1MDExRUM4NTVGRDY5QUNBREYzNzg5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTE0RjI3REI3RjUwMTFFQzg1NUZENjlBQ0FERjM3ODkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTE0RjI3REM3RjUwMTFFQzg1NUZENjlBQ0FERjM3ODkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7MUcegAAACVElEQVR42uyaz0tVQRTH55mIvIUkZWGCUQsXqRi5CWrTopVFKgrV0gKRMBch9CcIuTBcCdomqCDIoGhhizYibdKkDHGRFLbIH5QSLkR6fg73IIHi09679829M1/4cHdv5pzvPXfemZlUJpMxMVcZVEMd1OrzNBxXRD+Vr/AZZvT5HdbiHHwqhgaWwDm4CrfhWI6/twjD8AomYcMbGMI8oR56oCPksR7BQ/gEGW9gbiqGNhiEoxGPvQx34TlsegMPpiK4CUOQLvBc1qETnsBfb2B2nYWXcNKyef2AK/DRtjfdps/lCExZaJ6oSuc2onP1FfiPTsCEpcbtpm9wQavS+Qq8pomIi3lG57oAza4b2KPrXVw1qjE4Z6D0dQ9gwMRfAxpLyqU1sB/umWRpUPvGRFfgGXicQPNE3dr01yS1AmXTeckEe5lJluylHoE/SarAUph1wDyjMc5pzIkwUAKahkrjjio15pK4Gyhv4fuo1wVLVKOxh1qJYa6B5fABThm3NQ+N8CtOFVinOxWum2c0BwuaE+sNlGb2jgkOQ9Peu22lNSdd+W748/kJPQwv4JL3a0+9g1b4bUsFyhvVrj2eNy+7JEcrmrNUoStQdlZGHf2XmQ9Jv9gCX6KuQLnG99oE1/O8ebm1GjOay+qwDZRyb4AxExxoNvn8501NmtMxzfG+P637+YSW6QByZFLlcx2J5IC7F97A6v8YKJuxF+E+nPf5LKhkN6cPxvXPzw4DD/GsMMG19Mtwy0R/BzObbsCziMe8Dk8ty4PcVZVLVW917VzaEmAAL9SLC+jyPOkAAAAASUVORK5CYII="
                alt=""
              />
              <i className={styles.arrow}>▶</i>
              <h1>Jonathan Doe</h1> <span>Crossfit Trainer</span>{" "}
              <ul className={styles.socialTrainers}>
                <li>
                  {" "}
                  <Twitter />{" "}
                </li>
                <li>
                  <Facebook />
                </li>
                <li>
                  <Twitter />
                </li>
                <li>
                  <Twitter />
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.trainers}>
            <img
              className={styles.imgPersonal}
              src="https://gymate-iota.vercel.app/static/media/trainer3.8b049fcaa3d9d0a3f143.png"
              alt=""
            />
            <img
              className={styles.imgRed}
              src="https://gymate-iota.vercel.app/static/media/trainer-bg.d8a91ceec330444b6dfd.png"
              alt=""
            />
            <div className={styles.contactPersonal}>
              <img
                className={styles.borderCircle}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAAcCAYAAAC51jtqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUxNEYyN0REN0Y1MDExRUM4NTVGRDY5QUNBREYzNzg5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUxNEYyN0RFN0Y1MDExRUM4NTVGRDY5QUNBREYzNzg5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTE0RjI3REI3RjUwMTFFQzg1NUZENjlBQ0FERjM3ODkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTE0RjI3REM3RjUwMTFFQzg1NUZENjlBQ0FERjM3ODkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7MUcegAAACVElEQVR42uyaz0tVQRTH55mIvIUkZWGCUQsXqRi5CWrTopVFKgrV0gKRMBch9CcIuTBcCdomqCDIoGhhizYibdKkDHGRFLbIH5QSLkR6fg73IIHi09679829M1/4cHdv5pzvPXfemZlUJpMxMVcZVEMd1OrzNBxXRD+Vr/AZZvT5HdbiHHwqhgaWwDm4CrfhWI6/twjD8AomYcMbGMI8oR56oCPksR7BQ/gEGW9gbiqGNhiEoxGPvQx34TlsegMPpiK4CUOQLvBc1qETnsBfb2B2nYWXcNKyef2AK/DRtjfdps/lCExZaJ6oSuc2onP1FfiPTsCEpcbtpm9wQavS+Qq8pomIi3lG57oAza4b2KPrXVw1qjE4Z6D0dQ9gwMRfAxpLyqU1sB/umWRpUPvGRFfgGXicQPNE3dr01yS1AmXTeckEe5lJluylHoE/SarAUph1wDyjMc5pzIkwUAKahkrjjio15pK4Gyhv4fuo1wVLVKOxh1qJYa6B5fABThm3NQ+N8CtOFVinOxWum2c0BwuaE+sNlGb2jgkOQ9Peu22lNSdd+W748/kJPQwv4JL3a0+9g1b4bUsFyhvVrj2eNy+7JEcrmrNUoStQdlZGHf2XmQ9Jv9gCX6KuQLnG99oE1/O8ebm1GjOay+qwDZRyb4AxExxoNvn8501NmtMxzfG+P637+YSW6QByZFLlcx2J5IC7F97A6v8YKJuxF+E+nPf5LKhkN6cPxvXPzw4DD/GsMMG19Mtwy0R/BzObbsCziMe8Dk8ty4PcVZVLVW917VzaEmAAL9SLC+jyPOkAAAAASUVORK5CYII="
                alt=""
              />
              <i className={styles.arrow}>▶</i>
              <h1>Ana June</h1> <span>Personal Trainer</span>{" "}
              <ul className={styles.socialTrainers}>
                <li>
                  {" "}
                  <Twitter />{" "}
                </li>
                <li>
                  <Facebook />
                </li>
                <li>
                  <Twitter />
                </li>
                <li>
                  <Twitter />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FifthPart;
