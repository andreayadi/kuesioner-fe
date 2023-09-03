import React, { useState } from "react";
import TitleBoxStyled from "../styled/TitleBoxStyled";
import MainContentStyled from "../styled/MainContentStyled";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { getSummaryData } from "../services/Services";

const TingkatKepuasan = () => {
  const [rataIndex, setRataIndex] = useState();
  const [keterangan, setKeterangan] = useState("");

  let ket = "";

  useEffect(() => {
    (async () => {
      const response = await getSummaryData();
      const totalIndex = response.data.tingkatKepuasan;

      if (totalIndex < 20) {
        ket = "Sangat Tidak Puas";
      } else if (totalIndex < 40) {
        ket = "Tidak Puas";
      } else if (totalIndex < 60) {
        ket = "Ragu - Ragu";
      } else if (totalIndex < 80) {
        ket = "Puas";
      } else if (totalIndex <= 100) {
        ket = "Sangat Puas";
      }

      if (response.status === 200) {
        toast.success("Success Retrieve Data");

        setKeterangan(ket);
        setRataIndex(totalIndex);
      } else {
        toast.error("Failed to Retrieve Data");
      }
    })();
  }, []);
  return (
    <div className="content">
      <TitleBoxStyled>
        <h2 className="title">Tingkat Kepuasan</h2>
      </TitleBoxStyled>
      <MainContentStyled>
        <div className="rentang__box">
          <div className="rentang__box-title">
            <div className="rentang__box-title-des">Rentang Nilai</div>
            <div className="rentang__box-title-ket">Keterangan</div>
          </div>
          <div className="rentang__box-item">
            <div className="rentang__box-item-des">Angka 0% - 19,99%</div>
            <div className="rentang__box-item-ket">Sangat Tidak Puas</div>
          </div>
          <div className="rentang__box-item">
            <div className="rentang__box-item-des">Angka 20% - 39,99%</div>
            <div className="rentang__box-item-ket">Tidak Puas</div>
          </div>
          <div className="rentang__box-item">
            <div className="rentang__box-item-des">Angka 40% - 59,99%</div>
            <div className="rentang__box-item-ket">Ragu - Ragu</div>
          </div>
          <div className="rentang__box-item">
            <div className="rentang__box-item-des">Angka 60% - 79,99%</div>
            <div className="rentang__box-item-ket">Puas</div>
          </div>
          <div className="rentang__box-item">
            <div className="rentang__box-item-des">Angka 80% - 100%</div>
            <div className="rentang__box-item-ket">Sangat Puas</div>
          </div>
        </div>
        <div className="kepuasan__box">
          <div className="kepuasan__box-info">
            <div>RATA - RATA TOTAL INDEX :</div>
            <div className="kepuasan__box-info-index">{rataIndex}%</div>
          </div>
          <div className="kepuasan__box-final">
            <div className="kepuasan__box-final-akhir">{keterangan}</div>
          </div>
        </div>
      </MainContentStyled>
    </div>
  );
};

export default TingkatKepuasan;
