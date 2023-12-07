import { useState } from "react";

export default function BackProject({ setModalOpen }) {
  const [openPledge, setOpenPledge] = useState(false);
  const [openPledgeBamboo, setOpenPledgeBamboo] = useState(false);
  const [openPledgeBlack, setOpenPledgeBlack] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <section className="back-project">
      {!showSuccess ? (
        <div className="modal-container">
          <img
            src="assets/icon-close-modal.svg"
            alt=""
            className="close-modal-icon"
            onClick={() => setModalOpen((prev) => !prev)}
          />
          <h2>Back this project</h2>
          <p className="project-subtitle">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          <div className="pledge-container">
            <div className="pledge">
              <div className="pledge-row">
                <input
                  type="radio"
                  name="reward"
                  id="no-reward"
                  onClick={() => setOpenPledge((prev) => !prev)}
                />
                <label htmlFor="no-reward">Pledge with no reward</label>
              </div>
              <p className="pledge-description">
                Choose to support us without a reward if you simply believe in
                our project. As a backer, you will be signed up to receive
                product updates via email.
              </p>
              {openPledge && (
                <div className="enter-pledge">
                  <h5>We appreciate your support.</h5>
                  <div className="input-container">
                    <button
                      className="btn continue-btn"
                      onClick={() => setShowSuccess(true)}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="pledge">
              <div className="pledge-row">
                <input
                  type="radio"
                  name="reward"
                  id="bamboo"
                  onClick={() => setOpenPledgeBamboo((prev) => !prev)}
                />
                <div>
                  <label htmlFor="bamboo">Bamboo Stand</label>
                  <p className="pledge-info">Pledge $25 or more</p>
                </div>
              </div>
              <p className="pledge-description">
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you’ll be added to a
                special Backer member list.
              </p>
              <div className="quantity-row">
                <p className="quantity">101</p>
                <h4>left</h4>
              </div>
              {openPledgeBamboo && (
                <div className="enter-pledge">
                  <h5>Enter your pledge</h5>
                  <div className="input-container">
                    <input type="number" value="25" />
                    <button
                      className="btn continue-btn"
                      onClick={() => setShowSuccess(true)}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="pledge">
              <div className="pledge-row">
                <input
                  type="radio"
                  name="reward"
                  id="black"
                  onClick={() => setOpenPledgeBlack((prev) => !prev)}
                />
                <div>
                  <label htmlFor="black">Black Edition Stand</label>
                  <p className="pledge-info">Pledge $75 or more</p>
                </div>
              </div>
              <p className="pledge-description">
                You get a Black Special Edition computer stand and a personal
                thank you. You’ll be added to our Backer member list. Shipping
                is included.
              </p>
              <div className="quantity-row">
                <p className="quantity">64</p>
                <h4>left</h4>
              </div>
              {openPledgeBlack && (
                <div className="enter-pledge">
                  <h5>Enter your pledge</h5>
                  <div className="input-container">
                    <input type="number" value="75" />
                    <button
                      className="btn continue-btn"
                      onClick={() => setShowSuccess(true)}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="pledge">
              <div className="pledge-row">
                <input type="radio" name="reward" id="mahogany" disabled />
                <div>
                  <label htmlFor="mahogany">Mahogany Special Edition</label>
                  <p className="pledge-info">Pledge $200 or more</p>
                </div>
              </div>
              <p className="pledge-description">
                You get two Special Edition Mahogany stands, a Backer T-Shirt,
                and a personal thank you. You’ll be added to our Backer member
                list. Shipping is included.
              </p>
              <div className="quantity-row">
                <p className="quantity">0</p>
                <h4>left</h4>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="success-modal">
          <img
            src="assets/icon-check.svg"
            alt="checkmark illustration"
            className="checkmark"
          />
          <h2>Thanks for your support!</h2>
          <p className="success-message">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
          <button
            className="btn success-btn"
            onClick={() => setShowSuccess(false)}
          >
            Got it!
          </button>
        </div>
      )}
    </section>
  );
}
