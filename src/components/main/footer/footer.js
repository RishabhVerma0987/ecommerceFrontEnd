import React from "react";
import "./footer.scss";
function Footer() {
  const links = [
    {
      name: "github",
      link: "https://github.com/RishabhVerma098",
    },
    {
      name: "linked",
      link: "https://www.linkedin.com/in/rishabh-verma-174153137/",
    },
    {
      name: "gmail",
      link: "vermarishabh0987@gmail.com",
    },
  ];

  return (
    <div className="footer">
      <h3>By , Rishabh verma </h3>
      <div className="links">
        {links.map((i) => {
          if (i.name === "gmail") {
            return (
              <a href={`mailto:${i.link}`}>
                <img
                  src={require(`../../../assets/${i.name}.png`)}
                  alt={i.name}
                ></img>
              </a>
            );
          } else {
            return (
              <a href={i.link}>
                <img
                  src={require(`../../../assets/${i.name}.png`)}
                  alt={i.name}
                ></img>
              </a>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Footer;
