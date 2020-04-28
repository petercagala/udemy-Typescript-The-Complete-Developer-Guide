import {Vehicle} from './Vehicle';
import {Car} from './Car';

const vehicle: Car = new Car();
vehicle.drive();

// we don's see this method as it's private
// vehicle.honk();
vehicle.start();
