/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { LinkWhereUniqueInput } from "./LinkWhereUniqueInput";
import { LinkUpdateInput } from "./LinkUpdateInput";

@ArgsType()
class UpdateLinkArgs {
  @Field(() => LinkWhereUniqueInput, { nullable: false })
  where!: LinkWhereUniqueInput;
  @Field(() => LinkUpdateInput, { nullable: false })
  data!: LinkUpdateInput;
}

export { UpdateLinkArgs };