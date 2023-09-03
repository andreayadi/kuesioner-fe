import React from "react";
import { useEffect } from "react";
import { getSummaryData } from "../services/Services";
import { toast } from "react-toastify";
import TitleBoxStyled from "../styled/TitleBoxStyled";
import MainContentStyled from "../styled/MainContentStyled";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TotalIndex = () => {
  const [rekapArr, setrekapArr] = useState([]);
  let sumTotalIndex = 0;

  const rekap = [];

  useEffect(() => {
    (async () => {
      const response = await getSummaryData();
      const totalIndex = response.data.totalIndex;

      if (response.status === 200) {
        toast.success("Success Retrieve Data");

        for (let i = 0; i < 30; i++) {
          let key = `X${i + 1}`;
          rekap.push({
            Aplikasi: key,
            Total: totalIndex[key],
          });
        }

        console.log(sumTotalIndex);

        setrekapArr(rekap);
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

export default TotalIndex;
