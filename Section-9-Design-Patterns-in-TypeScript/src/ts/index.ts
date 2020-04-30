import {User, redColour} from './User';
import {Company} from "./Company";
import {CustomMap} from './CustomMap';

const user: User = new User();

const customMap: CustomMap = new CustomMap("map");
customMap.addUserMarker(user);

