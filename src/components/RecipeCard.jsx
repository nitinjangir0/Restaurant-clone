import Link from "next/link";
import { FaClock, FaStar, FaFire } from "react-icons/fa";
import Image from "next/image";

export default function RecipeCard({ recipe }) {
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      
      {/* Image */}
      <Link href={`/recipes/${recipe.id}`}>
        <Image
          src={recipe.image}
          width={200}
          height={200}
          alt={recipe.name}
          className="w-full h-56 object-cover hover:scale-105 transition duration-500"
        />
      </Link>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-3 text-gray-800">
          <Link
            href={`/recipes/${recipe.id}`}
            className="hover:text-red-500 transition"
          >
            {recipe.name}
          </Link>
        </h2>

        {/* Info */}
        <div className="flex justify-between text-sm mb-4">
          
          {/* Time */}
          <span className="flex items-center gap-2 bg-red-100 text-red-600 px-3 py-1 rounded-full font-medium">
            <FaClock />
            {recipe.servings} Servings
          </span>

          {/* Rating */}
          <span className="flex items-center gap-2 bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full font-medium">
            <FaStar />
            {recipe.rating}
          </span>

          {/* Calories */}
          <span className="flex items-center gap-2 bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium">
            <FaFire />
            {recipe.caloriesPerServing}
          </span>
        </div>

        {/* Button */}
        <Link
          href={`/recipes/${recipe.id}`}
          className="block text-center bg-red-500 hover:bg-red-600 transition duration-300 text-white py-2 rounded-lg font-semibold"
        >
          View Recipe
        </Link>
      </div>
    </article>
  );
}