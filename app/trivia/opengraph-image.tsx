import { size } from "../_og/og";
import { productImage } from "../_og/product-image";

export { size };
export const contentType = "image/png";
export const dynamic = "force-static";
export const alt = "Bahá'í Daily Trivia, a daily trivia game, with a question answered and the passage it comes from.";

export default function Image() {
  return productImage({
    icon: "trivia-icon.svg",
    shot: "trivia-answered.png",
    desktop: true,
    name: "Trivia",
    tagline: "Five new questions every day.",
    platforms: "A daily Bahá'í trivia game",
  });
}
