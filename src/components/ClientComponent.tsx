"use client";

import Link from "next/link";
import { useState } from "react";

export const ClientComponent = () => {
  const [state, setState] = useState("TEST");
  return (
    <div>
      <Link href="/">{state}ありがとう</Link>
    </div>
  );
};
