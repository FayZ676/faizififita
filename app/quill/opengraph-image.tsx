import { ImageResponse } from "next/og";
import { ogAsset, size } from "../_og/og";

export { size };
export const contentType = "image/png";
export const dynamic = "force-static";
export const alt = "Quill, a minimal Markdown editor, on iPhone in focus mode.";

export default async function Image() {
  const [icon, phone] = await Promise.all([ogAsset("quill-icon.png"), ogAsset("iphone-focus.png")]);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", padding: "0 96px", background: "#f5f5f7", overflow: "hidden" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 28, flex: 1 }}>
          <img src={icon} width={128} height={128} style={{ borderRadius: 29, boxShadow: "0 4px 16px rgb(0 0 0 / 0.12)" }} />
          <div style={{ fontSize: 80, lineHeight: 1, letterSpacing: -2, color: "#000000" }}>Quill.</div>
          <div style={{ fontSize: 44, lineHeight: 1.15, color: "#6e6e73" }}>A quiet place to write.</div>
          <div style={{ fontSize: 28, color: "#6e6e73" }}>Markdown editor for Mac, iPhone and iPad</div>
        </div>
        {/* The phone runs off the bottom edge so its screen reads at preview size */}
        <img src={phone} width={368} height={800} style={{ marginTop: 260, borderRadius: 48 }} />
      </div>
    ),
    size,
  );
}
