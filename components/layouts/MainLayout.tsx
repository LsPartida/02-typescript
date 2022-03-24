import React, { FC } from "react";
import Head from "next/head";
import NavBar from "../NavBar/NavBar";
import styles from "./MainLayout.module.css";

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title> NextJS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default MainLayout;
