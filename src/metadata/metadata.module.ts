import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MetadaSchema } from './metadata.model';
import { MetadataService } from './metadata.service';
import { MetadataResolver } from './metadata.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Metadata', schema: MetadaSchema }]),
  ],
  providers: [MetadataService, MetadataResolver],
})
export class MetadataModule {}
