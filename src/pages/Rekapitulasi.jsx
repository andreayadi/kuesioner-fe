import React from "react";
import TitleBoxStyled from "../styled/TitleBoxStyled";
import MainContentStyled from "../styled/MainContentStyled";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { getSummaryData } from "../services/Services";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useState } from "react";

const Rekapitulasi = () => {
  const [rekapArr, setrekapArr] = useState([]);

  const rekap = [];

  useEffect(() => {
    (async () => {
      const response = await getSummaryData();
      const totalSkor = response.data.totalSkor;
      const totalResponden = response.data.totalResponden;

      if (response.status === 200) {
        toast.success("Success Retrieve Data");

        for (let i = 0; i < 30; i++) {
          let key = `X${i + 1}`;
          rekap.push({
            Aplikasi: key,
            Ratarata: totalSkor[key] / totalResponden,
          });
        }

        setrekapArr(rekap);
      } else {
        toast.error("Failed to Retrieve Data");
      }
    })();
  }, []);

  return (
    <div className="content">
      <TitleBoxStyled>
        <h2 className="title">Rata-rata Pilihan Responden</h2>
      </TitleBoxStyled>
      <MainContentStyled>
        <BarChart width={1000} height={450} data={rekapArr}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Aplikasi" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Ratarata" fill="#8884d8" />
        </BarChart>
      </MainContentStyled>
    </div>
  );
};

export default Rekapitulasi;
