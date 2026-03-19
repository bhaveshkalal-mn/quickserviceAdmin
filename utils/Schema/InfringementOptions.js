
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
export const InfringementOptions = [
    {
        idNo: 1,
        title: 'Introduction',
        id: 'intro',
        content: () => {
          return (
            <>
              <div id='intro'>
              <h1 style={Titletext} className='text-[15px] lg:text-[18px] xl:text-[20px]'>Introduction</h1>
        <div className='mt-[15px]  xl:mt-[20px]'>
            <h1 style={Text3} className='text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Effective Date:<span style={Text}> 20 Jan 2025 </span> </h1>
            <h1 style={Text} className='mt-[5px] xl:mt-[10px] text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>By accessing or using Proxale, you are agreeing to be bound by these Terms of Use. These terms govern your use of our Website and outline the rules and responsibilities for both users and service providers. Our goal is to provide a platform that is easy to use, informative, and efficient, while maintaining transparency and fairness for everyone.</h1>
        </div>
              </div>
            </>
          )
        }
      },
      {
        idNo: 2,
        title: '1. Prohibited Infringements',
        id: 'prohibited-infringements',
        content: () => {
          return (
            <>
              <div id='prohibited-infringements'>
              <div className='mt-[20px] xl:mt-[25px]'>
            <h1 style={Titletext} className=' text-[14px] lg:text-[18px] xl:text-[20px]'>1. Prohibited Infringements</h1>
            <h1 style={Text} className='mt-[10px] text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>The following activities constitute infringement under this policy and are strictly prohibited:</h1>
            
            <ol className='list-decimal ml-[2%] mt-[15px] xl:mt-[20px]'>
            <li style={Text3} className=' text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Copyright Violation: <span style={Text}>Uploading, displaying, or distributing content (e.g., text, images, logos, videos, or other media) that infringes the copyrights of third parties. </span></li>
            <li style={Text3} className='mt-[10px] text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Trademark Infringement:<span style={Text}>Using trademarks, logos, or brand names of others without proper authorization.</span></li>
            <li style={Text3} className='mt-[10px] text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Misrepresentation:<span style={Text}> Listing or advertising services using false or misleading business identities or materials owned by others.</span></li>
            <li style={Text3} className='mt-[10px] text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Unlawful Use of Content:<span style={Text}>Unauthorized use of proprietary or confidential materials belonging to a third party.</span></li>
            </ol>
           
            </div>
               </div>
            </>
          )
        }
      },
      {
        idNo: 3,
        title: '2. Reporting Infringements',
        id: 'reporting ',
        content: () => {
          return (
            <>
              <div id='reporting'>
              <div className='mt-[20px] xl:mt-[25px]'>
            <h1 style={Titletext} className=' text-[14px] lg:text-[18px] xl:text-[20px]'>2. Reporting Infringements</h1>
            <h1 style={Text} className='mt-[10px] text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>If you believe that your intellectual property rights have been violated on the Website, you can submit a formal infringement notice to Proxale. The notice must include the following:</h1>
            <div className='mt-[25px] xl:mt-[30px]'>
            <h1 style={Titletext}  className='text-[12px] lg:text-[14px] xl:text-[16px]'>Details of the Complainant</h1>
            <ul className='list-disc ml-[2%] mt-[15px] xl:mt-[20px]'>
            <li style={Text3} className=' text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Full name <span style={Text}>of the complainant or authorized representative.</span></li>
            <li style={Text3} className='mt-[10px] text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Contact information<span style={Text}>(email address, phone number, and address).</span></li>
            </ul>
            </div>
            <div className='mt-[25px] xl:mt-[30px]'>
            <h1 style={Titletext}  className='text-[12px] lg:text-[14px] xl:text-[16px]'>Details of the Complainant</h1>
            <ul className='list-disc ml-[2%] mt-[15px] xl:mt-[20px]'>
            <li style={Text} className=' text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Description of the intellectual property allegedly infringed (e.g., copyrighted work, trademark).</li>
            <li style={Text} className=' text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Location of the infringing content on the Website (e.g., URL or detailed description).</li>
            <li style={Text} className=' text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Proof of ownership or authorization, such as copyright registration certificates, trademark certificates, or licensing agreements.</li>
            </ul>
            </div>
            <div className='mt-[25px] xl:mt-[30px]'>
            <h1 style={Titletext}  className='text-[12px] lg:text-[14px] xl:text-[16px]'>Declaration</h1>
            <ul className='list-disc ml-[2%] mt-[15px] xl:mt-[20px]'>
            <li style={Text} className=' text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>A statement that the information provided is accurate and made in good faith.</li>
            <li style={Text} className=' text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>An affirmation that the complainant is the rightful owner or authorized to act on behalf of the intellectual property owner.</li>
           
            </ul>
            </div>
            <div className='mt-[25px] xl:mt-[30px]'>
            <h1 style={Titletext}  className='text-[12px] lg:text-[14px] xl:text-[16px]'>Submission</h1>
            <div className='  mt-[15px] xl:mt-[20px]'>
            <h1 style={Text} className=' text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>The infringement notice must be sent to the following address:</h1>
            <h1 style={Text3} className='mt-[15px] xl:mt-[20px] text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Email:<span style={Text}>support@proxale.com</span> </h1>
            <h1 style={Text3} className='mt-[10px] text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Postal Address:<span style={Text}>Gandhinagar, India</span></h1>
           
            </div>
            </div>
            </div>
               </div>
            </>
          )
        }
      },
      {
        idNo: 4,
        title: '3. Review and Response Process',
        id: ' review-and-response',
        content: () => {
          return (
            <>
              <div id='review-and-response'>
              <div className='mt-[20px] xl:mt-[25px]'>
            <h1 style={Titletext} className=' text-[14px] lg:text-[18px] xl:text-[20px]'>3. Review and Response Process</h1>
            <h1 style={Text} className='mt-[10px] text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>If you believe that your intellectual property rights have been violated on the Website, you can submit a formal infringement notice to Proxale. The notice must include the following:</h1>
            <div className='mt-[25px] xl:mt-[30px]'>
            <h1 style={Titletext}  className='text-[12px] lg:text-[14px] xl:text-[16px]'>Declaration</h1>
            <div className='mt-[15px] xl:mt-[20px]'>
            <h1 style={Text3} className=' text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>1. Acknowledgment:</h1>
            <h1 style={Text} className='mt-[5px] text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Upon receiving an infringement notice, we will acknowledge receipt and begin an investigation within 5 business working days.</h1>
            </div>
            <div className='mt-[15px] xl:mt-[20px]'>
            <h1 style={Text3} className='text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>2. Investigation:</h1>
            <h1 style={Text} className='mt-[5px] text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>We will evaluate the claim, including verifying the ownership of the intellectual property and the alleged infringement.</h1>
            </div>
            <div className='mt-[25px] xl:mt-[30px]'>
            <h1 style={Titletext}  className='text-[12px] lg:text-[14px] xl:text-[16px]'>3. Action Taken</h1>
            <ul className='list-disc ml-[2%] mt-[15px] xl:mt-[20px]'>
            <li style={Text} className=' text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>If the claim is valid, the infringing content will be removed or access to it will be disabled.</li>
            <li style={Text} className='text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>The account of the user responsible for the infringement may be suspended or terminated.</li>
            <li style={Text} className='text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>If additional information or clarification is required, we will contact the complainant or the alleged infringer.</li>
            </ul>
            </div>
            <div className='mt-[15px] xl:mt-[20px]'>
            <h1 style={Text3} className='text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>4. Notification</h1>
            <h1 style={Text} className='mt-[5px] text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Both the complainant and the user responsible for the content will be notified of the decision</h1>
            </div>
            </div>
            </div>
               </div>
            </>
          )
        }
      },
      {
        idNo: 5,
        title: '4. Counter-Notification Process',
        id: 'counter-notification ',
        content: () => {
          return (
            <>
              <div id='counter-notification '>
              <div className='mt-[20px] xl:mt-[25px]'>
            <h1 style={Titletext} className=' text-[14px] lg:text-[18px] xl:text-[20px]'>4. Counter-Notification Process</h1>
            <h1 style={Text} className='mt-[10px] text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>If you are a user whose content has been removed due to an infringement claim, you may file a counter-notification if you believe the claim was made in error or if you have authorization to use the content.</h1>
            <div className='mt-[25px] xl:mt-[30px]'>
            <h1 style={Text3}  className='text-[12px] lg:text-[14px] xl:text-[16px]'>Counter-Notification Requirements</h1>
            <ul className='list-disc ml-[2%] mt-[15px] xl:mt-[20px]'>
            <li style={Text} className=' text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Identification of the removed content.</li>
            <li style={Text} className=' text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>A statement explaining your right to use the content.</li>
            <li style={Text} className=' text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Your contact information (email address, phone number, and address).</li>
            <li style={Text} className=' text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>A declaration under penalty of perjury that the information provided is accurate.</li>
            </ul>
            </div>
            <div className='mt-[25px] xl:mt-[30px]'>
            <h1 style={Text3}  className='text-[12px] lg:text-[14px] xl:text-[16px]'>The counter-notification must be sent to:</h1>
            <div className='  mt-[15px] xl:mt-[20px]'>
            <h1 style={Text3} className='mt-[15px] xl:mt-[20px] text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Email:<span style={Text}>support@proxale.com</span> </h1>
            <h1 style={Text3} className='mt-[10px] text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Postal Address:<span style={Text}>Gandhinagar, India</span></h1>
           
            </div>
            <h1 style={Text} className='mt-[15px] xl:mt-[20px] text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Once the counter-notification is received, we will review it and, if appropriate, restore the content within 5 <span style={Text3}> business days </span>, unless the complainant initiates legal action.</h1>
            </div>
            </div>
               </div>
            </>
          )
        }
      },
      {
        idNo: 6,
        title: '5. Consequences of Repeated Infringements',
        id: 'consequences-of-repeated',
        content: () => {
          return (
            <>
              <div id='consequences-of-repeated'>
              <div className='mt-[20px] xl:mt-[25px]'>
            <h1 style={Titletext} className=' text-[14px] lg:text-[18px] xl:text-[20px]'>5. Consequences of Repeated Infringements</h1>
            <h1 style={Text} className='mt-[10px] text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Users who repeatedly engage in infringement will face stricter actions, which may include:</h1>
           
            <ul className='list-disc ml-[2%] mt-[10px] xl:mt-[15px]'>
            <li style={Text} className=' text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Permanent suspension of their account.</li>
            <li style={Text} className=' text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Blacklisting from the platform.</li>
            <li style={Text} className=' text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Legal action if necessary.</li>
            </ul>
            </div>
               </div>
            </>
          )
        }
      },
      {
        idNo: 7,
        title: '6. Disclaimer',
        id: 'disclaimer',
        content: () => {
          return (
            <>
              <div id='disclaimer'>
              <div className='mt-[20px] xl:mt-[25px]'>
            <h1 style={Titletext} className=' text-[14px] lg:text-[18px] xl:text-[20px]'>6. Disclaimer</h1>
            <h1 style={Text} className='mt-[10px] text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Proxale serves as a platform to connect users and service providers. While we take reasonable efforts to monitor content, we are not responsible for verifying the ownership of all content posted by users. We rely on the intellectual property owners to notify us of potential infringements.</h1>
           
            </div>
               </div>
            </>
          )
        }
      },
      {
        idNo: 8,
        title: '7. Legal Compliance',
        id: 'legal-compliance',
        content: () => {
          return (
            <>
              <div id='legal-compliance'>
              <div className='mt-[20px] xl:mt-[25px]'>
            <h1 style={Titletext} className=' text-[14px] lg:text-[18px] xl:text-[20px]'>7. Legal Compliance</h1>
            <h1 style={Text} className='mt-[10px] text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>This policy is governed by the applicable intellectual property laws of India, including but not limited to:</h1>
           
            <ul className='list-disc ml-[2%] mt-[10px] xl:mt-[15px]'>
            <li style={Text} className=' text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>The Copyright Act, 1957</li>
            <li style={Text} className=' text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>The Trade Marks Act, 1999</li>
            <li style={Text} className=' text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>The Information Technology Act, 2000</li>
            </ul>
            </div>
               </div>
            </>
          )
        }
      },
      {
        idNo: 9,
        title: '8. Contact Us',
        id: 'contact-us',
        content: () => {
          return (
            <>
              <div id='contact-us'>
              <div className='mt-[20px] xl:mt-[25px]'>
            <h1 style={Titletext} className=' text-[14px] lg:text-[18px] xl:text-[20px]'>8. Contact Us</h1>
            <h1 style={Text} className='mt-[10px] text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>If you have any questions or need assistance with reporting an infringement, please contact us at:</h1>
           
            <ul className='list-disc ml-[2%] mt-[10px] xl:mt-[15px]'>
            <li style={Text3} className=' text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Email:<span style={Text}>support@proxale.com</span></li>
            <li style={Text3} className='mt-[10px] text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>Phone:<span style={Text}>+079 1000 3323</span></li>
           
            </ul>
            </div>
            <div className='w-[100%] h-[1px] mt-[20px] xl:mt-[25px] bg-[#DADADA]'></div>
            <div className='mt-[20px] xl:mt-[25px]'>
            <h1 style={Text} className=' text-[10px] lg:text-[12px] xl:text-[14px] leading-[20px] lg:leading-[23px] xl:leading-[30px]'>By using Proxale, you agree to comply with this Infringement Policy and respect the intellectual property rights of others.</h1>
            </div>
               </div>
            </>
          )
        }
      },
]