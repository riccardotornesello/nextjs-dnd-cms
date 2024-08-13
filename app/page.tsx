"use client";

import { useEffect, useRef, useState } from "react";
import invariant from "tiny-invariant";
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

import { NewRow } from "./components/NewRow";
import { Row } from "./components/Row";

export function Square() {
  const ref = useRef(null);
  const [state, setState] = useState(false);

  useEffect(() => {
    const el = ref.current;
    invariant(el);

    return dropTargetForElements({
      element: el,
      getData: () => ({ test: "asd" }),
      onDragEnter: ({ source }) => setState(true),
      onDragLeave: () => setState(false),
      onDrop: () => setState(false),
    });
  }, []);

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: state ? "pink" : "white",
        margin: "10px",
        width: "100px",
        height: "100px",
      }}
    ></div>
  );
}

export function Test() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    invariant(el);

    return draggable({
      element: el,
      getInitialData: () => ({ test: "wow" }),
    });
  }, []);

  return <div ref={ref}>Test</div>;
}

export default function Home() {
  const squareCount = 5;

  useEffect(() => {
    return monitorForElements({
      onDrop({ source, location }) {
        const destination = location.current.dropTargets[0];
        if (!destination) {
          return;
        }

        console.log("Dropped", source, location);
      },
    });
  }, []);

  const [rowsCount, setRowsCount] = useState(0);

  const addRow = () => {
    setRowsCount((prev) => prev + 1);
  };

  return (
    <main>
      {/* <Test />
      {Array.from({ length: squareCount }).map((_, i) => (
        <Square key={i} />
      ))} */}
      {Array.from({ length: rowsCount }).map((_, i) => (
        <Row key={i} />
      ))}
      <NewRow onClick={addRow} />
    </main>
  );
}
