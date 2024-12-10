import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <h1 style={{ padding: "12px" }}>QR Code generator</h1>
      <div style={{ padding: "12px" }}>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
          value={input}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generator
        </button>
      </div>
      <div>
        {qrCode && (
          <QRCode id="wr-code-value" value={qrCode} size={400} bgColor="#fff" />
        )}

        {/* <QRCode id="wr-code-value" value={qrCode} size={400} bgColor="#fff" /> */}
      </div>
    </div>
  );
}
