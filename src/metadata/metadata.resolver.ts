import { Resolver, Query, Mutation } from '@nestjs/graphql';
import { MetadataType } from './dto/create-metadata';
import { UrlInput } from './input-metadata.input';
import { MetadataService } from './metadata.service';

@Resolver((of) => MetadataType)
export class MetadataResolver {
  constructor(private readonly metadataService: MetadataService) {}

  @Query((returns) => [MetadataType])
  async getMetadata(url: string){
    return this.metadataService.getMetadata(url as any);
  }

  @Query((returns) => String)
  async hello() {
    return 'Hi';
  }
}
