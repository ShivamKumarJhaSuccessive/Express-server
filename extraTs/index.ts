import { diamond, equilateral } from './patterns';
import { hasPermission } from './utils';
import { users } from './constant';
import validateUsers from './utils/validation';

console.log('----------------------Patterns----------------------');
// Prints Diamond Pattern
diamond(10);
console.log();

// Prints Equilateral Triangle Pattern
equilateral(10);
console.log();


console.log('----------------------Users----------------------');

// Validates the Users
validateUsers(users);
console.log();

console.log('----------------------Permissions----------------------');
// Prints if Users have the Permissions
console.log(hasPermission('getUsers', 'head-trainer', 'all'));
console.log(hasPermission('getUsers', 'trainee', 'write'));
console.log(hasPermission('getUsers', 'trainer', 'delete'));
