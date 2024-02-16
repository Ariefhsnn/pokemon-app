import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const getAllPokemons = createAsyncThunk(
  "pokemon/getAllPokemons",
  async (limit) => {
    try {
      const request = await axios.get(`${BASE_URL}`, {
        params: {
          limit: limit || 100,
        },
      });
      const result = request.data;
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getPokemonByName = createAsyncThunk(
  "pokemon/getPokemonByName",
  async (name) => {
    try {
      const request = await axios.get(`${BASE_URL}/${name}`);
      const result = request.data;
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemonLoading: false,
    loading: false,
    pokemonData: [],
    pokemon: {},
    pokemonError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPokemons.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemonData = action.payload;
      })
      .addCase(getAllPokemons.rejected, (state, action) => {
        state.loading = false;
        state.pokemonData = [];
        state.pokemonError = action.error;
      })
      .addCase(getPokemonByName.pending, (state) => {
        state.pokemonLoading = true;
      })
      .addCase(getPokemonByName.fulfilled, (state, action) => {
        state.pokemonLoading = false;
        state.pokemon = action.payload;
      })
      .addCase(getPokemonByName.rejected, (state, action) => {
        state.pokemonLoading = false;
        state.pokemon = {};
        state.pokemonError = action.error;
      });
  },
});

export default pokemonSlice.reducer;
