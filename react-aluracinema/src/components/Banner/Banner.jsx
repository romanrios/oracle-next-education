import styles from "./Banner.module.css";

const Banner = ({ img, color }) => {
  const image = `url('./img/banner-${img}.png')`;
  return (
    <div className={styles.Banner} style={{ backgroundImage: image }}>
      <div className={styles.gradient} style={{ background: `${color}` }}></div>
    </div>
  );
};

export default Banner;
