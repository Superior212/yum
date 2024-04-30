import React from "react";

const PartnerFeatures = () => {
  return (
    <div className="h-[28rem] relative py-10">
      <div className="flex items-center justify-center pt-10">
        <div className="bg-[#191104] text-white relative z-10 w-[90%] p-4 rounded-t-[30px]">

          <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="w-full md:w-1/2 border-s rounded-s-lg md:mr-4 md:mb-0">
              <h1 className="text-center md:text-left my-4">Reliable Support and Resources</h1>
              <p className="text-[10px] text-center md:text-left">
                We're here for you every step of the way. Count on our
                reliable support team and access valuable resources, ensuring
                you have the assistance and tools needed for success.
              </p>
            </div>
            <div className="w-full md:w-1/2 border-s rounded-s-lg md:ml-4 mt-4 md:mt-0">
              <h1 className="text-center md:text-left my-4">Increased Visibility and Customer Base</h1>
              <p className="text-[10px] text-center md:text-left">
                Partnering with us means your restaurant gains greater
                visibility and access to a wider customer base. Your dishes
                reach more hungry customers, increasing your potential for growth.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center md:flex-row my-10">
            <div className="w-full md:w-1/2 border-s rounded-s-lg md:mr-4 md:mb-0">
              <h1 className="text-center md:text-left my-4">Seamless Order Management</h1>
              <p className="text-[10px] text-center md:text-left">
                We simplify order management, providing you with an intuitive
                system that streamlines the entire process. From order placement
                to delivery, it's hassle-free and efficient.
              </p>
            </div>
            <div className="w-full md:w-1/2 border-s rounded-s-lg md:ml-4 mt-4 md:mt-0">
              <h1 className="text-center md:text-left my-4">Marketing and Promotional Opportunities</h1>
              <p className="text-[10px] text-center md:text-left">
                Joining our platform opens doors to marketing and promotional
                opportunities. We help you market your restaurant effectively,
                allowing you to attract new customers and boost your brand's
                presence.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button className="bg-[#FE9801] rounded-2xl px-4 py-2 mb-6">
              Register now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PartnerFeatures;
