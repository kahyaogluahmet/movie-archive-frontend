import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  setScreen: Dispatch<SetStateAction<"Login" | "Signup" | "Password">>;
};

function ForgetPasswordModel({ setScreen }: Props) {
  return (
    <div>
      <label htmlFor="email-input">e-mail</label>
      <input id="email-input" type="e-mail" />
      <button onClick={() => setScreen("Login")}>Geri</button>
      <button>Gönder</button>
    </div>
  );
}

export default ForgetPasswordModel;
