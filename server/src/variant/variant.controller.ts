import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VariantService } from "./variant.service";
import { VariantControllerBase } from "./base/variant.controller.base";

@swagger.ApiTags("variants")
@common.Controller("variants")
export class VariantController extends VariantControllerBase {
  constructor(
    protected readonly service: VariantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
