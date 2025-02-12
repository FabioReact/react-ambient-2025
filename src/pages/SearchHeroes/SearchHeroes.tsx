
// intelligence, combat, durability, power, speed, strength,

const apiCall = () => {
    new URLSearchParams({
        'powerstats.intelligence_gte': '50'
    })
}

const SearchHeroes = () => {
  return (
    <section>
        <h1>Search Heroes</h1>
        {/* Un formulaire ou je peux chercher un hero par son nom, ou par ses statistiques */}
    </section>
  )
}

export default SearchHeroes