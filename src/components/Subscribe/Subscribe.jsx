import React from "react";
import delivery from "../../assets/images/delivery.png";
import appstoreQr from "../../assets/images/appstoreQr.png";
import playstoreQr from "../../assets/images/playstoreQr.png";
import appstoreIcon from "../../assets/images/appstoreIcon.png";
import googleplayIcon from "../../assets/images/googleplayIcon.png";

const Subscribe = () => {
  return (
    <div className="bg-subscribeBackground text-[#013929] p-20">
      <div className="flex">
        <div className="w-1/2 py-20 px-10">
          <h1 className="text-[35px]">
            Subscribe for weekly or <br /> monthly delivery
          </h1>
          <p>
            You can choose to subscribe to subscribe to our weekly or monthly
            food ordering and delivering. Just subscribe and focus on other
            important stuffs. We gat you.
          </p>
          <div className="flex gap-x-4 items-center">
            <div className="flex items-center gap-x-5 my-4">
              <div>
                <img src={appstoreQr} alt="" />
              </div>
              <div>
                <img src={playstoreQr} alt="" />
              </div>
            </div>
            <div>
              <p>Scan to download app. Available on Appstore and Playstore.</p>
              <div className="flex items-center gap-x-3">
              <div>
                <img src={appstoreIcon} alt="" />
              </div>
              <div>
              <img src={googleplayIcon} alt="" />
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <img src={delivery} className="mx-48" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
