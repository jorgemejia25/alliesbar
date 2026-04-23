import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

/**
 * Generates the Apple touch icon as a PNG image response.
 */
export default function AppleIcon() {
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
          borderRadius: 40,
        }}
      >
        <div
          style={{
            width: 128,
            height: 128,
            borderRadius: 36,
            background: "linear-gradient(135deg, #F5D07A 0%, #D19B2A 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 18px 40px rgba(0,0,0,0.40)",
            letterSpacing: -2,
            fontWeight: 900,
            fontSize: 72,
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

