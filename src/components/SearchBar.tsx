import { useState } from "react";
import arrowIcon from "../assets/images/icon-arrow.svg";

interface Props {
  onSearch: (value: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSearch(input);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 md:mt-8 flex w-full max-w-xl mx-auto"
    >
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="
          w-full
          px-4 py-3
          md:px-6 md:py-4
          rounded-l-xl
          md:rounded-l-2xl
          text-base
          md:text-lg
          focus:outline-none
          placeholder:text-gray-400
        "
      />

      <button
        type="submit"
        className="
          bg-black
          px-5
          md:px-6
          rounded-r-xl
          md:rounded-r-2xl
          hover:bg-gray-800
          active:bg-gray-900
          transition
          flex
          items-center
          justify-center
        "
        aria-label="Search"
      >
        <img src={arrowIcon} alt="" className="w-3 h-3" />
      </button>
    </form>
  );
};

export default SearchBar;
