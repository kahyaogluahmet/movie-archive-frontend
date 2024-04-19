"use client";

import React, { useState } from "react";
import LoginModel from "./LoginModel";
import SignupModel from "./SignupModel";
import ForgetPasswordModel from "./ForgetPasswordModel";

type Props ={
    model:any
}

function AuthModel({model}:Props) {
  const [screen, setScreen] = useState<"Login" | "Signup" | "Password">(
    "Login"
  );

  return (
    <dialog ref={model} className="lg:p-20 p-5 rounded-lg w-[90%] lg:w-96 overflow-hidden relative "  >
      {screen === "Login" && <LoginModel model={model} setScreen={setScreen} />}
      {screen === "Signup" && <SignupModel setScreen={setScreen} />}
      {screen === "Password" && <ForgetPasswordModel setScreen={setScreen} />}
    </dialog>
  );
}

export default AuthModel;
