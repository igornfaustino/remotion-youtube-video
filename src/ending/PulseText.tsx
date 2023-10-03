import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { FONT_FAMILY } from '../RemotionIntro/constants';

const title: React.CSSProperties = {
  fontFamily: FONT_FAMILY,
  fontWeight: 'bold',
  fontSize: 100,
  textAlign: 'center',
  position: 'absolute',
  bottom: "50%",
  transform: "translatey(50%)",
  width: '100%',
  padding: 18
};

const word: React.CSSProperties = {
  marginLeft: 10,
  marginRight: 10,
  display: 'inline-block',
};

export const PulseTitle: React.FC<{
  text: string;
  color: string;
}> = ({ text, color }) => {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();


  const scale = spring({
    fps: videoConfig.fps,
    frame,
    config: {
      damping: 5,
      mass: 10,
    },
    from: 0.9,
    to: 1
  });

  return (
    <h1 style={title}>
      <span
        style={{
          ...word,
          color,
          transform: `scale(${scale})`,
        }}
      >
        {text}
      </span>
    </h1>
  );
};
