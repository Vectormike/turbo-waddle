import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class MetadataInput {
  @Field()
  readonly title: string;
  @Field()
  readonly description: string;
  @Field()
  readonly largestNumber: string;
}
