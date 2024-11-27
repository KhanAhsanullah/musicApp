import { MenuView } from '@react-native-menu/menu'
import { PropsWithChildren } from 'react'
import TrackPlayer, { Track } from 'react-native-track-player'
import { match } from 'ts-pattern'
import { MediaItem } from '../../redux/slice/Tops/TopsSlice'
import { COLORS } from '../../constants'
import { addFavourite, removeFavourite } from '../../redux/slice/Player/mediaPlayerSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'

type TrackShortcutsMenuProps = PropsWithChildren<{ track: MediaItem }>

export const TrackShortcutsMenu = ({ track, children }: TrackShortcutsMenuProps) => {
	const dispatch = useDispatch<AppDispatch>()
	const isFavorite = track.is_favorite

	const handlePressAction = (id: string) => {
		match(id)
			.with('add-to-favorites', async () => {
				dispatch(addFavourite({mediaId:track.id, type:'song'}))
			})
			.with('remove-from-favorites', async () => {
				dispatch(removeFavourite({mediaId:track.id, type:'song'}))
			})
			.with('add-to-playlist', () => {
				console.log("Add to playList");
			})
			.otherwise(() => console.warn(`Unknown menu action ${id}`))
	}

	return (
		<MenuView
			onPressAction={({ nativeEvent: { event } }) => handlePressAction(event)}
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
