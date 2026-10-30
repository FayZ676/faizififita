import { size } from "../_og/og";
import { productImage } from "../_og/product-image";

export { size };
export const contentType = "image/png";
export const dynamic = "force-static";
export const alt = "Verses, an app for learning Bahá'í prayers by heart, on iPhone while a prayer is recited.";

export default function Image() {
  return productImage({
    icon: "verses-icon.png",
    shot: "verses-recite.png",
    name: "Verses",
    tagline: "Learn prayers by heart.",
    platforms: "Memorization app for iPhone and iPad",
  });
}
