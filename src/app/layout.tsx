"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ParentProvider from "@/ParentProvider";
import Header from "@/components/header/header";
import { useEffect } from "react";
import axiosInstance from "@/axiosInstance";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if (window.localStorage.getItem("impact-userId") !== null) {
      const userId = window.localStorage.getItem("impact-userId");
      console.log(userId);
      const getData = async () => {
        console.log("getting user");
        const res = await axiosInstance.get(`/user/${userId}`);
        console.log("res.data");
      }
      getData();
    }
  })
  return (
    <html lang="en">
      <body>
        <ParentProvider><Header />{children}</ParentProvider>
      </body>
    </html>
  );
}
