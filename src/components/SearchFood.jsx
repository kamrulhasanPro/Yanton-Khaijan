"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SearchFood = () => {
  const { getSearch = "" } = useSearchParams();
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.search.value;

    router.push(`/foods?search=${encodeURIComponent(value)}`);
  };
  return (
    <form onSubmit={handleSearch} className="space-x-3">
      <input
        type="search"
        placeholder="Search Food..."
        name="search"
        defaultValue={getSearch}
        className="border-yellow-500 border focus-within:outline-yellow-400 focus-within:border-none transition py-2 px-3 rounded-lg"
      />
      <button className="bg-yellow-400 py-2 px-4 cursor-pointer rounded-sm">Search</button>
    </form>
  );
};

export default SearchFood;
