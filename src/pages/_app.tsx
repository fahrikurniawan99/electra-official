import "@/styles/globals.css";
import cn from "@utils/cn";
import { PoppinsFont } from "@/utils/font";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div
        className={cn(
          PoppinsFont.className,
          "max-w-[420px] mx-auto w-full bg-white"
        )}
      >
        <Component {...pageProps} />
      </div>
    </div>
  );
}
