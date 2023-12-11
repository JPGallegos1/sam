import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image alt="SAM Sistemas logo" height={50} src="/logo.webp" width={120} />
    </Link>
  );
}
