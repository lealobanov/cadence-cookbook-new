import { createNFTListing } from "./recipes/createNFTListing";
import { test1 } from "./recipes/test1";
import { test2 } from "./recipes/test2";
import { test3 } from "./recipes/test3";
import { test4 } from "./recipes/test4";

const recipes = [
    createNFTListing,
    test1,
    test2,
    test3,
    test4
];

export async function getAllRecipes() {
  return recipes;
}

export async function getSingleRecipe(slug) {
  return recipes.filter((i) => i.slug === slug)[0];
}

export async function getRelatedRecipes(slug) {
  // Implement a filter based on recipe tags or module
  return recipes;
}
