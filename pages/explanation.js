export default function Explanation() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Explication des Formes Normales</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">1FN - Première Forme Normale</h3>
        <p>Chaque colonne doit contenir une seule valeur (atomique), sans groupes répétitifs.</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">2FN - Deuxième Forme Normale</h3>
        <p>Élimine les dépendances partielles : chaque colonne non-clé dépend de toute la clé primaire.</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">3FN - Troisième Forme Normale</h3>
        <p>Supprime les dépendances transitives entre attributs non-clés.</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">BCNF - Boyce-Codd Normal Form</h3>
        <p>Toutes les dépendances fonctionnelles doivent porter sur une super-clé.</p>
      </div>
    </div>
  );
}