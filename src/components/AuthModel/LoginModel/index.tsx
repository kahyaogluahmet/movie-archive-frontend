import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

type Prop = {
  setScreen: Dispatch<SetStateAction<"Login" | "Signup" | "Password">>;
  model:any

};
function LoginModel({ setScreen,model }: Prop) {
  return (
    <div>
      <h1>Login</h1>
      <label htmlFor="">nickname</label>
      <input type="text" />
      <label htmlFor="">password</label>
      <input type="text" />
      <button onClick={()=>model.current.close()} >Giriş yap</button>
      <button onClick={()=>setScreen("Password")} >Şifreni mi unuttun</button>
      <button onClick={() => setScreen("Signup")}>Yeni hesap</button>
    </div>
  );
}

export default LoginModel;
