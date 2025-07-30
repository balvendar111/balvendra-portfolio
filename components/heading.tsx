export default function Heading({ title }: { title: string }) {
  return (
    <h2 className="text-5xl font-bold font-serif tracking-wide leading-snug mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-lg">
      {title}
    </h2>
  );
}
