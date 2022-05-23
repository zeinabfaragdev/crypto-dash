import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setFilteredCoins } from "../redux/coins/coinsActions";
import { color2, fontSize2 } from "../Shared/Styles";
import _ from "lodash";
import fuzzy from "fuzzy";

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;
const SearchInput = styled.input`
  background-color: ${color2};
  color: #1163c9;
  ${fontSize2};
  border: 1px solid;
  height: 25px;
  place-self: center left;
`;

const filterCoins = _.debounce((e, coins, dispatchFilteredCoins) => {
  let searchTerm = e.target.value;
  let coinSymbols = Object.keys(coins);
  let coinNames = coinSymbols.map((sym) => coins[sym].CoinName);
  let combinedSearch = [...coinSymbols, ...coinNames];
  let fuzzyResults = fuzzy
    .filter(searchTerm, combinedSearch)
    .map((res) => res.string);

  let filteredCoins = _.pickBy(coins, (result, symKey) => {
    let coinName = result.CoinName;
    return (
      _.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName)
    );
  });

  !searchTerm
    ? dispatchFilteredCoins(null)
    : dispatchFilteredCoins(filteredCoins);
}, 500);

const Search = () => {
  const coins = useSelector((state) => state.coins.list);
  const dispatch = useDispatch();

  const dispatchFilteredCoins = (coins) => {
    dispatch(setFilteredCoins(coins));
  };

  return (
    <SearchGrid>
      <h2>Search all coins</h2>
      <SearchInput
        onChange={(e) => filterCoins(e, coins, dispatchFilteredCoins)}
      />
    </SearchGrid>
  );
};

export default Search;
