import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Bienvenue sur NormaFix</h1>
      <p className="mb-6">
        NormaFix est une application éducative pour comprendre et transformer une table en 1FN, 2FN et au-delà.
      </p>
      <div className="flex gap-4">
        <Link href="/input" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Saisir Table</Link>
        <Link href="/normalize" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Normaliser</Link>
        <Link href="/explanation" className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">Explications</Link>
      </div>
    </div>
  );
}