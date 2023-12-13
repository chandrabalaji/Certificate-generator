import React, { useContext, useEffect, useRef, useState } from "react";
import img from "../images/wave.png";
import QR from "../images/QR.jpg";
import sign from "../images/digital-sign.png";
import ISO from "../images/ISO.png";
import medal from "../images/madel.png";
import { Userdata } from "../context/Usercontext";
import { MdDownload } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { leapfrog } from "ldrs";

const Certificate = () => {
  leapfrog.register();
  const [loading, setLoading] = useState(true);
  const { data } = useContext(Userdata);
  const CertificateRef = useRef();
  let Date;
  let contant;

  function userdata() {
    const gender = data.gender
      ? data.gender === "male"
        ? "Mr."
        : "Ms."
      : "Dear";

    Date = data && data.date.split("-").reverse().join("-");

    contant = (
      <p>
        In recognition of {gender} <span>{data.username}</span> dedication and
        hard work, we are pleased to present this certificate as a symbol of
        your successful completion of the <span id="cc">{data.course}</span>{" "}
        Course. Your commitment to learning and achievement is commendable, and
        we wish you continued success in your journey.
      </p>
    );
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }
  // useEffect(() => {
  data && userdata();
  // }, []);

  const haldleclick = () => {
    // conver pixel to mm

    const canvasWidthInPixels = 931;
    const canvasHeightInPixels = 875;

    const pixelsToMmConversionFactor = 0.264583;

    const canvasWidthInMm = canvasWidthInPixels * pixelsToMmConversionFactor;
    const canvasHeightInMm = canvasHeightInPixels * pixelsToMmConversionFactor;

    try {
      html2canvas(CertificateRef.current).then((canvas) => {
        const imageData = canvas.toDataURL("imge/png");
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "mm",
          format: [canvasWidthInMm, canvasHeightInMm],
        });

        pdf.addImage(
          imageData,
          "PNG",
          0,
          0,
          pdf.internal.pageSize.width,
          pdf.internal.pageSize.height
        );
        pdf.save(`${data.course}-certificate.pdf`);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return !loading ? (
    <div className="certificate">
      <div className="download">
        <button onClick={haldleclick}>
          <MdDownload />
        </button>
        <BiDotsVerticalRounded />
      </div>
      <div className="content" ref={CertificateRef}>
        <h1 className="logo">Ellora Prvt Ltd. </h1>
        <img src={img} alt="" id="img" />
        <img src={medal} alt="" id="madel" />
        <div className="usercontent">
          <h2>Certificate of completion</h2>
          <div className="discerption">
            {contant}
            <h3>Issued by : {data.issuer}</h3>
          </div>
          <div className="footer">
            <div className="issuer">
              <img src={QR} alt="" id="QR" />
              <div className="signdiv">
                <img src={sign} alt="" id="sign" />
                <span>Founder</span>
              </div>
              <img src={ISO} alt="" id="iso" />
            </div>
            <div className="media">
              <p>contact@Ellora.in</p>
              <p>www.Ellora.in</p>
              <p>
                Date: <span>{Date}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="loader">
      {loading && (
        <l-leapfrog size="50" speed="2.5" color="white">
          {" "}
        </l-leapfrog>
      )}
    </div>
  );
};

export default Certificate;
