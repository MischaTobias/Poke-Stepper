import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const PokeStepper = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <h1>Información de Pokémon</h1>
      <hr />

      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={counter}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.back_default,
            data.sprites.front_shiny,
            data.sprites.back_shiny,
          ]}
        />
      )}

      <button
        onClick={() => (counter > 1 ? decrement() : null)}
        className="btn btn-primary"
      >
        Anterior
      </button>
      <button onClick={() => increment()} className="btn btn-primary">
        Siguiente
      </button>
      {/* <button onClick={reset} className="btn btn-primary">
        Reset
      </button> */}
    </>
  );
};
