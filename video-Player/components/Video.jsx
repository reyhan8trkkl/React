import React from "react";
import { Route, Routes } from "react-router-dom";

export default function Video({ VIDEOS }) {
  return (
    <Routes>
      <Route
        path="/fast"
        element={
          <video src={VIDEOS.fast} autoPlay controls title="fast"></video>
        }
      ></Route>
      <Route
        path="/slow"
        element={
          <video src={VIDEOS.slow} autoPlay controls title="slow"></video>
        }
      ></Route>
      <Route
        path="/cute"
        element={
          <video src={VIDEOS.cute} autoPlay controls title="cute"></video>
        }
      ></Route>
      <Route
        path="/eek"
        element={<video src={VIDEOS.eek} autoPlay controls title="eek"></video>}
      ></Route>
      <Route
        path="*"
        element={<h2>Not Found</h2>}
      ></Route>
    </Routes>
  );
}
