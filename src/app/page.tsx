"use client";

import AuthModel from "@/components/AuthModel";
import LoginModel from "@/components/AuthModel/LoginModel";
import { useEffect, useRef } from "react";

export default function Home() {
  const model:any = useRef<HTMLDialogElement>()

  useEffect(() => {
    model.current.showModal();
  }, []);
  return (
    <div>
      <AuthModel model={model} />
    </div>
  );
}
