import { size } from "../../_og/og";
import { postImage } from "../../_og/post-image";
import { post } from "../posts";

export { size };
export const contentType = "image/png";
export const dynamic = "force-static";
export const alt =
  "Three words can be enough: an interview about Bahá'í Daily Trivia, beside a question answered with the passage it comes from.";

export default function Image() {
  return postImage({
    post: post("trivia"),
    icon: "trivia-icon.svg",
    shot: "trivia-answered.png",
    desktop: true,
    about: "Bahá'í Daily Trivia, one week in. An interview, written by Claude.",
  });
}
