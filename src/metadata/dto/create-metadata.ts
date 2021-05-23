import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class MetadataType {
  @Field()
  readonly title: string;
  @Field()
  readonly description: string;
  @Field()
  readonly largestNumber: string;
}
