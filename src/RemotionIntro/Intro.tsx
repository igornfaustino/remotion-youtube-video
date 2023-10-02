import { zColor } from '@remotion/zod-types';
import {
	AbsoluteFill,
	interpolate,
	Sequence, useCurrentFrame
} from 'remotion';
import { z } from 'zod';
import RemotionLogo from './RemotionLogo';
import { Subtitle } from './Subtitle';
import { Title } from './Title';

export const IntroSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	logoColor1: zColor(),
	logoColor2: zColor(),
});

export const RemotionIntro: React.FC<z.infer<typeof IntroSchema>> = ({
	titleText: propOne,
	titleColor: propTwo,
}) => {
	const frame = useCurrentFrame();

	// Fade out the animation at the end
	const outTransition = interpolate(
		frame,
		[125 - 25, 125 - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<AbsoluteFill style={{ backgroundColor: 'white' }}>
			<Sequence durationInFrames={125}>
				<AbsoluteFill style={{ opacity: outTransition }}>
					<Title titleText={propOne} titleColor={propTwo} />
				</AbsoluteFill>
			</Sequence>
			<Sequence from={125}>
				<AbsoluteFill>
					<Subtitle />
				</AbsoluteFill>
			</Sequence>
			<Sequence from={160}>
				<RemotionLogo />
			</Sequence>
		</AbsoluteFill>
	);
};
