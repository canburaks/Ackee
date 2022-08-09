import { Module } from "@nestjs/common";
import { ArtistModuleBase } from "./base/artist.module.base";
import { ArtistService } from "./artist.service";
import { ArtistResolver } from "./artist.resolver";

@Module({
  imports: [ArtistModuleBase],
  providers: [ArtistService, ArtistResolver],
  exports: [ArtistService],
})
export class ArtistModule {}
