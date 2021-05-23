import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MetadataModule } from './metadata/metadata.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MetadataModule,
    // MongooseModule.forRoot(
    //   'mongodb+srv://Vectormike:Redeemer@cluster0.oa1xq.mongodb.net/test',
    // ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
