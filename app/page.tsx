"use client";
import Navbar from "./components/nav/Navbar";
import Hero from "./components/Home/Hero";
import Services from "./components/Home/Services";
import { useEffect, useState } from "react";
import Matches from "./components/Home/Matches";
import ShowCase from "./components/Home/ShowCase";
import News from "./components/Home/Blogs";
import Footer from "./components/Footer";
import axios from "axios";
import Loading from "./loading";

export default function Home() {
  const [texts, setTexts] = useState([]);
  const [heroTitle, setHeroTitle] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  const [servicePageTitle, setServicePageTitle] = useState("");
  const [servicePageDescription, setServicePageDescription] = useState("");
  const [service1Icon, setService1Icon] = useState("");
  const [service1Title, setService1Title] = useState("");
  const [service1Description, setService1Description] = useState("");
  const [service2Icon, setService2Icon] = useState("");
  const [service2Title, setService2Title] = useState("");
  const [service2Description, setService2Description] = useState("");
  const [service3Icon, setService3Icon] = useState("");
  const [service3Title, setService3Title] = useState("");
  const [service3Description, setService3Description] = useState("");
  const [nowAvailableDescription, setNowAvailableDescription] = useState("");

  useEffect(() => {
    axios
      .get(`http://m9.goldenyellowtravel.com/api/v1/text/list`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const fetchedData = res?.data?.data[0];
        setTexts(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  useEffect(() => {
    setHeroTitle(texts?.hero_title);
    setHeroDescription(texts?.hero_description);
    setServicePageTitle(texts?.service_page_title);
    setServicePageDescription(texts?.service_page_description);
    setService1Icon(texts?.service1_icon);
    setService1Title(texts?.service1_title);
    setService1Description(texts?.service1_description);
    setService2Icon(texts?.service2_icon);
    setService2Title(texts?.service2_title);
    setService2Description(texts?.service2_description);
    setService3Icon(texts?.service3_icon);
    setService3Title(texts?.service3_title);
    setService3Description(texts?.service3_description);
    setNowAvailableDescription(texts?.now_available_description);
  }, [texts]);
console.log(texts);
  if (texts) {
    return (
      <main className="bg-[#FEA61F] w-full overflow-hidden ">
        <Navbar visibleDefault={true} fixed={false} />
        <Hero title={heroTitle} description={heroDescription} />
        <Services
          title={servicePageTitle}
          descripiton={servicePageDescription}
          subIcon1={service1Icon}
          subTitle1={service1Title}
          subDescription1={service1Description}
          subIcon2={service2Icon}
          subTitle2={service2Title}
          subDescription2={service2Description}
          subIcon3={service3Icon}
          subTitle3={service3Title}
          subDescription3={service3Description}
        />
        <Matches />
        <ShowCase description={nowAvailableDescription} />
        <News />
        <Footer />
      </main>
    );
  } else {
    <Loading />;
  }
}
