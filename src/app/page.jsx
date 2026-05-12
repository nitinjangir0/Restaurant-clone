import React from 'react'
import Hero from "@/components/Hero";
import { getRecipes } from '@/lib/api';
import RecipeCard from '@/components/RecipeCard';

export default async function page() {
  const recipes = await getRecipes();
  const topRecipes = recipes.slice(0, 4);
    const HealthyRecipes = recipes.slice(4, 8);
  console.log(recipes)
  
  return (
   <>
   <Hero />
   <div className=' max-w-7xl p-4 mx-auto md:grid-cols-2 lg:grid-cols-4 gap-6'>
    <h2 className='font-bold text-4xl text-black my-4'>Top Recipes </h2>
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
       {
      topRecipes.map((data) => (
        <RecipeCard key={data.id} recipe={data} />
      ))
    }

    </div>
   
   </div>
   <div className=' max-w-7xl p-4 mx-auto md:grid-cols-2 lg:grid-cols-4 gap-6'>
    <h2 className='font-bold text-4xl text-black my-4'>Healthy Recipes </h2>
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
       {
      HealthyRecipes.map((data) => (
        <RecipeCard key={data.id} recipe={data} />
      ))
    }
    </div>
   </div>
   </>
  )
}
