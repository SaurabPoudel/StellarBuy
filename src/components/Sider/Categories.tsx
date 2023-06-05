"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Categories = string[];

async function getCategories() {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const data: Categories = await response.json();
  return data;
}
export default function Categories() {
  const [categories, setCategories] = useState<Categories>([]);
  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);
  return (
    <div className="relative border border-gray-400 rounded">
      <div className="absolute top-0 left-0 bg-gray-300 px-2 -mt-3 ml-2 text-gray-700 text-xs">
        Categories
      </div>

      {categories.map((category) => (
        <Link href={`/?search=${category}`} key={category}>
          <div className="my-2 text-gray-600  display-cotainer">{category}</div>
        </Link>
      ))}
    </div>
  );
}
