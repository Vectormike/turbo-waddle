import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UrlInput {
  @Field()
  readonly url: string;
}
