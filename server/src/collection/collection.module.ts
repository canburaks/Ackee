import { Module } from "@nestjs/common";
import { CollectionModuleBase } from "./base/collection.module.base";
import { CollectionService } from "./collection.service";
import { CollectionResolver } from "./collection.resolver";

@Module({
  imports: [CollectionModuleBase],
  providers: [CollectionService, CollectionResolver],
  exports: [CollectionService],
})
export class CollectionModule {}
