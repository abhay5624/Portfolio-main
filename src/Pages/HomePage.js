import React from "react";
import image from "../Icon/Abhay.svg";
import Lightbulb from "../Icon/lightbulb.svg";
import styled from "styled-components";
export const HomePage = () => {
  return (
    <div>
      <Hint>
        <img src={Lightbulb} alt="" />
      </Hint>
      <Boxmain>
        <img src={image} alt="ABHAY" className="Abhay" />
        <h2>Sign in</h2>
        <p className="Grey">Use your Portfolio Account</p>
        <Password>
          <input type="password" name="" id="" placeholder="Password" />
          <p className="FP">Forget Password ?</p>
          <p className="nf">
            Not your Account? Use guest mode to sign in privately{" "}
          </p>
          <a href="#">Learn more</a>
        </Password>
        <Flexbox>
          <a href="#">Navigate to netflix</a>
          <button>NEXT</button>
        </Flexbox>
      </Boxmain>
      <Privacy>
        <a href="#">Help</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </Privacy>
    </div>
  );
};
const Privacy = styled.div`
  margin: 10px;
  margin-left: 50%;
  display: flex;
  width: 14%;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: #333;
  }
`;
const Flexbox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5%;
  font-size: 17px;
  a {
    text-decoration: none;
    color: rgb(37, 130, 236);
  }
  button {
    padding: 10px;
    color: white;
    font-size: 17px;

    font-weight: 500;
    background-color: rgb(37, 130, 236);
    border: none;
    border-radius: 4px;
  }
`;
const Password = styled.div`
  text-align: left;
  width: 100%;
  padding: 5%;
  padding-top: 0;
  a {
    text-decoration: none;
    color: rgb(37, 130, 236);
  }
  .nf {
    margin-top: 100px;
  }
  .FP {
    padding: 0;
    margin: 0;
    color: rgb(37, 130, 236);
  }
  input {
    width: 90%;
    margin-top: 20px;
    padding: 10px;
    font-size: 15px;
  }
`;
const Hint = styled.div`
  display: flex;
  justify-content: right;
  padding: 3px;
`;
const Boxmain = styled.div`
  width: 30%;
  margin: 5%;
  margin-left: 30%;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  border: 2px solid #bbb;
  border-radius: 5px;
  padding: 30px;
  text-align: center;
  justify-content: center;
  box-shadow: 3px 5px 2px 3px #6f6f6f43;
  p {
    padding: 0;
    margin: 0;
  }
  h2 {
    font-weight: 500;
    margin: 0;
    padding: 0;
  }
  .Abhay {
    width: 140px;
    margin: auto;
    padding: 20px;
  }
  .Grey {
    color: #444;
    margin: 5px;
  }
`;
