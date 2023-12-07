import { useState } from "react";
import BackProject from "./BackProject";

export default function Rewards() {
  const [openModal, setModalOpen] = useState(false);

  return (
    <div className="rewards">
      <article className="reward">
        <h3>Bamboo Stand</h3>
        <p className="pledge">Pledge $25 or more</p>
        <p className="pledge-description">
          You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you’ll be added to a special
          Backer member list.
        </p>
        <div className="reward-col">
          <div className="reward-row">
            <p className="statistic">101</p>
            <h4>left</h4>
          </div>
          <button
            onClick={() => setModalOpen((prev) => !prev)}
            className="reward-btn"
          >
            Select Reward
          </button>
        </div>
      </article>
      <article className="reward">
        <h3>Black Edition Stand</h3>
        <p className="pledge">Pledge $75 or more</p>
        <p className="pledge-description">
          You get a Black Special Edition computer stand and a personal thank
          you. You’ll be added to our Backer member list. Shipping is included.
        </p>
        <div className="reward-col">
          <div className="reward-row">
            <p className="statistic">64</p>
            <h4>left</h4>
          </div>
          <button
            onClick={() => setModalOpen((prev) => !prev)}
            className="reward-btn"
          >
            Select Reward
          </button>
        </div>
      </article>
      <article className="reward reward-disabled">
        <h3>Mahogany Special Edition</h3>
        <p className="pledge">Pledge $200 or more</p>
        <p className="pledge-description">
          You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
          personal thank you. You’ll be added to our Backer member list.
          Shipping is included.
        </p>
        <div className="reward-col">
          <div className="reward-row">
            <p className="statistic">0</p>
            <h4>out of stock</h4>
          </div>
          <button className="reward-btn out-of-stock-btn">Out of stock</button>
        </div>
      </article>
      {openModal && <BackProject setModalOpen={setModalOpen} />}
    </div>
  );
}
