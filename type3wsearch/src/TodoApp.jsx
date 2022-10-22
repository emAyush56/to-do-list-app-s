import { useState, useEffect, useRef } from "react";
import React from "react";
import "./TodoApp.css";

export default function TodoApp() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    const newItemValue = inputRef.current.value;
    if (newItemValue === "") return;
    setItems((prev) => [...prev, newItemValue]);
    inputRef.current.value = ""; // why newItemValue is not working?
  }

  const filteredItems = items.filter((item) => {
    return item.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      <div className="m-4 w-[800px] gap-10 rounded-xl border border-gray-100 px-9 py-12">
        <div className="flex w-full gap-12">
          <div className="add-item w-full">
            <form onSubmit={onSubmit}>
              <label
                htmlFor="list-item-master"
                className="mb-4 block text-2xl font-medium text-gray-700"
              >
                Add Something
              </label>
              <div className="flex gap-3">
                <div className="mt-3 w-full rounded-xl shadow-sm">
                  <input
                    type="text"
                    name="list-item-master"
                    id="list-item-master"
                    ref={inputRef}
                    className="w-full rounded-xl border-gray-200 pl-3 pr-12 focus:border-fuchsia-600 focus:ring-fuchsia-600 sm:text-lg"
                    placeholder="Add to the list"
                  />
                </div>
                <div className="mt-3">
                  <button
                    type="submit"
                    className=" inline-flex w-full items-center 
                            rounded-xl border border-transparent
                            bg-fuchsia-600 
                            px-4 py-2 
                            text-lg font-medium text-white 
                            shadow-sm
                            transition-all 
                            hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-600
                            focus:ring-offset-2"
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="search-item w-full">
            <label
              htmlFor="search-item-master"
              className="mb-4 block text-2xl font-medium text-gray-700"
            >
              Search
            </label>
            <div className="flex gap-3">
              <div className="mt-3 w-full rounded-xl shadow-sm">
                <input
                  type="text"
                  name="search-item-master"
                  id="search-item-master"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full rounded-xl border-gray-200 pl-3 pr-12 focus:border-lime-600 focus:ring-lime-600 sm:text-lg"
                  placeholder="Search in the list"
                />
              </div>
              <div className="mt-3">
                <button
                  className=" inline-flex w-full items-center 
                            rounded-xl border border-transparent
                            bg-lime-600 
                            px-4 py-2 
                            text-lg font-medium text-white 
                            shadow-sm
                            transition-all 
                            hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-600
                            focus:ring-offset-2"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="list  mt-6 w-full">
          {filteredItems.map((item) => {
            return (
              <h4 className="border-b border-gray-200 py-5 text-xl text-gray-700">
                {item}
              </h4>
            );
          })}
        </div>
      </div>

      <footer className="my-12 text-center text-sm font-medium tracking-wider text-gray-400">
        <a
          href="https://ayushsaha.me"
          target="_blank"
          className="hover:text-lime-700"
        >
          ayushsaha.me
        </a>
      </footer>
    </>
  );
}
