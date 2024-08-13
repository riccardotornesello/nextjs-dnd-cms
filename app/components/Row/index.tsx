"use client";

import { useState } from "react";

import { Col } from "../Col";

import styles from "./styles.module.css";

export function Row() {
  const [colsCount, setColsCount] = useState(1);

  const addCol = () => {
    setColsCount(colsCount + 1);
  };

  return (
    <div className={styles.container}>
      <button
        style={{ backgroundColor: "red", width: "40px" }}
        onClick={addCol}
      >
        Add
      </button>
      <div className={styles.content}>
        {Array.from({ length: colsCount }).map((_, index) => (
          <Col key={index} />
        ))}
      </div>
      <button
        style={{ backgroundColor: "red", width: "40px" }}
        onClick={addCol}
      >
        Add
      </button>
    </div>
  );
}
