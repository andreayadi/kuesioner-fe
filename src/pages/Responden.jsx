import React from "react";
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
  RadialBar,
  RadialBarChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useState } from "react";

const Responden = () => {
  const [appsArr, setAppsArr] = useState([]);

  let apps = [];

  useEffect(() => {
    (async () => {
      const response = await getSummaryData();
      const respondenApps = response.data.respondenApps;

      if (response.status === 200) {
        toast.success("Success Retrieve Data");

        for (const property in respondenApps) {
          apps.push({
            Aplikasi: property,
            Total: respondenApps[property],
          });
        }

        setAppsArr(apps);
      } else {
        toast.error("Failed to Retrieve Data");
      }
    })();
  }, []);

  return (
    <div className="content">
      <TitleBoxStyled>
        <h2 className="title">Deskripsi Responden</h2>
      </TitleBoxStyled>
      <MainContentStyled>
        <BarChart width={1000} height={450} data={appsArr}>
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
export default Responden;
