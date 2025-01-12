"use client"
import Header from "./container/Header";
import Content from "./container/Content";
import dayjs from "dayjs";
import { AppContext } from "./context";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState(dayjs());

  return (
    <div>
      <Header />
      <AppContext.Provider value={{date, setDate}}>
        <Content />
      </AppContext.Provider>
    </div>
  );
}
