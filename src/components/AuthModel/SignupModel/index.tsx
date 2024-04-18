import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  setScreen: Dispatch<SetStateAction<"Login" | "Signup" | "Password">>;
};

function SignupModel({ setScreen }: Props) {
  return (
    <div>
      <h1>Signup</h1>
      <label htmlFor="">nickname</label>
      <input type="text" />
      <label htmlFor="">password</label>
      <input type="text" />
      <input type="text" />
      <button onClick={() => setScreen("Login")}>Zaten hesabım var</button>
      <button onClick={() => setScreen("Password")}>Şifreni mi unuttun</button>
    </div>
  );
}

export default SignupModel;
