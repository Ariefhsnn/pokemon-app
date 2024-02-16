import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import { useEffect, useMemo, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { MdChevronLeft } from "react-icons/md";

export default function Detail() {
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const [pokemonImage, setPokemonImage] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  let location = useLocation();

  useEffect(() => {
    let pokemonImg = [];
    setPokemonDetail(location.state);
    Object.entries(location.state.sprites).forEach((data) => {
      if (typeof data[1] === "string") pokemonImg.push(data);
    });
    setPokemonImage(pokemonImg);
  }, [location]);

  const handleChangeForm = () => {
    if (currentIndex == pokemonImage.length - 1) return setCurrentIndex(1);
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <main className="flex flex-col gap-5 w-full">
      <Navbar title="Pokemon Detail" />
      <Link
        to="/home"
        className="flex items-center gap-2 mx-10 lg:mx-44 hover:shadow-lg w-32 rounded-md duration-300 border border-primary-500"
      >
        <MdChevronLeft className="h-10 w-10 text-primary-500" />
        <p className="text-lg"> Back </p>
      </Link>
      {pokemonDetail ? (
        <div className="flex flex-col lg:flex-row gap-5 border mx-10 lg:mx-44 border-secondary-100 rounded-md shadow-md p-10 justify-center md:justify-start">
          <button
            onClick={handleChangeForm}
            className="hover:scale-105 duration-300 lg:w-1/3 bg-secondary-100 rounded-md"
          >
            <img
              src={pokemonImage.length > 0 ? pokemonImage[currentIndex][1] : ""}
              alt={pokemonImage.length > 0 ? pokemonImage[currentIndex][0] : ""}
              className="w-[360px] object-cover mx-auto"
              loading="lazy"
            />
          </button>
          <div className="flex flex-col gap-3 lg:w-2/3">
            <h1 className="capitalize text-primary-400 font-semibold text-2xl">
              {pokemonDetail.name}
            </h1>
            <table>
              <tbody>
                <tr>
                  <td className="w-[40%]">Weight</td>
                  <td className="w-5">:</td>
                  <td>{pokemonDetail.weight}</td>
                </tr>
                <tr>
                  <td className="w-[40%]">Height</td>
                  <td className="w-5">:</td>
                  <td>{pokemonDetail.height}</td>
                </tr>
                <tr>
                  <td className="w-[40%]">Base Experience</td>
                  <td className="w-5">:</td>
                  <td>{pokemonDetail.base_experience}</td>
                </tr>
                <tr>
                  <td className="w-[40%]">Order</td>
                  <td className="w-5">:</td>
                  <td>{pokemonDetail.order}</td>
                </tr>
                <tr className="align-top">
                  <td className="w-[40%]">Stats</td>
                  <td className="w-5">:</td>
                  <td>
                    {pokemonDetail.stats.map((stat, index) => (
                      <div key={index} className="capitalize">
                        {stat.stat.name}, {stat.base_stat}
                      </div>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <AiOutlineLoading className="animate-spin text-primary-500" />
          <p> Loading ... </p>
        </div>
      )}
    </main>
  );
}
