import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { VariantResolverBase } from "./base/variant.resolver.base";
import { Variant } from "./base/Variant";
import { VariantService } from "./variant.service";

@graphql.Resolver(() => Variant)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class VariantResolver extends VariantResolverBase {
  constructor(
    protected readonly service: VariantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
