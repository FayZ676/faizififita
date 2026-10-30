import { ImageResponse } from "next/og";
import { ogAsset, size } from "./og";
import { formatDate, type Post } from "../blog/posts";

// The link preview every blog post shares: the post's title and what it's about, beside the app's icon and a
// screenshot of it, with the phone running off the bottom edge the way the product previews do
export async function postImage({ post, icon, shot, about }: { post: Post; icon: string; shot: string; about: string }) {
  const [iconData, shotData] = await Promise.all([ogAsset(icon), ogAsset(shot)]);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", padding: "0 96px", background: "#f5f5f7", overflow: "hidden" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 28, flex: 1, paddingRight: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <img src={iconData} width={72} height={72} style={{ borderRadius: 16, boxShadow: "0 4px 16px rgb(0 0 0 / 0.12)" }} />
            <div style={{ fontSize: 28, color: "#6e6e73" }}>{`Faizi Fifita · ${formatDate(post.date)}`}</div>
          </div>
          <div style={{ fontSize: 76, lineHeight: 1.02, letterSpacing: -2.5, color: "#000000" }}>{post.title}</div>
          <div style={{ fontSize: 30, lineHeight: 1.3, color: "#6e6e73" }}>{about}</div>
        </div>
        <img src={shotData} width={368} height={800} style={{ marginTop: 260, borderRadius: 48 }} />
      </div>
    ),
    size,
  );
}
