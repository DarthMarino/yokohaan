import React from "react";

import { Icon, InlineIcon } from "@iconify/react";
import koFi from "@iconify-icons/simple-icons/ko-fi";
import instagramFilled from "@iconify-icons/ant-design/instagram-filled";
import twitterOutlined from "@iconify-icons/ant-design/twitter-outlined";

import "./Socials.css";

const IconLocale = (props) => {
  return (
    <div className="icon-container">
      <a href={props.href} target="_blank" rel="noreferrer noopener">
        <Icon className={`icon ${props.color}`} icon={props.icon} />
      </a>
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
          <div className="social">
            <IconLocale
              icon={koFi}
              color="kofi"
              href="https://ko-fi.com/yokohaan"
            />
            <h2>Ko-fi</h2>
          </div>
          <div className="social">
            <IconLocale
              icon={instagramFilled}
              color="instagram"
              href="https://www.instagram.com/yokohaan_art/"
            />
            <h2>Instagram</h2>
          </div>
          <div className="social">
            <IconLocale
              icon={twitterOutlined}
              color="twitter"
              href="https://twitter.com/YokoHaanTsu"
            />
            <h2>Twitter</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Socials;
