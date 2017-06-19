import { UPDATE_SONG_STATUS } from '../constants';
import { actionsCreator } from '../utils';

const updateSongState = actionsCreator(UPDATE_SONG_STATUS, 'status');

export default updateSongState;