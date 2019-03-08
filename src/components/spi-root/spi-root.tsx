import { Component } from "@stencil/core";
import {MatchResults as _} from '@stencil/router'; // _ = !"declared but never read"

@Component({
  tag: "spi-root",
  styleUrl: "spi-root.scss"
})
export class SpiRoot {
  render() {
    return (
      <div>
        <spi-header />
        <main class="container">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="spi-home" exact={true} />
              <stencil-route url="/enseignant" component="spi-enseignant" exact={true} />
              <stencil-route url="/enseignant/details/:noEnseignant" component="spi-details" exact={true} />
              <stencil-route url="/enseignant/add" component="spi-add" exact={true} />
              <stencil-route url="/enseignant/search" component="spi-search" exact={true} />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
