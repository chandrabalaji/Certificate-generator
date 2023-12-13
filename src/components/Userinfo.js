import React, { useContext, useState } from "react";
import { Userdata } from "../context/Usercontext";
import { useNavigate } from "react-router";

const Userinfo = () => {
  const { dispatch } = useContext(Userdata);

  const Nav = useNavigate();

  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [issuer, setissuer] = useState("");
  const [course, setcourse] = useState("");
  const [gender, setgender] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "SET_USER_DATA",
      payload: {
        username: name,
        date: date,
        course: course,
        gender: gender,
        issuer: issuer,
      },
    });
    Nav("/certificate");
  };

  const handlegenderselect = (e) => {
    setgender(e.target.value);
  };
  return (
    <div className="container">
      <h1>Certificate Generator</h1>
      <form className="form" onSubmit={handlesubmit}>
        <label htmlFor=""> name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          required
        />

        <label htmlFor=""> Date of Completion:</label>
        <input
          type="date"
          name=""
          id=""
          value={date}
          onChange={(e) => setdate(e.target.value)}
          required
        />

        <label htmlFor="">Courses:</label>
        <select
          name=""
          id=""
          value={course}
          onChange={(e) => setcourse(e.target.value)}
        >
          <option value="Web Development">Web Development</option>
          <option value="Devops">Devops</option>
          <option value="Flutter Development">Flutter</option>
          <option value="Data Analyist">Data Analyist</option>
          <option value="Data Scientist">Data Scientist</option>
          <option value="Front-End Development">Front-End Development</option>
          <option value="Back-End Development">Back-End Development</option>
          <option value="Full-Stack Development">Full-Stack Development</option>
          <option value="ASP.Net Development">ASP.Net Development</option>
        </select>
        <label htmlFor="">Issued By:   </label>
        <input
          type="text"
          value={issuer}
          onChange={(e) => setissuer(e.target.value)}
          required
        />
        <label>Gender:  ('optional')</label>
        <div className="gender">
          <input
            name="gender"
            type="radio"
            id="m"
            value="male"
            onClick={handlegenderselect}
          />
          <label htmlFor="m">male</label>
          <input
            name="gender"
            type="radio"
            id="f"
            value="female"
            onClick={handlegenderselect}
          />

          <label htmlFor="f">Female</label>
        </div>
        <div className="btn-div">
          <button type="submit" className="btn">
            Generat
          </button>
        </div>
      </form>
    </div>
  );
};

export default Userinfo;
