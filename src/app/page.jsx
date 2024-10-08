import Image from "next/image";
import HeroSection from "./components/HeroSection";
// import ServiceSection from "./components/PackageSection";
import FeaturesSection from "./components/FeaturesSection";
import WhyYouChooseSection from "./components/WhyYouChooseSection";
import ContentSection1 from "./components/ContentSection1";
import ContentSection2 from "./components/ContentSection2";
import ReviewsSection from "./components/ReviewsSection";
import AllServicesSection from "./components/AllServicesSection";
import ImportantSection from "./components/ImportantSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import { IoSearch } from "react-icons/io5";
import { IoMdWatch } from "react-icons/io";
import { BsGraphDownArrow } from "react-icons/bs";
import { MdSupportAgent, MdOutlinePayment, MdLockOutline, MdOutlineWarning, MdLightMode } from "react-icons/md";
export default function Home() {
  const featuresData = [
    {
      id: 1,
      title: "What is the Difference between Regular Subscribers and Real Subscribers?",
      description: "Regular subscribers are real-looking virtual accounts. Real subscribers are real, active accounts with real posts and followers.",
      icon: <MdLightMode />
    },
    {
      id: 2,
      title: "Why should you buy YouTube subscribers?",
      description: "YouTube subscribers show how interesting your content is. Your subscriber number is like the measure of your channel's quality. So, it is important to have a hight number of subscribers to attract more visitors to your channel.",
      icon: <IoSearch />
    },
    {
      id: 3,
      title: "What are Youtube Subscribers",
      description: "If you can get a person's interest on YouTube, they may subscribe to your channel. After that, they will start seeing your content on their homepage and get notified often.",
      icon: <IoMdWatch />
    },
    {
      id: 5,
      title: "NO Risk of Decrease",
      description: "The services that you buy will be permanent, and there won't be any decrease. Otherwise, we guarantee you that we will refill your losses in six months after your purchase.",
      icon: <BsGraphDownArrow />
    },
    {
      id: 6,
      title: "24/7 Live Support",
      description: "We provide 24/7 live customer support. You can contact us anytime via our embedded chat system, WhatsApp, and email address. Our staff is always ready to help you.",
      icon: <MdSupportAgent />
    },
    {
      id: 7,
      title: "Secure Payment",
      description: "You can pay with your credit card through the most secure and trusted payment systems in the world. You don’t have to register to make your payment.",
      icon: <MdOutlinePayment />
    },
    {
      id: 8,
      title: "No Password is Required",
      description: "We never ask your password or any other private information. We recommend you to protect your account and never share your passwords with anyone.",
      icon: <MdLockOutline />
    },
    {
      id: 9,
      title: "Warning",
      description: "In order for your order interactions to be tracked correctly after your purchases, you should not purchase the same products from different sites simultaneously.",
      icon: <MdOutlineWarning />
    }

  ]
  const faqData = [
    {
      id: 1,
      question: "Can this service help me reach 4,000 hours of view time required for monetization and partnership?",
      answer: "Yes! When you get YouTube views, the video you targeted will be watched from start to end by the specific amount of accounts you decided. With this service, you can easily surpass the 4,000 hours limit."
    },
    {
      id: 2,
      question: "Is it possible for YouTube to realize I'm not getting genuine views?",
      answer: "It's not likely. Since there isn't a list called viewers, or such, it's almost impossible for YouTube to catch you red-handed. It's not so much different than asking a friend to watch your video."
    },
    {
      id: 3,
      question: "What happens when you get 1K subscribers on YouTube?",
      answer: "When you hit 1K subscribers, YouTube sends you a mail to congratulate you. "
    },
    {
      id: 4,
      question: "Can YouTubers see who viewed their videos?",
      answer: "Unfortunately not. They can only see how many people viewed their videos."
    },
    {
      id: 5,
      question: "What İs The Traffic Source İn Youtube Views?",
      answer: "YouTube traffic sources are in 3 main categories."
    },
    {
      id: 6,
      question: "Can I Buy Views For Private Video?",
      answer: "No, you cannot use this service for private video. If the video is hidden after making the purchase, the order will be cancelled. You must make the video public until the order is complete."
    },
  ]
  return (
    <main className=" ">
      <HeroSection title={"Grow your Bussiness <br/> and Profile with us"} subTitle={"Buy YouTube Views"} imgUrl={"https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/08/Generation-z-Christmas-party-with-multi-ethnic-friends-1296x728-header.jpg?w=1155&h=1528"} />
      <ImportantSection />
      <AllServicesSection />
      <WhyYouChooseSection heading={"✊ Why You Should Choose Tubeviews"} subHeading={"Buying Youtube views from Tubeviews can help you boost your video's visibility and reach."} />
      <FeaturesSection featuresData={featuresData} heading={"🚀 Buy YouTube Views Features With Tubeviews"} subHeading={"Buying Youtube views from Tubeviews can help you boost your video's visibility and reach."} />
      <ContentSection1
        heading={"🎉 Uplift Your YouTube Strategy with Famoid’s Expert View Solutions!"}
        subHeading={"Tubeviews helps you grow your Youtube Channel with fully Ad-Based and Real Views."}
        contents={"<p class=leading-relaxed text-slate-600> On Viplikes you can acquire a YT bundle starting from $29,99 – it will give you a possibility to get 100 YT subs, 2k views and 10 comments for your clips delivered in one go. This is an extremely beneficial offer, plus in some situations you can get a special discount from Viplikes’ managers. If you’re interested, you should contact them in chat on our website. <br /><br /> On Viplikes you can acquire a YT bundle starting from $29,99 – it will give you a possibility to get 100 YT subs, 2k views and 10 comments for your clips delivered in one go. This is an extremely beneficial offer, plus in some situations you can get a special discount from Viplikes’ managers. If you’re interested, you should contact them in chat on our website. On Viplikes you can acquire a YT bundle starting from $29,99 – it will give you a possibility to get 100 YT subs, 2k views and 10 comments for your clips delivered in one go. This is an extremely beneficial offer, plus in some situations you can get a special discount from Viplikes’ managers. If you’re interested, you should contact them in chat on our website. </p>"}
      />
      <ContentSection2
        heading={"🚀 Propel Your YouTube Content to New Horizons with Famoid!"}
        subHeading={"Buying Youtube views from Famoid can help you boost your video's visibility and reach."}
        contents={"<p class=leading-relaxed text-slate-600> On Viplikes you can acquire a YT bundle starting from $29,99 – it will give you a possibility to get 100 YT subs, 2k views and 10 comments for your clips delivered in one go. This is an extremely beneficial offer, plus in some situations you can get a special discount from Viplikes’ managers. If you’re interested, you should contact them in chat on our website. <br /><br /> On Viplikes you can acquire a YT bundle starting from $29,99 – it will give you a possibility to get 100 YT subs, 2k views and 10 comments for your clips delivered in one go. This is an extremely beneficial offer, plus in some situations you can get a special discount from Viplikes’ managers. If you’re interested, you should contact them in chat on our website. On Viplikes you can acquire a YT bundle starting from $29,99 – it will give you a possibility to get 100 YT subs, 2k views and 10 comments for your clips delivered in one go. This is an extremely beneficial offer, plus in some situations you can get a special discount from Viplikes’ managers. If you’re interested, you should contact them in chat on our website. </p>"}
      />
      <ContentSection1
        heading={"🎉 Uplift Your YouTube Strategy with Famoid’s Expert View Solutions!"}
        subHeading={"Tubeviews helps you grow your Youtube Channel with fully Ad-Based and Real Views."}
        contents={"<p class=leading-relaxed text-slate-600> On Viplikes you can acquire a YT bundle starting from $29,99 – it will give you a possibility to get 100 YT subs, 2k views and 10 comments for your clips delivered in one go. This is an extremely beneficial offer, plus in some situations you can get a special discount from Viplikes’ managers. If you’re interested, you should contact them in chat on our website. <br /><br /> On Viplikes you can acquire a YT bundle starting from $29,99 – it will give you a possibility to get 100 YT subs, 2k views and 10 comments for your clips delivered in one go. This is an extremely beneficial offer, plus in some situations you can get a special discount from Viplikes’ managers. If you’re interested, you should contact them in chat on our website. On Viplikes you can acquire a YT bundle starting from $29,99 – it will give you a possibility to get 100 YT subs, 2k views and 10 comments for your clips delivered in one go. This is an extremely beneficial offer, plus in some situations you can get a special discount from Viplikes’ managers. If you’re interested, you should contact them in chat on our website. </p>"}
      />
      <ContentSection2
        heading={"🚀 Propel Your YouTube Content to New Horizons with Famoid!"}
        subHeading={"Buying Youtube views from Famoid can help you boost your video's visibility and reach."}
        contents={"<p class=leading-relaxed text-slate-600> On Viplikes you can acquire a YT bundle starting from $29,99 – it will give you a possibility to get 100 YT subs, 2k views and 10 comments for your clips delivered in one go. This is an extremely beneficial offer, plus in some situations you can get a special discount from Viplikes’ managers. If you’re interested, you should contact them in chat on our website. <br /><br /> On Viplikes you can acquire a YT bundle starting from $29,99 – it will give you a possibility to get 100 YT subs, 2k views and 10 comments for your clips delivered in one go. This is an extremely beneficial offer, plus in some situations you can get a special discount from Viplikes’ managers. If you’re interested, you should contact them in chat on our website. On Viplikes you can acquire a YT bundle starting from $29,99 – it will give you a possibility to get 100 YT subs, 2k views and 10 comments for your clips delivered in one go. This is an extremely beneficial offer, plus in some situations you can get a special discount from Viplikes’ managers. If you’re interested, you should contact them in chat on our website. </p>"}
      />
      <FaqSection
        heading={"🥇 Frequently Asked Questions"}
        subHeading={"Find answers to any questions you may have in mind about our products and tools. If you can't find your answer at FAQ you can reach us via our live support center without a fee."}
        faqData={faqData}
      />
      <ReviewsSection />
      {/* <AllServicesSection /> */}
      {/* <Footer /> */}
      {/* <HeroSection /> */}
    </main>
  );
}
