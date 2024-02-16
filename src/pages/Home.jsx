import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Navbar from "../components/layouts/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../store/slice/pokemonSlice";
import { motion } from "framer-motion";

export default function Home() {
  // Redux
  const dispatch = useDispatch();
  const { pokemonData, loading, pokemonError } = useSelector(
    (state) => state.pokemon
  );

  // Local State
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    dispatch(getAllPokemons("abcdss"));
  }, []);

  useEffect(() => {
    if (pokemonData) setCardData(pokemonData.results);
  }, [pokemonData]);

  return (
    <main className="flex flex-col gap-5">
      <Navbar title="Pokemon List" />
      {!loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mx-10">
          {cardData && cardData.length > 0
            ? cardData.map((data, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.3 }}
                    key={data.name}
                  >
                    <Card data={data} />
                  </motion.div>
                );
              })
            : null}
        </div>
      ) : (
        "loading"
      )}
    </main>
  );
}
