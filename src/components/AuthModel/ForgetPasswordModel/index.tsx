import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  setScreen: Dispatch<SetStateAction<"Login" | "Signup" | "Password">>;
};

function ForgetPasswordModel({ setScreen }: Props) {
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Şifre Sıfırlama</h1>
      <div className="flex flex-col mt-12">
        <label className="mb-3 font-semibold text-sm " htmlFor="email-input">
          E-posta adresini girin
        </label>
        <input
          className="w-full  bg-gray-200 rounded-sm px-4 py-2 outline-none "
          id="email-input"
          type="email"
          placeholder="E-posta adresi"
        />
        <div className="flex gap-4 mt-8">
          <div className="flex justify-between w-full">
            <button>Gönder</button>
            <button onClick={() => setScreen("Login")}>Geri</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgetPasswordModel;
