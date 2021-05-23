import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class MetadataType {
  // @Field(() => ID)
  // readonly id?: string;
  @Field()
  readonly title: string;
  @Field()
  readonly description: string;
  @Field()
  readonly largestNumber: string;
}
