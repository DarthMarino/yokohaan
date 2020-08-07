import React from "react";
import RrFooter from "rc-footer";
import "rc-footer/assets/index.css";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <>
        <RrFooter
          className="backgroundFooter"
          columns={[
            {
              icon: (
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
                  alt="icono de periquito"
                />
              ),
              title: "Redes Sociales",
              openExternal: true,
              items: [
                {
                  title: "Instagram",
                  url: "https://www.instagram.com/yoko_haan/",
                  description: "YokoHaan",
                  openExternal: true,
                },
                {
                  title: "DevianArt",
                  url: "https://www.deviantart.com/yokohaan",
                  description: "YokoHaan",
                  openExternal: true,
                },
                {
                  title: "Kseyo",
                  url: "https://hinative.com/es-MX/questions/4048116",
                  description: "Bruh",
                },
              ],
            },
          ]}
          bottom="Made by MaghiWorks"
        />
      </>
    );
  }
}

export default Footer;
