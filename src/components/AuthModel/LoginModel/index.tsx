import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

type Prop = {
  setScreen: Dispatch<SetStateAction<"Login" | "Signup" | "Password">>;
  model: any;
};
function LoginModel({ setScreen, model }: Prop) {
  return (
    <div className="flex flex-col items-center w-full  ">
      <div className="h-[460px] "  >
        <h1 className="text-3xl font-bold text-center">Giriş yap</h1>
        <div className="flex flex-col mt-12">
          <label className="mb-3 font-semibold text-sm " >E-posta veya kullanıcı adı</label>
          <input
            className="w-full  bg-gray-200 rounded-sm px-4 py-2 outline-none "
            type="text"
            placeholder="Kullanıcı adı"
          />
        </div>
        <div className="flex flex-col mt-3 mb-3">
     
          <input
            className="w-full bg-gray-200 rounded-sm px-4 py-2 outline-none"
            type="password"
            placeholder="Şifre"
          />
        </div>
        <button className="text-xs mb-4 " onClick={() => setScreen("Password")}>
          Şifreni mi unuttun ?
        </button>
        <button
          className="w-full bg-gray-200 px-6 py-2 rounded-sm font-semibold"
          onClick={() => model.current.close()}
        >
          Giriş yap
        </button>
      </div>
      <div >
       <span>Hesabın yok mu ?</span>
        <button className="ml-2  text-rose-600 font-semibold"  onClick={() => setScreen("Signup")}><span>Yeni hesap</span></button>
      </div>
    </div>
  );
}

export default LoginModel;
