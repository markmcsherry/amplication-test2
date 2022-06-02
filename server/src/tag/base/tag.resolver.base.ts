/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateTagArgs } from "./CreateTagArgs";
import { UpdateTagArgs } from "./UpdateTagArgs";
import { DeleteTagArgs } from "./DeleteTagArgs";
import { TagFindManyArgs } from "./TagFindManyArgs";
import { TagFindUniqueArgs } from "./TagFindUniqueArgs";
import { Tag } from "./Tag";
import { TagService } from "../tag.service";

@graphql.Resolver(() => Tag)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TagResolverBase {
  constructor(
    protected readonly service: TagService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Tag",
    action: "read",
    possession: "any",
  })
  async _tagsMeta(
    @graphql.Args() args: TagFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Tag])
  @nestAccessControl.UseRoles({
    resource: "Tag",
    action: "read",
    possession: "any",
  })
  async tags(@graphql.Args() args: TagFindManyArgs): Promise<Tag[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Tag, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Tag",
    action: "read",
    possession: "own",
  })
  async tag(@graphql.Args() args: TagFindUniqueArgs): Promise<Tag | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Tag)
  @nestAccessControl.UseRoles({
    resource: "Tag",
    action: "create",
    possession: "any",
  })
  async createTag(@graphql.Args() args: CreateTagArgs): Promise<Tag> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Tag)
  @nestAccessControl.UseRoles({
    resource: "Tag",
    action: "update",
    possession: "any",
  })
  async updateTag(@graphql.Args() args: UpdateTagArgs): Promise<Tag | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Tag)
  @nestAccessControl.UseRoles({
    resource: "Tag",
    action: "delete",
    possession: "any",
  })
  async deleteTag(@graphql.Args() args: DeleteTagArgs): Promise<Tag | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}