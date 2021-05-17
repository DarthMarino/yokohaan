import React from "react";

import { Icon } from "@iconify/react";
import koFi from "@iconify-icons/simple-icons/ko-fi";
import instagramFilled from "@iconify-icons/ant-design/instagram-filled";
import twitterOutlined from "@iconify-icons/ant-design/twitter-outlined";

import "./Socials.css";

const IconLocale = (props) => {
  return (
    <div className="icon-container">
      <Icon className={`icon ${props.color}`} icon={props.icon} />
    </div>
  );
};

const Socials = () => {
  return (
    <>
      <div className="component">
        <div className="title">
          <h1>My Socials</h1>
        </div>
        <div className="p-5 text-center social-container ">
          <div className=".hvr-grow">
            <a
              href="https://ko-fi.com/yokohaan"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="social">
                <IconLocale icon={koFi} color="kofi" />
                <h2>Ko-fi</h2>
              </div>
            </a>
          </div>
          <a
            href="https://twitter.com/YokoHaanTsu"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="social">
              <IconLocale icon={twitterOutlined} color="twitter" />
              <h2>Twitter</h2>
            </div>
          </a>
          <a
            href="https://www.instagram.com/yokohaan_art/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="social">
              <IconLocale icon={instagramFilled} color="instagram" />
              <h2>Instagram</h2>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Socials;
