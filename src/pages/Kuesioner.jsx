import React from "react";
import TitleBoxStyled from "../styled/TitleBoxStyled";
import MainContentStyled from "../styled/MainContentStyled";
import KuesionerForm from "../styled/KuesionerForm";
import Select from "react-select";
import questionsData from "../components/QuestionsData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { insertNewKuesionerData } from "../services/Services";

const Kuesioner = () => {
  const appsOptions = [
    { value: "Gojek", label: "Gojek" },
    { value: "ShopeePay", label: "ShopeePay" },
    { value: "OVO", label: "OVO" },
    { value: "DANA", label: "DANA" },
    { value: "BCA Mobile", label: "BCA Mobile" },
    { value: "Mandiri Livin`", label: "Mandiri Livin`" },
    { value: "BRIMO", label: "BRIMO" },
    { value: "BNI Mobile", label: "BNI Mobile" },
    { value: "Jago", label: "Jago" },
    { value: "Aplikasi Lainnya", label: "Aplikasi Lainnya" },
  ];

  const kuesOptions = [
    { value: 1, label: "Sangat Tidak Setuju" },
    { value: 2, label: "Tidak Setuju" },
    { value: 3, label: "Ragu - Ragu" },
    { value: 4, label: "Setuju" },
    { value: 5, label: "Sangat Setuju" },
  ];

  const reqData = {
    birthDate: "",
    apps: [],
    value: Array(30).fill(0),
  };

  const sendKuesionerData = (e) => {
    e.preventDefault();

    if (reqData.birthDate === "") {
      toast.warn("Tanggal Lahir belum terisi");
      return;
    }

    if (reqData.apps.length === 0) {
      toast.warn("Aplikasi yang digunakan belum terisi");
      return;
    }

    if (reqData.value.includes(0)) {
      toast.warn("Ada pertanyaan yang belum terisi");
      return;
    }

    if (consumeApi()) {
      toast.success("Terima kasih sudah mengisi kuesioner");
    } else {
      toast.error("Gagal mengirimkan data");
    }
  };

  const consumeApi = async () => {
    const response = await insertNewKuesionerData(reqData);

    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  };

  const handleChange = (e, q) => {
    reqData.value[q] = e.value;
  };

  const handleChangeDate = (e) => {
    reqData.birthDate = e.target.value;
  };

  const handleChangeApps = (e) => {
    let tempArr = [];

    e.forEach((el) => {
      tempArr.push(el.value);
    });

    reqData.apps = tempArr.slice();
  };

  return (
    <div className="content">
      <TitleBoxStyled>
        <h2 className="title">
          Kuesioner kepuasan pengguna pada sistem pembayaran digital
        </h2>
        <h2 className="title">QRIS (Quick Response Indonesian Standard)</h2>
        <p className="sub-title">
          Assalamualaikum wr.wb, sebelumnya saya mengucapkan terima kasih kepada
          rekan-rekan yang sudah menyempatkan waktunya untuk mengisi kuesioner
          ini, kuesioner ini bertujuan untuk mendapatkan data pengguna QRIS
          sebagai objek penelitian skripsi saya, terima kasih.
        </p>
      </TitleBoxStyled>
      <MainContentStyled>
        <KuesionerForm onSubmit={sendKuesionerData}>
          <div className="resp__desc">
            <div className="resp__desc-ages">
              <span>Tanggal lahir</span>
              <input
                className="input_date"
                type="date"
                onChange={handleChangeDate}
              />
            </div>
            <div className="resp__desc-apps">
              <span>Aplikasi yang digunakan :</span>
              <Select
                options={appsOptions}
                isMulti
                onChange={handleChangeApps}
              />
            </div>
          </div>
          <div className="kues">
            {questionsData.map((el, i) => {
              return (
                <div className="kues__ind" key={i}>
                  <div className="kues__ind-title">{el.indicator}</div>
                  {el.questions.map((subEl, ii) => {
                    return (
                      <div className="kues__ind-box" key={ii}>
                        <div className="kues__ind-box-item">{subEl}</div>
                        <Select
                          options={kuesOptions}
                          className="kues__ind-box-answ"
                          onChange={(e) => {
                            handleChange(e, i * 5 + ii);
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <input
            type="submit"
            className="submit__box"
            value={"Kirimkan Data"}
          />
        </KuesionerForm>
      </MainContentStyled>
    </div>
  );
};

export default Kuesioner;
