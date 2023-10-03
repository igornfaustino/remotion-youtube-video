
import { zColor } from '@remotion/zod-types';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { z } from 'zod';
import { PulseTitle } from './PulseText';

export const EndingSchema = z.object({
  text: z.string(),
  color: zColor(),
});

export const Ending: React.FC<z.infer<typeof EndingSchema>> = ({
  text,
  color,
}) => {
  const frame = useCurrentFrame();
  const intoTransition = interpolate(
    frame,
    [0, 15],
    [0, 1],
  );

  return (
    <AbsoluteFill style={{ backgroundColor: 'white' }}>
      <AbsoluteFill style={{ opacity: intoTransition }}>
        <PulseTitle text={text} color={color} />
      </AbsoluteFill>
    </AbsoluteFill>
  )
}
