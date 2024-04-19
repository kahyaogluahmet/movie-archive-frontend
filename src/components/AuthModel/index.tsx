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
    <dialog ref={model} className=" p-20 rounded-lg h-[80%] overflow-hidden  ">
      {screen === "Login" && <LoginModel model={model} setScreen={setScreen} />}
      {screen === "Signup" && <SignupModel setScreen={setScreen} />}
      {screen === "Password" && <ForgetPasswordModel setScreen={setScreen} />}
    </dialog>
  );
}

export default AuthModel;
