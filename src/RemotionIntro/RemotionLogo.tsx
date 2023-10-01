import { staticFile, Img, useCurrentFrame, interpolate } from 'remotion'

export default function RemotionLogo() {
  const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);
  return (
    <Img style={{
      height: "80%",
      position: "absolute",
      left: "50%",
      transform: "translate(-50%)",
      opacity,
    }} src={staticFile("remotion-logo.png")} />
  )
}
