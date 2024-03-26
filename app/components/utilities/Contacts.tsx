// const viberLink = "https://invite.viber.com/?g2=AQAT5AzzN9mJu1KWiT7C2b13nFsiS%2BXoheXLWNkGofLJQxcxCvsS6LWydWhtNBE9"
// const telegramLink = "https://t.me/+XsUcIYJ9U4NjYzhl"

import axios from "axios";
import React, { useEffect, useState } from "react";

const Contacts = () => {
  const [viberLink, setViberLink] = useState("");
  const [telegramLink, setTelegramLink] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  interface Contact {
    viberLink: string;
    telegramLink: string;
    phoneNumber: string;
  }

  useEffect(() => {
    axios
      .get(`http://m9.goldenyellowtravel.com/api/v1/contact/list`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const fetchedData = res?.data?.data[0];
        setViberLink(fetchedData?.viber_number);
        setTelegramLink(fetchedData?.telegram_number);
        setPhoneNumber(fetchedData?.phone_number);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  return { viberLink, telegramLink, phoneNumber };
};

export default Contacts;
