import { Module } from "@nestjs/common";
import { LinkModuleBase } from "./base/link.module.base";
import { LinkService } from "./link.service";
import { LinkController } from "./link.controller";
import { LinkResolver } from "./link.resolver";

@Module({
  imports: [LinkModuleBase],
  controllers: [LinkController],
  providers: [LinkService, LinkResolver],
  exports: [LinkService],
})
export class LinkModule {}
