import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import { getPokemonByName } from "../../store/slice/pokemonSlice";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Card({ data }) {
  // Redux
  const dispatch = useDispatch();

  // Local State
  const [pokemonData, setPokemonData] = useState({});
  const isCalled = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isCalled.current) return;
    if (data) {
      dispatch(getPokemonByName(data.name)).then((res) => {
        setPokemonData(res.payload);
      });
    }
    isCalled.current = true;
  }, [data]);

  const handleNavigateToEdit = () => {
    navigate("/detail", {
      state: pokemonData,
    });
  };

  return (
    <button
      onClick={handleNavigateToEdit}
      className="flex flex-col gap-3 p-4 border-2 border-secondary-400 shadow-md rounded-md w-full hover:scale-105 duration-300"
    >
      {pokemonData ? (
        <div className="flex flex-col gap-2 w-full">
          <img
            src={pokemonData?.sprites?.front_default}
            alt={pokemonData?.name}
            height={240}
            width={240}
            className="flex place-self-center"
          />
          <h1 className="capitalize"> {pokemonData?.name} </h1>
        </div>
      ) : (
        "empty"
      )}
    </button>
  );
}
