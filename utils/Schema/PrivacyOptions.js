

const Titletext = {
  color: "#000",

  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
};

const Text = {
  color: "#000",

  fontStyle: "normal",
  fontWeight: "400",
};
const Text3 = {
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
};


export const PrivacyOptions = [
  {
    idNo: 1,
    title: "Information We Collect",
    id: "info-we-collect",
    content: () => {
      return (
        <>
          <div id="info-we-collect">
            <h1
              style={Titletext}
              className="text-[15px] lg:text-[18px] xl:text-[20px]"
            >
              Purpose
            </h1>
            <div className="mt-[15px]  xl:mt-[20px]">
              <h1
                style={Text}
                className="text-[10px] lg:text-[12px] xl:text-[15px] leading-[20px] lg:leading-[23px] xl:leading-[30px]"
              >
                Welcome to
                <span className="font-medium"> HappyMilan.com</span> Your
                privacy is important to us, and we are committed to protecting
                your personal information. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                use our website and services.
              </h1>
            </div>

            <div className="w-[100%] h-[1px] bg-[#DADADA] mt-[20px] xl:mt-[30px]"></div>

            <div className="mt-[20px] xl:mt-[30px]">
              <h1
                style={Titletext}
                className="text-[15px] lg:text-[18px] xl:text-[20px]"
              >
                Information We Collect
              </h1>

              <div className="mt-[15px] xl:mt-[20px]">
                <h1
                  style={Titletext}
                  className="text-[12px] lg:text-[14px] xl:text-[16px]"
                >
                  a) Personal Information
                </h1>
                <ul className="list-disc mt-[10px] ml-[2%]">
                  <li
                    style={Text}
                    className="text-[10px] lg:text-[12px] xl:text-[15px] leading-[20px] lg:leading-[23px] xl:leading-[30px]"
                  >
                    Name, email address, phone number, and date of birth
                  </li>
                  <li
                    style={Text}
                    className="text-[10px] lg:text-[12px] xl:text-[15px] leading-[20px] lg:leading-[23px] xl:leading-[30px]"
                  >
                    Gender, location, and profile photos
                  </li>
                  <li
                    style={Text}
                    className="text-[10px] lg:text-[12px] xl:text-[15px] leading-[20px] lg:leading-[23px] xl:leading-[30px]"
                  >
                    Relationship preferences and interests
                  </li>
                  <li
                    style={Text}
                    className="text-[10px] lg:text-[12px] xl:text-[15px] leading-[20px] lg:leading-[23px] xl:leading-[30px]"
                  >
                    Any other information voluntarily provided by you
                  </li>
                </ul>
              </div>
              <div className="mt-[15px] xl:mt-[20px]">
                <h1
                  style={Titletext}
                  className="text-[12px] lg:text-[14px] xl:text-[16px]"
                >
                  b) Usage Data
                </h1>
                <ul className="list-disc mt-[10px] ml-[2%]">
                  <li
                    style={Text}
                    className="text-[10px] lg:text-[12px] xl:text-[15px] leading-[20px] lg:leading-[23px] xl:leading-[30px]"
                  >
                    IP address, device information, browser type, and access
                    times
                  </li>
                  <li
                    style={Text}
                    className="text-[10px] lg:text-[12px] xl:text-[15px] leading-[20px] lg:leading-[23px] xl:leading-[30px]"
                  >
                    Pages visited and interactions with content
                  </li>
                </ul>
              </div>
              <div className="mt-[15px] xl:mt-[20px]">
                <h1
                  style={Titletext}
                  className="text-[12px] lg:text-[14px] xl:text-[16px]"
                >
                  c) Cookies and Tracking Technologies
                </h1>
                <ul className="list-disc mt-[10px] ml-[2%]">
                  <li
                    style={Text}
                    className="text-[10px] lg:text-[12px] xl:text-[15px] leading-[20px] lg:leading-[23px] xl:leading-[30px]"
                  >
                    We use cookies and similar technologies to improve user
                    experience, analyze site usage, and customize content.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      );
    },
  },

  {
    id: 2,
    title: "How We Use Your Information",
    id: "how-we-use",
    content: () => {
      return (
        <>
          <div id="how-we-use" className="mt-[20px] xl:mt-[30px]">
            <h1
              style={Titletext}
              className="text-[13px] lg:text-[16px] xl:text-[18px]"
            >
              {" "}
              2. How We Use Your Information{" "}
            </h1>
            <h1
              style={Text}
              className="mt-[10px] text-[10px] lg:text-[12px] xl:text-[15px] leading-[20px] lg:leading-[23px] xl:leading-[30px]"
            >
              We use the information we collect for the following purposes:
            </h1>
            <ul className="list-disc mt-[25px] ml-[2%]">
              <li
                style={Text}
                className="text-[10px] lg:text-[12px] xl:text-[15px] leading-[20px] lg:leading-[23px] xl:leading-[30px]"
              >
                To provide, operate, and enhance our services
              </li>
              <li
                style={Text}
                className="text-[10px] lg:text-[12px] xl:text-[15px] leading-[20px] lg:leading-[23px] xl:leading-[30px]"
              >
                To facilitate matchmaking, dating, and social connections
              </li>
              <li
                style={Text}
                className="text-[10px] lg:text-[12px] xl:text-[15px] leading-[20px] lg:leading-[23px] xl:leading-[30px]"
              >
                To improve user experience and customer support
              </li>
              <li
                style={Text}
                className="text-[10px] lg:text-[12px] xl:text-[15px] leading-[20px] lg:leading-[23px] xl:leading-[30px]"
              >
                To prevent fraud, enforce security measures, and comply with
                legal requirements
              </li>
              <li
                style={Text}
                className="text-[10px] lg:text-[12px] xl:text-[15px] leading-[20px] lg:leading-[23px] xl:leading-[30px]"
              >
                TTo send updates, newsletters, or promotional content (you may
                opt out at any time)
              </li>
            </ul>
          </div>
        </>
      );
    },
  },
  {
    idNo: 3,
    title: "How We Share Your Information",
    id: "sharing-info",
    content: () => {
      return (
        <>
          <div id="sharing-info">
            <div className="mt-[20px] xl:mt-[30px]">
              <h1
                style={Titletext}
                className="text-[13px] lg:text-[16px] xl:text-[18px]"
              >
                {" "}
                3. How We Share Your Information
              </h1>
              <h1
                style={Text}
                className="mt-[10px] text-[10px] lg:text-[12px] xl:text-[15px] leading-[20px] lg:leading-[23px] xl:leading-[30px]"
              >
                {" "}
                We do not sell or rent your personal data. However, we may share
                your information in the following cases:
              </h1>
            </div>
            <ul className="list-disc mt-[15px] ml-[2%]">
              <li
                style={Text3}
                className="text-[10px] lg:text-[12px] xl:text-[15px]"
              >
                With Other Users:
                <span
                  style={Text}
                  className="text-[10px] lg:text-[12px] xl:text-[15px] leading-[20px] lg:leading-[23px] xl:leading-[30px]"
                >  {" "}
                  Information you provide on your profile may be visible to
                  other users.
                </span>
              </li>
              <li
                style={Text3}
                className="text-[10px] lg:text-[12px] xl:text-[15px]"
              >
                Service Providers:
                <span
                  style={Text}
                  className="text-[10px] lg:text-[12px] xl:text-[15px] leading-[20px] lg:leading-[23px] xl:leading-[30px]"
                >  {" "}
                  We may share data with third-party vendors who assist in
                  service delivery.
                </span>
              </li>
              <li
                style={Text3}
                className="text-[10px] lg:text-[12px] xl:text-[15px]"
              >
                Legal Obligations:
                <span
                  style={Text}
                  className="text-[10px] lg:text-[12px] xl:text-[15px] leading-[20px] lg:leading-[23px] xl:leading-[30px]"
                >  {" "}
                  We may disclose information if required by law or to protect
                  our legal rights.
                </span>
              </li>
              <li
                style={Text3}
                className="text-[10px] lg:text-[12px] xl:text-[15px]"
              >
                Business Transfers:
                <span
                  style={Text}
                  className="text-[10px] lg:text-[12px] xl:text-[15px] leading-[20px] lg:leading-[23px] xl:leading-[30px]"
                >  {" "}
                  In case of a merger, acquisition, or asset sale, your data may
                  be transferred.
                </span>
              </li>
            </ul>
          </div>
        </>
      );
    },
  },
  {
    idNo: 4,
    title: " Security",
    id: "secure",
    content: () => {
      return (
        <>
          <div id="data-secure">
            <div className="mt-[20px] xl:mt-[30px]">
              <h1
                style={Titletext}
                className="text-[13px] lg:text-[16px] xl:text-[18px]"
              >
                {" "}
              4. Security Measures
              </h1>
              <h1
                style={Text}
                className="mt-[10px] text-[10px] lg:text-[12px] xl:text-[15px] leading-[18px] lg:leading-[20px] xl:leading-[23px]"
              >
               We take appropriate technical and organizational measures to protect your data against unauthorized access, loss, misuse, or alteration. However, no security system is completely foolproof.
              </h1>
            </div>

           
          </div>
        </>
      );
    },
  },
  {
    idNo: 6,
    title: "Your Choices",
    id: "your-choices",
    content: () => {
      return (
        <>
          <div id="your-choices">
            <div className="mt-[20px] xl:mt-[30px]">
              <h1
                style={Titletext}
                className="text-[13px] lg:text-[16px] xl:text-[18px]"
              >
                {" "}
                5. Your Rights and Choices{" "}
              </h1>
              <h1 style={Text} className="mt-[10px]">
              You have the right to:
              </h1>
              <ul className="list-disc mt-[5px] ml-[2%]">
                <li
                  style={Text}
                  className="text-[10px] lg:text-[12px] xl:text-[15px]"
                >
                 Access, update, or delete your personal information
                </li>
                <li
                  style={Text}
                  className="text-[10px] lg:text-[12px] xl:text-[15px]"
                >
                 Manage your privacy settings
                 
                </li>
                <li
                  style={Text}
                  className="text-[10px] lg:text-[12px] xl:text-[15px]"
                >
                 
                  Opt out of marketing communications
                </li>
                <li
                  style={Text}
                  className="text-[10px] lg:text-[12px] xl:text-[15px]"
                >
                Request data portability or restriction of processing
                 
                </li>
              </ul>
               <h1
                    style={Text}
                    className="text-[10px] lg:text-[12px] xl:text-[15px] mt-[5px] leading-[20px] lg:leading-[23px] xl:leading-[30px]"
                  >
                    {" "}
                   To exercise your rights, contact us at
                    <span className="text-[#0F52BA]">
                      {" "}
                      contact@proxale.com.{" "}
                    </span>
                 </h1>
            </div>
          </div>
        </>
      );
    },
  },
  {
    idNo: 6,
    title: " Data Retention",
    id: "retention-info",
    content: () => {
      return (
        <>
          <div id="retention-info">
            <div className="mt-[20px] xl:mt-[30px]">
              <h1
                style={Titletext}
                className="text-[13px] lg:text-[16px] xl:text-[18px]"
              >
                {" "}
               6. Data Retention
              </h1>
              <h1
                style={Text}
                className="mt-[10px] text-[10px] lg:text-[12px] xl:text-[15px] leading-[18px] lg:leading-[20px] xl:leading-[23px]"
              >
                We retain your data as long as necessary to fulfill the purposes outlined in this policy. You may request account deletion, after which we will remove your personal data unless retention is required by law.
              </h1>
            </div>
           
            
          </div>
        </>
      );
    },
  },
 
 
  {
    idNo: 7,
    title: "Third-Party Links",
    id: "third-party-links",
    content: () => {
      return (
        <>
          <div id="third-party-links">
            <div className="mt-[20px] xl:mt-[30px]">
              <h1
                style={Titletext}
                className="text-[13px] lg:text-[16px] xl:text-[18px]"
              >
                7. Third-Party Links and Services
              </h1>
              <h1
                style={Text}
                className="mt-[15px]  text-[10px] lg:text-[12px] xl:text-[15px] leading-[18px] lg:leading-[20px] xl:leading-[23px]"
              >
               HappyMilan may contain links to third-party websites or services. We are not responsible for their privacy practices, so we encourage you to review their policies before sharing any information.
              </h1>
            </div>
          </div>
        </>
      );
    },
  },
  {
    idNo: 8,
    title: "Changes to This Privacy Policy",
    id: "change-privacy-policy",
    content: () => {
      return (
        <>
          <div id="change-privacy-policy">
            <div className="mt-[20px] xl:mt-[30px]">
              <h1
                style={Titletext}
                className="text-[13px] lg:text-[16px] xl:text-[18px]"
              >
                {" "}
               8. Changes to This Privacy Policy
              </h1>
              <h1
                style={Text}
                className="mt-[15px]  text-[10px] lg:text-[12px] xl:text-[15px] leading-[18px] lg:leading-[20px] xl:leading-[23px]"
              >
               HappyMilan may update this policy from time to time. Changes will be posted on this page with an updated "Effective Date." Continued use of our services after modifications constitutes acceptance of the changes.
              </h1>
            </div>
          </div>
        </>
      );
    },
  },
  {
    idNo: 9,
    title: "Contact Us",
    id: "contact-us",
    content: () => {
      return (
        <>
          <div id="contact-us">
            <div className="mt-[20px] xl:mt-[30px]">
              <h1
                style={Titletext}
                className="text-[13px] lg:text-[16px] xl:text-[18px]"
              >
               9. Contact Us
              </h1>
              <h1
                style={Text}
                className="mt-[15px]  text-[10px] lg:text-[12px] xl:text-[15px] leading-[18px] lg:leading-[20px] xl:leading-[23px]"
              >
                If you have any questions about this Privacy Policy, please contact us at:HappyMilan
              </h1>
              <ul className="list-disc mt-[15px] ml-[2%]">
                <li
                  style={Text3}
                  className="text-[10px] lg:text-[12px] xl:text-[15px]"
                >
                  Email:
                  <span
                    style={Text}
                    className="text-[10px] lg:text-[12px] xl:text-[15px] leading-[20px] lg:leading-[23px] xl:leading-[30px]"
                  >
                    contact@proxale.com
                  </span>
                </li>
                <li
                  style={Text3}
                  className="text-[10px] lg:text-[12px] xl:text-[15px]"
                >
                  Phone:
                  <span
                    style={Text}
                    className="text-[10px] lg:text-[12px] xl:text-[15px] leading-[20px] lg:leading-[23px] xl:leading-[30px]"
                  >
                    {" "}
                    079 2320003,
                  </span>
                </li>
                <li
                  style={Text3}
                  className="text-[10px] lg:text-[12px] xl:text-[15px]"
                >
                  Address:{" "}
                  <span
                    style={Text}
                    className="text-[10px] lg:text-[12px] xl:text-[15px] leading-[20px] lg:leading-[23px] xl:leading-[30px]"
                  >
                    {" "}
                    Gandhinagar, Gujarat (india)
                  </span>
                </li>
              </ul>
               <h1
                style={Text}
                className="mt-[15px] xl:mt-[20px] text-[10px] lg:text-[12px] xl:text-[15px] leading-[18px] lg:leading-[20px] xl:leading-[23px]"
              >
               Thank you for trusting <span className="font-medium"> proxale.com </span>  with your personal information.
              </h1>
            </div>
          </div>
        </>
      );
    },
  },
];
