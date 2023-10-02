import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { FONT_FAMILY } from './constants';

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

export const Title: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({ titleText, titleColor }) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const words = titleText.split(' ');
	const delayOffset = 10;

	return (
		<h1 style={title}>
			{words.map((t, i) => {
				const delay = i * delayOffset;

				const scale = spring({
					fps: videoConfig.fps,
					frame: frame - delay,
					config: {
						damping: 200,
					},
				});

				return (
					<span
						key={t}
						style={{
							...word,
							color: titleColor,
							transform: `scale(${scale})`,
						}}
					>
						{t}
					</span>
				);
			})}
		</h1>
	);
};
