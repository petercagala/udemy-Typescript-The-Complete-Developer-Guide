import {Vehicle} from './Vehicle';
import {Car} from './Car';

const vehicle: Vehicle = new Car('orange');
vehicle.drive();

// we don's see this method as it's private
// vehicle.honk();
vehicle.startDrivingProcess();
