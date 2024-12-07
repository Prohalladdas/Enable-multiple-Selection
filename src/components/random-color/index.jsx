import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOFColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtiliti(length) {
    return Math.floor(Math.random() * length);
  }
  function handleCreateHexRandomColor() {
    // #859485
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtiliti(hex.length)];
    }
    setColor(hexColor);
  }
  function handleCreateRgbRandomColor() {
    const r = randomColorUtiliti(256);
    const g = randomColorUtiliti(256);
    const b = randomColorUtiliti(256);

    setColor(`rgb(${r},${g},${b})`);
  }
  useEffect(() => {
    // if (typeOfColor === "rgb") handleCreateRgbRandomColor();
    // else handleCreateHexRandomColor();
    typeOfColor === "rgb"
      ? handleCreateRgbRandomColor()
      : handleCreateHexRandomColor();
  }, [typeOfColor]);
  return (
    <div style={{ height: "100vh", width: "100%", backgroundColor: color }}>
      <button onClick={() => setTypeOFColor("hex")}>Generate HEX Color</button>
      <button onClick={() => setTypeOFColor("rgb")}>Generate RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateHexRandomColor
            : handleCreateRgbRandomColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center,",
          marginTop: "200px",
          alignItems: "center",
          color: "#ffffff",
          fontSize: "30px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
