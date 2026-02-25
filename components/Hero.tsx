import Image from "next/image";

export default function Hero() {
  return (
    <div className="mb-8">
      <Image
        src="/logo.png"
        alt="Kira Logo"
        width={120}
        height={120}
        className="mx-auto mb-4 rounded-full shadow-lg"
      />

      <h1 className="text-3xl font-bold text-gray-800">
        KiraDecorations
      </h1>

      <p className="text-gray-600 mt-2">
        ✨ Creative designs for your space! <br />
        Let’s make it beautiful together ✨
      </p>
    </div>
  );
}