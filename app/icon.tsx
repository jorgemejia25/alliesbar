import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

/**
 * Generates the app favicon as a PNG image response.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0B0C",
          borderRadius: 14,
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: "linear-gradient(135deg, #F5D07A 0%, #D19B2A 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 20px rgba(0,0,0,0.35)",
            letterSpacing: -1,
            fontWeight: 800,
            fontSize: 24,
            color: "#0B0B0C",
          }}
        >
          A
        </div>
      </div>
    ),
    size,
  );
}

