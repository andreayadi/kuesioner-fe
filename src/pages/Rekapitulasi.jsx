import React from "react";
import TitleBoxStyled from "../styled/TitleBoxStyled";
import MainContentStyled from "../styled/MainContentStyled";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { getSummaryData } from "../services/Services";

const Rekapitulasi = () => {
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
        <h2 className="title">Rekapitulasi Pilihan Responden</h2>
      </TitleBoxStyled>
      <MainContentStyled></MainContentStyled>
    </div>
  );
};

export default Rekapitulasi;
