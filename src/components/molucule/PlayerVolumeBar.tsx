import { View, ViewProps } from 'react-native'
import { Slider } from 'react-native-awesome-slider'
import { useSharedValue } from 'react-native-reanimated'
import { useTrackPlayerVolume } from '../../constants/useTrackPlayerVolume'
import Icon from '../atoms/Icon'
import { COLORS } from '../../constants'

export const PlayerVolumeBar = ({ style }: ViewProps) => {
	const { volume, updateVolume } = useTrackPlayerVolume()

	const progress = useSharedValue(0)
	const min = useSharedValue(0)
	const max = useSharedValue(1)

	progress.value = volume ?? 0

	return (
		<View style={style}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Icon vector="Ionicons" name="volume-low" size={20} color={COLORS.WHITE} style={{ opacity: 0.8 }} />

				<View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 10 }}>
					<Slider
						progress={progress}
						minimumValue={min}
						containerStyle={{
							height: 7,
							borderRadius: 16,
						}}
						onValueChange={(value) => {
							updateVolume(value)
						}}
						renderBubble={() => null}
						theme={{
							maximumTrackTintColor: 'rgba(255,255,255,0.4)',
							minimumTrackTintColor: 'rgba(255,255,255,0.6)',
						}}
						thumbWidth={0}
						maximumValue={max}
					/>
				</View>

				<Icon vector='Ionicons' name="volume-high" size={20} color={COLORS.WHITE} style={{ opacity: 0.8 }} />
			</View>
		</View>
	)
}
