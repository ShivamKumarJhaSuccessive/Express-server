import { traineeModel } from './TraineeModel';
import ITraineeModel from './ITraineeModel';
import VersionableRepository from '../versionable/VersionableRepository';
import { Query, Model, UpdateQuery } from 'mongoose';

export default class TraineeRepository extends VersionableRepository<ITraineeModel, Model<ITraineeModel>> {

    constructor() {
      super(traineeModel);
    }
  
    public findSingle(query: any): Query<ITraineeModel, ITraineeModel, {}> {
      return super.findOne(query).lean();
    }
  
    public findAll(query: any, projection?: any, options?: any): Query<ITraineeModel[], ITraineeModel> {
      return super.find(query, projection, options);
    }
  
    public countDoc(query: any = {}): Query<number, ITraineeModel> {
      return super.count(query);
    }
  
    public createDoc(data: any): Promise<ITraineeModel> {
      return super.create(data);
    }
  
    public updateDoc(data: any): Promise<ITraineeModel> {
      return super.update(data);
    }
  
    public deleteDoc(data: any): UpdateQuery<ITraineeModel> {
      return super.softDelete(data.originalId);
    }
  }