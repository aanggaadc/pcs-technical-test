import SliderComp from "../slider";
import NewsCard from "./news-card";

export default function News() {
  return (
    <div className="py-2">
      <h2 className="mb-3 text-sm font-semibold px-4">PCS News</h2>
      <SliderComp>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </SliderComp>
    </div>
  );
}
