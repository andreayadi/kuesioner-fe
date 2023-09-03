import React, { useState } from "react";
import { useEffect } from "react";
import { getSummaryData } from "../services/Services";
import { toast } from "react-toastify";
import TitleBoxStyled from "../styled/TitleBoxStyled";
import MainContentStyled from "../styled/MainContentStyled";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TotalSkor = () => {
  const [rekapArr, setrekapArr] = useState([]);

  const rekap = [];

  useEffect(() => {
    (async () => {
      const response = await getSummaryData();
      const totalSkor = response.data.totalSkor;

      if (response.status === 200) {
        toast.success("Success Retrieve Data");

        for (let i = 0; i < 30; i++) {
          let key = `X${i + 1}`;
          rekap.push({
            Aplikasi: key,
            Total: totalSkor[key],
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
        <h2 className="title">Total Skor</h2>
      </TitleBoxStyled>
      <MainContentStyled>
        <BarChart width={1000} height={450} data={rekapArr}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Aplikasi" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Total" fill="#8884d8" />
        </BarChart>
      </MainContentStyled>
    </div>
  );
};

export default TotalSkor;
