import TagMeme from "./components/TagMeme";
import RandomMeme from "./components/RandomMeme";

export default function App() {
  return(
    <div className="w-full h-screen flex flex-col background overflow-x-hidden items-center">
      <h1 className="bg-white rounded-md w-11/12 text-center mt-[40px] py-2 text-2xl uppercase font-bold">random gifs</h1>
      <RandomMeme/>
      <TagMeme/>
    </div>
  );
}
