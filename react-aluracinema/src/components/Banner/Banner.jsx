import styles from "./Banner.module.css";

const Banner = ({ img, color }) => {
  const image = `url('/img/banner-${img}.png')`;
  return (
    <>
      <div className={styles.capa} style={{ backgroundImage: image }}>
        <div
          className={styles.gradient}
          style={{ background: `${color}` }}
        ></div>
      </div>
    </>
  );
};

export default Banner;
