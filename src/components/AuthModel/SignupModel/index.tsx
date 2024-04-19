import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  setScreen: Dispatch<SetStateAction<"Login" | "Signup" | "Password">>;
};

function SignupModel({ setScreen }: Props) {
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Kayıt ol</h1>
      <div className="h-[280px]">
        <div className="flex flex-col mt-12  ">
          <label className="mb-3 font-semibold text-sm ">E-posta</label>
          <input
            className="w-full  bg-gray-200 rounded-sm px-4 py-2 outline-none "
            type="email"
            placeholder="E-posta"
          />
        </div>
        <div className="flex flex-col mt-3 mb-3">
          <input
            className="w-full bg-gray-200 rounded-sm px-4 py-2 outline-none"
            type="password"
            placeholder="Şifre"
          />
        </div>
        <div className="flex flex-col mt-3 mb-3">
          <input
            className="w-full bg-gray-200 rounded-sm px-4 py-2 outline-none"
            type="password"
            placeholder="Şifre tekrar"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-12">
        <button
          className="text-rose-600 font-semibold"
          onClick={() => setScreen("Login")}
        >
          Zaten hesabım var
        </button>
        <button onClick={() => setScreen("Password")}>
          Şifreni mi unuttun
        </button>
      </div>
    </>
  );
}

export default SignupModel;
