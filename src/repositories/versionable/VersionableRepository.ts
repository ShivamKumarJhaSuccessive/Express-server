import * as mongoose from 'mongoose';
import { Document, Model, Query, EnforceDocument, UpdateWriteOpResult } from 'mongoose';
import { DeleteResult } from 'mongodb';
export default class VersionableRepository<D extends Document, M extends Model<D>> {

  public static createObjectId() {
    return String(new mongoose.Types.ObjectId());
  }

  private model: M;
  constructor(model: any) {
    this.model = model;
  }

  protected findOne(query: any): Query<EnforceDocument<D, {}>, EnforceDocument<D, {}>, {},  D> {
    const finalQuery = { deletedAt: undefined, ...query };
    return this.model.findOne(finalQuery).lean();
  }

  protected find(query: any = {}, projection: any = {}, options: any = {}): Query<EnforceDocument<D, {}>[], EnforceDocument<D, {}>> {
    const finalQuery = { deletedAt: undefined, ...query };
    return this.model.find(finalQuery, projection, options);
  }

  public count(query: any = {}): Query<number, EnforceDocument<D, {}>> {
    const finalQuery = { deletedAt: undefined, ...query };
    return this.model.countDocuments(finalQuery);
  }

  public async create(options: any): Promise<D> {
    const id = VersionableRepository.createObjectId();
    const model = new this.model({
      ...options,
      _id: id,
      originalId: id
    });
    return await model.save();
  }

  softDelete(id: string): Query<UpdateWriteOpResult, EnforceDocument<D, {}>, {}, D> {
  const oldData: object = { originalId: id, deleteAt: undefined };
  const newData: object = { deletedAt: Date.now() };
    return this.model.updateOne(oldData, newData);
  }

  hardDelete(id: string): Query<DeleteResult, EnforceDocument<D, {}>, {}, D> {
    const ogId: object = { originalId: id };
    return this.model.deleteOne(ogId);
  }

  protected async update(data: any): Promise<D> {
    const prevRecord = await this.find({ originalId: data.originalId });
    if (prevRecord) {
      this.softDelete(data.originalId);
    }
    else {
      return undefined;
    }
    const newData = { ...prevRecord, ...data };
    newData._id = VersionableRepository.createObjectId();
    delete newData.deletedAt;
    const model = new this.model(newData);
    return model.save();
  }
}