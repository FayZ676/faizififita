import { size } from "../_og/og";
import { productImage } from "../_og/product-image";

export { size };
export const contentType = "image/png";
export const dynamic = "force-static";
export const alt = "Quill, a minimal Markdown editor, on iPhone in focus mode.";

export default function Image() {
  return productImage({
    icon: "quill-icon.png",
    shot: "iphone-focus.png",
    name: "Quill",
    tagline: "A quiet place to write.",
    platforms: "Markdown editor for Mac, iPhone and iPad",
  });
}
