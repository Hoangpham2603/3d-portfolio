import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load">
        <p
          style={{
            fontSize: 20,
            color: `#f1f1f1`,
            fontWeight: 800,
            marginTop: 40,
          }}
        >
          {progress.toFixed(0)}%
        </p>
      </span>
    </Html>
  );
};

export default Loader;
