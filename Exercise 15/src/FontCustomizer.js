// FontCustomizer.js
import React, { useState } from "react";

export default function FontCustomizer() {
  const [style, setStyle] = useState("normal");
  const [font, setFont] = useState("Arial");
  const [size, setSize] = useState("24px");

  const reset = () => {
    setStyle("normal");
    setFont("Arial");
    setSize("24px");
  };

  return (
    <div className="border p-6 rounded-xl shadow-md bg-white w-full max-w-lg">
      <h2 className="text-xl font-semibold mb-4">Font Customizer</h2>
      <div className="mb-4">
        <label className="font-medium">Font Style:</label>
        <div className="flex gap-4 mt-1">
          <label>
            <input
              type="radio"
              name="style"
              value="normal"
              checked={style === "normal"}
              onChange={(e) => setStyle(e.target.value)}
            />
            Normal
          </label>
          <label>
            <input
              type="radio"
              name="style"
              value="italic"
              checked={style === "italic"}
              onChange={(e) => setStyle(e.target.value)}
            />
            Italic
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="font-medium">Font Family:</label>
        <select
          className="border p-1 ml-2"
          value={font}
          onChange={(e) => setFont(e.target.value)}
        >
          <option>Arial</option>
          <option>Courier New</option>
          <option>Georgia</option>
          <option>Times New Roman</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="font-medium">Font Size:</label>
        <select
          className="border p-1 ml-2"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          {[16, 20, 24, 28, 32, 36, 40].map((s) => (
            <option key={s}>{s}px</option>
          ))}
        </select>
      </div>

      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Reset
      </button>

      <div
        className="mt-6 border rounded p-4 text-center"
        style={{ fontStyle: style, fontFamily: font, fontSize: size }}
      >
        Customize Me!
      </div>
    </div>
  );
}
