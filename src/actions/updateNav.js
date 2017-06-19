import { UPDATE_NAV } from '../constants';
import { actionsCreator } from '../utils';

const updateNav = actionsCreator(UPDATE_NAV, 'active');

export default updateNav;