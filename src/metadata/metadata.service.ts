import { Injectable } from '@nestjs/common';
import { MetadataType } from './dto/create-metadata';
import { UrlInput } from './input-metadata.input';
import { Metadata } from './interface/metada.interface';
import parseUrl from '../utils/parser';

@Injectable()
export class MetadataService {
  async getMetadata(url: UrlInput): Promise<MetadataType> {
    const data = parseUrl(url as unknown as string);
    return data as any;
  }
}
