import { Module } from "@nestjs/common";
import { TagModuleBase } from "./base/tag.module.base";
import { TagService } from "./tag.service";
import { TagResolver } from "./tag.resolver";

@Module({
  imports: [TagModuleBase],
  providers: [TagService, TagResolver],
  exports: [TagService],
})
export class TagModule {}
