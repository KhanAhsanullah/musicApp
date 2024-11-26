import { MenuView } from '@react-native-menu/menu'
import { PropsWithChildren } from 'react'
import TrackPlayer, { Track } from 'react-native-track-player'
import { match } from 'ts-pattern'
import { MediaItem } from '../../redux/slice/Tops/TopsSlice'
import { COLORS } from '../../constants'

type TrackShortcutsMenuProps = PropsWithChildren<{ track: MediaItem }>

export const TrackShortcutsMenu = ({ track, children }: TrackShortcutsMenuProps) => {
	// const router = useRouter()

	const isFavorite = track.is_favorite

	// const { toggleTrackFavorite } = useFavorites()
	// const { activeQueueId } = useQueue()

	// const handlePressAction = (id: string) => {
	// 	match(id)
	// 		.with('add-to-favorites', async () => {
	// 			toggleTrackFavorite(track)

	// 			// if the tracks is in the favorite queue, add it
	// 			if (activeQueueId?.startsWith('favorites')) {
	// 				await TrackPlayer.add(track)
	// 			}
	// 		})
	// 		.with('remove-from-favorites', async () => {
	// 			toggleTrackFavorite(track)

	// 			// if the track is in the favorites queue, we need to remove it
	// 			if (activeQueueId?.startsWith('favorites')) {
	// 				const queue = await TrackPlayer.getQueue()

	// 				const trackToRemove = queue.findIndex((queueTrack) => queueTrack.url === track.url)

	// 				await TrackPlayer.remove(trackToRemove)
	// 			}
	// 		})
	// 		.with('add-to-playlist', () => {
	// 			// it opens the addToPlaylist modal
	// 			// @ts-expect-error it should work
	// 			router.push({ pathname: '(modals)/addToPlaylist', params: { trackUrl: track.url } })
	// 		})
	// 		.otherwise(() => console.warn(`Unknown menu action ${id}`))
	// }

	return (
		<MenuView
			// onPressAction={({ nativeEvent: { event } }) => handlePressAction(event)}
			themeVariant='dark'
			actions={[
				{
					id: 'share',
					title: 'Share',
					image: 'star',
				},
				{
					id: isFavorite ? 'remove-from-favorites' : 'add-to-favorites',
					title: isFavorite ? 'Remove from favorites' : 'Add to favorites',
					image: isFavorite ? 'heart.fill' : 'heart',
					imageColor: isFavorite ? COLORS.PRIMARY : ''
				},
				{
					id: 'add-to-playlist',
					title: 'Add to playlist',
					image: 'plus',
				},
			]}
		>
			{children}
		</MenuView>
	)
}
