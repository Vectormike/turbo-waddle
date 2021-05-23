import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MetadataType } from './dto/create-metadata';
import { Metadata } from './interface/metada.interface';
import parseUrl from '../utils/parser';

@Injectable()
export class MetadataService {
  constructor(@InjectModel('Metadata') private metadaModel: Model<Metadata>) {}

  async getMetadata(url: string): Promise<MetadataType> {
    const data = parseUrl(url);
    const createdMetadata = new this.metadaModel(data);
    await createdMetadata.save();
    return createdMetadata as any;
  }
}
