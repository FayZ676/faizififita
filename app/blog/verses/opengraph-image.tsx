import { size } from "../../_og/og";
import { postImage } from "../../_og/post-image";
import { post } from "../posts";

export { size };
export const contentType = "image/png";
export const dynamic = "force-static";
export const alt = "The Verses I meant to build: an interview about Verses, beside Verses on iPhone while a prayer is recited.";

export default function Image() {
  return postImage({
    post: post("verses"),
    icon: "verses-icon.png",
    shot: "verses-recite.png",
    about: "How Verses learned to listen. An interview, written by Claude.",
  });
}
