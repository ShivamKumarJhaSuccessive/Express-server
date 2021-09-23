
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersionableRepository from '../versionable/VersionableRepository';
import { Query, Model, UpdateQuery } from 'mongoose';

export default class UserRepository extends VersionableRepository<IUserModel, Model<IUserModel>> {

    constructor() {
      super(userModel);
    }
  
    public findSingle(query: any): Query<IUserModel, IUserModel, {}> {
      return super.findOne(query).lean();
    }
  
    public findAll(query: any, projection?: any, options?: any): Query<IUserModel[], IUserModel> {
      return super.find(query, projection, options);
    }
  
    public countDoc(query: any = {}): Query<number, IUserModel> {
      return super.count(query);
    }
  
    public createDoc(data: any): Promise<IUserModel> {
      return super.create(data);
    }
  
    public updateDoc(data: any): Promise<IUserModel> {
      return super.update(data);
    }
  
    public deleteDoc(data: any): UpdateQuery<IUserModel> {
      return super.softDelete(data.originalId);
    }
  }