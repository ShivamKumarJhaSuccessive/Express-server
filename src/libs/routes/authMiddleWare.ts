import * as jwt from 'jsonwebtoken';
import  Configure  from '../../config/configuration';
import hasPermission from '../../../extraTs/utils/permissions';
import {userRepository} from '../seedData'

export default (module, permissionType) => async(req, res, next) => {
    debugger
    const token = req.header('Authorization');
    console.log(token);
    if (!token) {
        next({ error : 'Unauthorized', message : 'Token not found', status : 403});
    }
    const { secret } = Configure;
    console.log(secret);

    let user;
    try {
        
        user = jwt.verify(token, secret);
    }
    catch (err) {
        next({ error : 'Unauthorized', message : 'User not Authorized', status : 403});
    }
    console.log('User is', user);

    if (!user) {
        next({ error : 'Unauthorized', message : 'User not Authorized', status : 403});
    }

    const userData = await userRepository.findAll({ _id: user._id });

  if (!userData) {
      next({ error: 'Unauthorized', message: 'Permission Denied', status: 403 });
  }

    if (!hasPermission( module, user.role, permissionType )) {
        next({ error : 'Unauthorized', message : 'Permisssion Denied', status : 403});
    }
    req.user = user;
    next();
};