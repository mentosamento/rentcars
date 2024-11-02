import React, { useEffect, useState } from "react";
import SelectMui from "../Components/SelectMui/SelectMui";
import Footer from "../Components/Footer/Footer";
import {
  markaOptions,
  colorOptions,
  cityOptions,
  banOptions,
  optionsMap,
  yanacaqOptions,
  oturucuOptions,
  qutuOptions,
  yearOptions,
  motorOptions,
  seatOptions,
} from "../utils/Data";
import "./CreatePost.css";
import Header from "../Components/Header/Header";
import Logo from "../Components/Logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import InputMui from "../Components/InputMui/InputMui";
import { TextField } from "@mui/material";
import pass1 from "../Images/pass1.png";
import pass2 from "../Images/pass2.png";
import Check from "../Components/Check/Check";
import ImageUpload from "../Components/ImageUpload/ImageUpload";
import Contact from "../Components/Contact/Contact";
import { changeDescription } from "../features/post";

function CreatePost() {
  const dispatch = useDispatch();
  const [files, setFiles] = useState();
  const [previews, setPreviews] = useState();
  const [tooltip, setTooltip] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [desc, setDesc] = useState("");

  function displayTooltip() {
    setTooltip(true);
  }
  function undisplayTooltip() {
    setTooltip(false);
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!files) return;
    let tmp = [];
    for (let i = 0; i < files.length; i++) {
      tmp.push(URL.createObjectURL(files[i]));
    }
    const objectUrls = tmp;
    setPreviews(objectUrls);

    // free memory
    for (let i = 0; i < objectUrls.length; i++) {
      return () => {
        URL.revokeObjectURL(objectUrls[i]);
      };
    }
  }, [files]);

  const post = useSelector((state) => state.post.value);

  return (
    <div style={{ backgroundColor: "#f5f5f9" }}>
      <div className="post-header">
        <Logo />
      </div>
      <div className="post-subheader">
        <h2 className="post-phone">Elan yerləşdirmə</h2>
      </div>
      <div className="main-container">
        <div className="post-grid">
          <div>
            <SelectMui options={markaOptions} title="Marka" />
          </div>
          <div>
            <SelectMui options={markaOptions} title="Model" />
          </div>
          <div>
            <SelectMui options={cityOptions} title="Şəhər" />
          </div>
          <div>
            <SelectMui options={banOptions} title="Ban növü" />
          </div>
          <div>
            <InputMui title="Yürüş" />
          </div>
          <div>
            <SelectMui options={colorOptions} title="Rəng" />
          </div>
          <div>
            <InputMui title="Qiymət" type="num" />
          </div>
          <div>
            <SelectMui options={yanacaqOptions} title="Yanacaq" />
          </div>
          <div>
            <SelectMui options={oturucuOptions} title="Ötürücü" />
          </div>
          <div>
            <SelectMui options={qutuOptions} title="Sürətlər qutusu" />
          </div>
          <div>
            <SelectMui options={yearOptions} title="İl" />
          </div>
          <div>
            <SelectMui options={motorOptions} title="Mühərrikin həcmi (Litr)" />
          </div>
          <div>
            <InputMui title="Mühərrikin gücü" />
          </div>
          <div>
            <SelectMui options={seatOptions} title="Yerlərin sayı" />
          </div>
        </div>
        <div className="nongrid-container">
          <TextField
            fullWidth
            multiline
            rows={7}
            label="Əlavə məlumat ..."
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
              dispatch(changeDescription(e.target.value));
            }}
          />
          <h5
            style={{
              width: "fit-content",
              fontFamily: "Inter",
              fontWeight: 400,
              marginTop: "4px",
            }}
          >
            Telefon nömrələri qeyd etmək qadağandır!
          </h5>
          <div className="vin-container">
            <TextField label="VIN Kod" className="vin-input" />
            {tooltip ? (
              <div className="tooltip">
                <div className="x-container">
                  <svg
                    cursor="pointer"
                    onClick={undisplayTooltip}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                  </svg>
                </div>
                <img src={pass1} alt="pass1" />
                <img src={pass2} alt="pass2" />
                <h4 className="tooltip-text">Vin kod elanda görsənməyəcək</h4>
              </div>
            ) : (
              <></>
            )}

            <h4 onClick={displayTooltip} className="vin-text">
              VIN harda olur?
            </h4>
          </div>
        </div>

        <div className="checkbox-grid">
          <Check title="Yüngül lehimli disklər" />
          <Check title="Mərkəzi qapanma" />
          <Check title="Dəri salon" />
          <Check title="Oturacaqların ventilyasiyası" />
          <Check title="ABS" />
          <Check title="Park radarı" />
          <Check title="Ksenon lampalar" />
          <Check title="Lyuk" />
          <Check title="Kondisioner" />
          <Check title="Arxa görüntü kamerası" />
          <Check title="Yağış sensoru" />
          <Check title="Oturacaqların isidilməsi" />
          <Check title="Yan pərdələr" />
        </div>

        <ImageUpload />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default CreatePost;
