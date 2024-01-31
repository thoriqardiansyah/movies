import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DetailLoader = () => {
  return (
    <SkeletonTheme baseColor="#c0c0c0" highlightColor="#f5f5f5">
      <div className="flex gap-5 w-full mx-8">
        <Skeleton height={200} width={150} />
        <div>
          <Skeleton height={20} width={500} className="mb-4" />
          <div>
            <Skeleton count={5} width={900} className="my-2" />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default DetailLoader;
