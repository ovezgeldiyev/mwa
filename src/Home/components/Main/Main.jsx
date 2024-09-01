import React from "react";
import Marquee from "./Marquee";
import Form from "./Form";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="introMain">
      <div className="introMain__bg">
        INTERPLANETARY FILESTORAGE BLOCKCHAIN 0x031231132 INTERPLANETARY
        FILESTORAGE BLOCKCHAIN 0x031231132
      </div>

      <div className="introMain__inner">

        <div className="introMain__top">
        <div className="introMain__image">
          <img src={process.env.PUBLIC_URL + "/images/image.png"} alt="image" />
          <img className="mob" src={process.env.PUBLIC_URL + "/images/image-mob.png"} alt="image" />
          <Link href="#" className="button primary">
            <span>
              <img src="/images/button-arrow.svg" alt="" />
            </span>
            You Ready To Read?
          </Link>
        </div>
          <div className="introMain__head">
            <div className="introMain__logo">
              <img
                src={process.env.PUBLIC_URL + "/images/logo.svg"}
                alt="avatar"
              />
            </div>
          </div>
          <div className="introMain__text">
            <img src={process.env.PUBLIC_URL + "/images/text.svg"} alt="text" />
          </div>
        </div>
        <Marquee />
        <Form />
      </div>
    </div>
  );
}
