import { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

const CatchAll = () => {
  notFound();
};
export default CatchAll;
