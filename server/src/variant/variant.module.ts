import { Module } from "@nestjs/common";
import { VariantModuleBase } from "./base/variant.module.base";
import { VariantService } from "./variant.service";
import { VariantController } from "./variant.controller";
import { VariantResolver } from "./variant.resolver";

@Module({
  imports: [VariantModuleBase],
  controllers: [VariantController],
  providers: [VariantService, VariantResolver],
  exports: [VariantService],
})
export class VariantModule {}
