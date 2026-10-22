import { ImageResponse } from "next/og";
import { ogAsset, size } from "./_og/og";

export { size };
export const contentType = "image/png";
export const dynamic = "force-static";
export const alt = "Faizi Fifita: Building is my love language.";

export default async function Image() {
  const photo = await ogAsset("faizi.png");

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", gap: 72, padding: 96, background: "#ffffff" }}>
        <img src={photo} width={360} height={360} style={{ borderRadius: 180 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 24, flex: 1 }}>
          <div style={{ fontSize: 34, color: "#6e6e73" }}>Faizi Fifita</div>
          <div style={{ fontSize: 72, lineHeight: 1.05, letterSpacing: -2, color: "#000000" }}>
            Building is my love language.
          </div>
          <div style={{ fontSize: 30, color: "#6e6e73" }}>Apps and tools I've built</div>
        </div>
      </div>
    ),
    size,
  );
}
