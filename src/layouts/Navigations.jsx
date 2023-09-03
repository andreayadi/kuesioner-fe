import React from "react";
import NavStyled from "../styled/NavStyled";
import { Link } from "react-router-dom";

const Navigations = () => {
  return (
    <nav className="nav">
      <Link to={"/kuesioner"}>
        <NavStyled>KUESIONER</NavStyled>
      </Link>
      <Link to={"/responden"}>
        <NavStyled>DESKRIPSI RESPONDEN</NavStyled>
      </Link>
      <Link to={"/rekapitulasi"}>
        <NavStyled>RATA-RATA PILIHAN RESPONDEN</NavStyled>
      </Link>
      <Link to={"/total/skor"}>
        <NavStyled>TOTAL SKOR</NavStyled>
      </Link>
      <Link to={"/total/index"}>
        <NavStyled>TOTAL INDEX</NavStyled>
      </Link>
      <Link to={"/tingkatkepuasan"}>
        <NavStyled>TINGKAT KEPUASAN</NavStyled>
      </Link>
    </nav>
  );
};

export default Navigations;
