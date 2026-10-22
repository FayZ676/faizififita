import { ImageResponse } from "next/og";
import { ogAsset, size } from "../_og/og";

export { size };
export const contentType = "image/png";
export const dynamic = "force-static";
export const alt = "/job's dashboard: companies found in the news that match your projects.";

export default async function Image() {
  const dashboard = await ogAsset("job-feed.png");

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", gap: 64, padding: "0 96px", background: "#f5f5f7", overflow: "hidden" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 28, width: 440, flex: "none" }}>
          <div style={{ fontSize: 80, lineHeight: 1, letterSpacing: -2, color: "#000000" }}>/job.</div>
          <div style={{ fontSize: 44, lineHeight: 1.15, color: "#6e6e73" }}>Automate your job search, for free.</div>
          <div style={{ fontSize: 28, color: "#6e6e73" }}>Runs on Claude Code</div>
        </div>
        {/* The dashboard runs off the bottom edge so its cards read at preview size */}
        <img src={dashboard} width={620} height={558} style={{ marginTop: 160, borderRadius: 16, boxShadow: "0 8px 32px rgb(0 0 0 / 0.16)" }} />
      </div>
    ),
    size,
  );
}
