import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export default function SpringDemo() {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();

  const scale = spring({
    fps: videoConfig.fps,
    frame,
    durationInFrames: 90, // 3 sec
    from: 1,
    to: 2,
    config: {
      stiffness: 300,
    }
  });

  return (
    <AbsoluteFill style={{ backgroundColor: 'white' }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}>
        <div
          // Ball
          style={{
            backgroundColor: "#338247",
            height: "150px",
            width: "150px",
            borderRadius: "50%",
            transform: `scale(${scale})`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "50px"
          }}>
          {scale.toFixed(2)}
        </div>
      </div>
    </AbsoluteFill>
  )
}
