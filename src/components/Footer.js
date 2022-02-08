import SvgArrowLeft from "../assets/SvgArrowLeft";
import SvgArrowRight from "../assets/SvgArrowRight";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__container">
        <SvgArrowLeft />

        <p>4</p>
        <p>5</p>
        <p id="six">6</p>
        <p>7</p>
        <p>8</p>
        <SvgArrowRight />
      </div>
    </section>
  );
};

export default Footer;
