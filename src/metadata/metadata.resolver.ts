import { Resolver, Query } from '@nestjs/graphql';
import { MetadataType } from './dto/create-metadata';
import { UrlInput } from './input-metadata.input';
import { MetadataService } from './metadata.service';

@Resolver((of) => MetadataType)
export class MetadataResolver {
  constructor(private readonly metadataService: MetadataService) {}

  @Query((returns) => [MetadataType])
  async getMetadata(url: UrlInput): Promise<MetadataType> {
    return this.metadataService.getMetadata(url as any);
  }

  @Query((returns) => String)
  async hello() {
    return 'Hi';
  }
}
