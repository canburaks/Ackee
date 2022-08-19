import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ArtistResolverBase } from "./base/artist.resolver.base";
import { Artist } from "./base/Artist";
import { ArtistService } from "./artist.service";

@graphql.Resolver(() => Artist)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ArtistResolver extends ArtistResolverBase {
  constructor(
    protected readonly service: ArtistService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
