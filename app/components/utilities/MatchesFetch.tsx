import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "@/app/constants";

const MatchesFetch = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/matches/list`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        // console.log(res);
        const fetchedData = res?.data?.data;
        setMatches(fetchedData);
        // console.log("fetchedData >> ", fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  // Get today's date
  const today = new Date();
  const todayDate = today.toISOString().split("T")[0];

  // Filter the array to include only matches with today's date
  const todayMatches = matches.filter((match: any) => match.date === todayDate);
  // const todayMatches = matches.filter((match: any) => match.date === "2024-03-22");

  const previousMatches = matches.filter(
    (match: any) => match.date !== todayDate
  );
  // console.log(todayMatches);
  return { todayMatches, previousMatches };
};

export default MatchesFetch;
