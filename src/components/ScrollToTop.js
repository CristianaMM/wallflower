import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}