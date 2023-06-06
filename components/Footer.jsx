import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/68893154?s=400&u=7f2798d056698cbba67536f436b2d1016a44294a&v=4"}
          alt="Founder"
        />

        <h2>Aniket Surve</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
        <p>Trust the process.</p>

      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.youtube.com/channel/UCDJ6_DZEN8DSqTdUKuJ5XtQ" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://www.instagram.com/aniket_surve_05/?r=nametag" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/AniketSurve0502" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;