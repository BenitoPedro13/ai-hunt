import heroBg from '@/../public/hero-bg.jpeg';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Image
        src={heroBg}
        alt="hero background image"
        style={{
          pointerEvents: "none",
          userSelect: "none",
          display: "block",
          width: "100%",
          height: "100%",
          borderRadius: "inherit",
          objectPosition: "center center",
          objectFit: "cover",
          imageRendering: "auto",
          minHeight: "512px",
        }}
        width={undefined}
        height="512"
      />
    </main>
  );
}
