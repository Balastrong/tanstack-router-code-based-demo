import { getRouteApi } from "@tanstack/react-router";

const routeApi = getRouteApi("/$pokemonId");

export function PokemonDetail() {
  const { pokemonId } = routeApi.useParams();
  const pokemon = routeApi.useLoaderData();

  return (
    <div>
      <h2 className="text-lg">
        ({pokemonId}) {pokemon.name}
      </h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div>
        <div>
          Height: <span className="font-bold">{pokemon.height}</span>
        </div>
        <div>
          Weight: <span className="font-bold">{pokemon.weight}</span>
        </div>
      </div>
    </div>
  );
}
