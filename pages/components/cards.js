export default function CardImages() {
  const cardImage = "/demo-ss.png";
  return (
    <>
      <meta property="og:url" content={cardImage} />
      <meta property="og:image" content={cardImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@raufsamestone" />
      <meta name="twitter:title" content="React QR Code Generator" />
      <meta name="twitter:description" content="Basic React QR Code Generator using Google Chart API, NextJS and Tailwind CSS" />
      <meta name="twitter:image" content={cardImage} />
    </>
  );
}
