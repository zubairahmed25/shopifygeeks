"use client";

import Link from "next/link";
import { InstagramIcon, LinkedInIcon, DiscordIcon } from "@/icons";

export default function FooterSocial() {
  return (
    <div className="flex flex-col gap-4 md:items-start items-center">
      <div className="flex items-center gap-4">
        <Link
          href="https://www.linkedin.com/company/shopifygeeks"
          className="flex items-center justify-center rounded-full border border-solid border-[#5A5A5A]  h-12 w-12 p-2"
        >
          <LinkedInIcon />
        </Link>
        <Link
          href="https://www.instagram.com/shopify_geeks"
          className="flex items-center justify-center rounded-full border border-solid border-[#5A5A5A]  h-12 w-12 p-2"
        >
          <InstagramIcon />
        </Link>

      </div>
      <p className="text-white font-clashExtralight">
        © {new Date().getFullYear()} ShopifyGeeks. All Rights Reserved.
      </p>
    </div>
  );
}
