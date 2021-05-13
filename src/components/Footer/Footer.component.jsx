import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="footer">
          <MDBFooter className="backgroundFooter text-white text-center text-lg-left ">
            <div
              className="text-center p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              &copy; {new Date().getFullYear()} Made By:{" "}
              <a className="text-white" href="https://github.com/DarthMarino">
                Marino Gomez
              </a>
            </div>
          </MDBFooter>
        </div>
      </>
    );
  }
}

export default Footer;
