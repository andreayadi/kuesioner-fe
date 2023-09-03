import React from "react";
import { useEffect } from "react";
import { getSummaryData } from "../services/Services";
import { toast } from "react-toastify";
import TitleBoxStyled from "../styled/TitleBoxStyled";
import MainContentStyled from "../styled/MainContentStyled";

const TotalIndex = () => {
  useEffect(() => {
    (async () => {
      const response = await getSummaryData();

      if (response.status === 200) {
        toast.success("Success Retrieve Data");
      } else {
        toast.error("Failed to Retrieve Data");
      }
    })();
  }, []);

  return (
    <div className="content">
      <TitleBoxStyled>
        <h2 className="title">Total Index</h2>
      </TitleBoxStyled>
      <MainContentStyled></MainContentStyled>
    </div>
  );
};

export default TotalIndex;
