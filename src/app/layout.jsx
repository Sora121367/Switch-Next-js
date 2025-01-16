import { CartProvider } from "@/components/context/CartContext";
import "./globals.css"; // Import your global CSS
import "./globals.css"; // Import global styles

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children} {/* The rest of your app */}
        </CartProvider>
      </body>
    </html>
  );
}
