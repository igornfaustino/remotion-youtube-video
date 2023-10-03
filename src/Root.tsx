import { Composition } from 'remotion';
import { IntroSchema, RemotionIntro } from './RemotionIntro/Intro';
import SpringDemo from './SpringDemo/SpringDemo';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
				id="intro"
				component={RemotionIntro}
				durationInFrames={240}
				fps={30}
				width={1920}
				height={1080}
				// You can override these props for each render:
				// https://www.remotion.dev/docs/parametrized-rendering
				schema={IntroSchema}
				defaultProps={{
					titleText: 'É... eu programei esse video com javascript',
					titleColor: '#000000',
				}}
			/>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
				id="spring-demo"
				component={SpringDemo}
				durationInFrames={90}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
