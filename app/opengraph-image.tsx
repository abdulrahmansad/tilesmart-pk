import { ImageResponse } from "next/og";

export const alt = "Tile Mart Peshawar — Tiles & Sanitary Ware";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0d1b25",
          color: "white",
          padding: "70px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-80px",
            top: "-100px",
            width: "560px",
            height: "760px",
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            transform: "rotate(12deg)",
            opacity: 0.5,
          }}
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              style={{
                width: "168px",
                height: "168px",
                display: "flex",
                borderRadius: "18px",
                background: index % 3 === 0 ? "#0f6ea8" : index % 3 === 1 ? "#d9c9aa" : "#36576b",
              }}
            />
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "780px", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "14px" }}>
            <div style={{ display: "flex", gap: "4px" }}>
              {"TILE".split("").map((letter) => (
                <div
                  key={letter}
                  style={{
                    width: "66px",
                    height: "66px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#0f6ea8",
                    fontSize: "40px",
                    fontWeight: 900,
                  }}
                >
                  {letter}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", fontSize: "48px", fontStyle: "italic", fontWeight: 700, color: "#60b1df" }}>Mart</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: "70px", lineHeight: 0.96, letterSpacing: "-4px", fontWeight: 900 }}>
              Tiles & Sanitary Ware in Peshawar
            </div>
            <div style={{ display: "flex", marginTop: "28px", fontSize: "25px", color: "rgba(255,255,255,.65)" }}>
              Karkhano Market · Peshawar · Pakistan
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
