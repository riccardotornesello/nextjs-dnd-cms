"use client";

import styles from "./styles.module.css";

export type NewRowProps = {
  onClick: () => void;
};

export function NewRow({ onClick }: Readonly<NewRowProps>) {
  return (
    <div className={styles.container}>
      <div style={{ width: "40px" }} />
      <div className={styles.content}>
        <button className={styles.container} onClick={onClick}>
          <div className={styles.plus}>+</div>
        </button>
      </div>
      <div style={{ width: "40px" }} />
    </div>
  );
}
