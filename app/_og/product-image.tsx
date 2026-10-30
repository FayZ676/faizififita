import { ImageResponse } from "next/og";
import { ogAsset, size } from "./og";

// The link preview every app's page shares: its icon, name and tagline beside a screenshot.
// A phone runs off the bottom edge so its screen reads at preview size; a desktop shot does the same, wider.
export async function productImage({
  icon,
  shot,
  desktop = false,
  name,
  tagline,
  platforms,
}: {
  icon: string;
  shot: string;
  desktop?: boolean;
  name: string;
  tagline: string;
  platforms: string;
}) {
  const [iconData, shotData] = await Promise.all([ogAsset(icon), ogAsset(shot)]);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", ...(desktop && { gap: 64 }), padding: "0 96px", background: "#f5f5f7", overflow: "hidden" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 28, ...(desktop ? { width: 440, flex: "none" } : { flex: 1 }) }}>
          <img src={iconData} width={128} height={128} style={{ borderRadius: 29, boxShadow: "0 4px 16px rgb(0 0 0 / 0.12)" }} />
          <div style={{ fontSize: 80, lineHeight: 1, letterSpacing: -2, color: "#000000" }}>{`${name}.`}</div>
          <div style={{ fontSize: 44, lineHeight: 1.15, color: "#6e6e73" }}>{tagline}</div>
          <div style={{ fontSize: 28, color: "#6e6e73" }}>{platforms}</div>
        </div>
        {desktop ? (
          <img src={shotData} width={800} height={567} style={{ marginTop: 200, borderRadius: 16, boxShadow: "0 8px 32px rgb(0 0 0 / 0.16)" }} />
        ) : (
          <img src={shotData} width={368} height={800} style={{ marginTop: 260, borderRadius: 48 }} />
        )}
      </div>
    ),
    size,
  );
}
