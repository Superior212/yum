import React from "react";
import "./Accordion.css";
import get from "../../assets/icons/get.png";
import support from "../../assets/icons/support.png";
import order from "../../assets/icons/order.png";

const Accordion = () => {
  return (
    <div className="bg-light p-[50px]  rounded-[40px] accordinmain">
      <div className="flex-container w-full ">
        <div className=" w-1/3">
          <div>
            <img src={get} className="w-10 py-2" alt="" />
          </div>
          <h1 className="text-[20px] font-[400]">Getting started</h1>
          <div className="accordion py-5">
            <div class="accordion-item">
              <h1 class="accordion-trigger text-[16px] font-[400] py-2">
                How do i get started?
              </h1>
              <div class="child-element  text-[16px] font-[400] w-[22rem]">
                To create an account, simply click on the "Sign Up" or "Create
                an Account" button on our homepage. Follow the prompts to enter
                your details, including your name, email address, and a secure
                password. Once completed, your account is ready for use.{" "}
              </div>
            </div>

            <div class="accordion-item">
              <h1 class="accordion-trigger  text-[16px] font-[400] py-2">
                Can I order without creating an account?
              </h1>
              <div class="child-element  text-[16px] font-[400]">
                Absolutely! We offer a guest checkout option for quick and
                convenient orders. However, creating an account provides you
                with benefits like order history tracking and easier reordering.
              </div>
            </div>
            <div class="accordion-item">
              <h1 class="accordion-trigger text-[16px] font-[400] py-2">
                How can I provide special instructions for my order?
              </h1>
              <div class="child-element  text-[16px] font-[300]">
                Absolutely! We offer a guest checkout option for quick and
                convenient orders. However, creating an account provides you
                with benefits like order history tracking and easier reordering.
              </div>
            </div>
            <div class="accordion-item ">
              <h1 class="accordion-trigger text-[16px] font-[400] py-2">
                What do I do if I forget my password or username?
              </h1>
              <div class="child-element  text-[16px] font-[300]">
                Absolutely! We offer a guest checkout option for quick and
                convenient orders. However, creating an account provides you
                with benefits like order history tracking and easier reordering.
              </div>
            </div>
            <div class="accordion-item ">
              <h1 class="accordion-trigger text-[16px] font-[400] py-2">
                What is the process for selecting items and adding them to my
                cart?
              </h1>
              <div class="child-element  text-[16px] font-[400]">
                Absolutely! We offer a guest checkout option for quick and
                convenient orders. However, creating an account provides you
                with benefits like order history tracking and easier reordering.
              </div>
            </div>
          </div>
        </div>
        <div className=" w-1/3">
          <div>
            <img src={support} className="w-10 py-2" alt="" />
          </div>
          <h1 className="text-[20px] font-[400]">Support & Contact</h1>
          <div className="accordion py-5">
            <div class="accordion-item">
              <h1 class="accordion-trigger text-[16px] font-[400] py-2">
                What are your customer support hours?
              </h1>
              <div class="child-element  text-[12px] font-[300]">
                To create an account, simply click on the "Sign Up" or "Create
                an Account" button on our homepage. Follow the prompts to enter
                your details, including your name, email address, and a secure
                password. Once completed, your account is ready for use.
              </div>
            </div>

            <div class="accordion-item ">
              <h1 class="accordion-trigger text-[16px] font-[400] py-2">
                Do you have a phone number for support inquiries?
              </h1>
              <div class="child-element  text-[12px] font-[400]">
                Absolutely! We offer a guest checkout option for quick and
                convenient orders. However, creating an account provides you
                with benefits like order history tracking and easier reordering.
              </div>
            </div>
            <div class="accordion-item ">
              <h1 class="accordion-trigger text-[16px] font-[400] py-2 ">
                How do I report a problem with the website or app?
              </h1>
              <div class="child-element text-[16px] font-[300]">
                Absolutely! We offer a guest checkout option for quick and
                convenient orders. However, creating an account provides you
                with benefits like order history tracking and easier reordering.
              </div>
            </div>
            <div class="accordion-item ">
              <h1 class="accordion-trigger text-[16px] font-[400] py-2">
                What should I do if I have a complaint or feedback?
              </h1>
              <div class="child-element  text-[16px] font-[300]">
                Absolutely! We offer a guest checkout option for quick and
                convenient orders. However, creating an account provides you
                with benefits like order history tracking and easier reordering.
              </div>
            </div>
            <div class="accordion-item ">
              <h1 class="accordion-trigger text-[16px] font-[400] py-2">
                Do you have a FAQ section for common issues?
              </h1>
              <div class="child-element  text-[16px] font-[400]">
                Absolutely! We offer a guest checkout option for quick and
                convenient orders. However, creating an account provides you
                with benefits like order history tracking and easier reordering.
              </div>
            </div>
          </div>
        </div>

        <div className=" w-1/3">
          <div>
            <img src={order} className="w-10 py-2" alt="" />
          </div>
          <h1 className="text-[20px] font-[400]">Subscription & order</h1>
          <div className="accordion py-5">
            <div class="accordion-item">
              <h1 class="accordion-trigger text-[16px] font-[400] py-2">
                What are the benefits of subscribing to your service?
              </h1>
              <div class="child-element text-[16px] font-[400]">
                To create an account, simply click on the "Sign Up" or "Create
                an Account" button on our homepage. Follow the prompts to enter
                your details, including your name, email address, and a secure
                password. Once completed, your account is ready for use.{" "}
              </div>
            </div>

            <div class="accordion-item ">
              <h1 class="accordion-trigger text-[16px] font-[400] py-2">
                How do I sign up for a subscription plan?
              </h1>
              <div class="child-element  text-[16px] font-[400]">
                Absolutely! We offer a guest checkout option for quick and
                convenient orders. However, creating an account provides you
                with benefits like order history tracking and easier reordering.
              </div>
            </div>
            <div class="accordion-item ">
              <h1 class="accordion-trigger text-[16px] font-[400] py-2">
                Can I save multiple payment methods in my account?
              </h1>
              <div class="child-element   text-[16px] font-[400]">
                Absolutely! We offer a guest checkout option for quick and
                convenient orders. However, creating an account provides you
                with benefits like order history tracking and easier reordering.
              </div>
            </div>
            <div class="accordion-item ">
              <h1 class="accordion-trigger text-[16px] font-[400] py-2">
                Is my payment information secure on your platform?
              </h1>
              <div class="child-element  text-[16px] font-[400]">
                Absolutely! We offer a guest checkout option for quick and
                convenient orders. However, creating an account provides you
                with benefits like order history tracking and easier reordering.
              </div>
            </div>
            <div class="accordion-item">
              <h1 class="accordion-trigger text-[16px] font-[400] py-2 ">
                What should I do if there's an issue with my delivery?
              </h1>
              <div class="child-element  text-[16px] font-[400]">
                Absolutely! We offer a guest checkout option for quick and
                convenient orders. However, creating an account provides you
                with benefits like order history tracking and easier reordering.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
