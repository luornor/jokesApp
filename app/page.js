"use client";
import Alljokes from "../components/Alljokes";
import {store} from "../redux/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <Alljokes/>
    </Provider>
  );
}
