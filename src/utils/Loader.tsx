import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loader = () => {
  return (
    <SkeletonTheme baseColor="#c0c0c0" highlightColor="#f5f5f5">
      <Skeleton height={200} width={150} />
    </SkeletonTheme>
  );
};

export default Loader;
