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
      <h1>Pokemon Information</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "2OOpx",
          width: "100%",
        }}
      >
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

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <button
            onClick={() => (counter > 1 ? decrement() : null)}
            className="btn btn-primary"
            style={{ flexGrow: 1, flexBasis: "0", minWidth: "0" }}
          >
            Previous
          </button>
          <button
            onClick={() => increment()}
            className="btn btn-primary"
            style={{ flexGrow: 1, flexBasis: "0", minWidth: "0" }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
