import { getAllRecipes } from 'src/data/recipes';
import { PostListHomeView } from 'src/sections/blog/view';

export const metadata = {
  title: 'Cadence Cookbook | Home',
};

export default async function HomePage() {
  const recipes = await getAllRecipes();

  return <PostListHomeView recipes={recipes} />;
}
