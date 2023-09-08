import "./Footer.scss"
import payment from "../../assets/img/payment.png";


const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrival</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            voluptate ad doloribus sint blanditiis harum, excepturi similique
            debitis iusto amet id odio aspernatur animi eius quas obcaecati,
            magnam fugiat aliquam suscipit optio cupiditate pariatur?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            voluptate ad doloribus sint blanditiis harum, excepturi similique
            debitis iusto amet id odio aspernatur animi eius quas obcaecati,
            magnam fugiat aliquam suscipit optio cupiditate pariatur?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">AQSTORE</span>
          <span className="copyright">
            {" "}
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
				<div className="right">
					<img src={payment} alt="" />
				</div>
      </div>
    </div>
  );
};

export default Footer;
