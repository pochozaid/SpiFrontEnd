import { Component } from "@stencil/core";

@Component({
  tag: "spi-header",
  styleUrl: "spi-header.scss"
})
export class SpiHeader {
  burger!: any;
  menu!: any;

  toggleBurger() {
    console.log("Blog");
    this.burger.classList.toggle("is-active");
    this.menu.classList.toggle("is-active");
  }

  render() {
    return (
      <nav class="navbar is-light has-shadow is-spaced" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
            <span class="navbar-item">
              <a href="/"><strong>SPI-ADM</strong></a>
            </span>
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar-content"
              onClick={() => this.toggleBurger()}
              ref={el => (this.burger = el)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div id="navbar-content" class="navbar-menu" ref={el => (this.menu = el)}>
            <div class="navbar-start">
              <span class="navbar-item">
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  <i class="fas fa-chalkboard-teacher"></i>
                  Enseignant
                </a>
                  <div class="navbar-dropdown">
                  <a class="navbar-item" href="/enseignant">Affihcer tous les enseignant</a>
                    <a class="navbar-item" href="/enseignant/add">Ajouter un enseignant</a>
                    <a class="navbar-item" href="/enseignant/search">Rechercher un enseignant par mail</a>
                    <a class="navbar-item" href="/enseignant/searchbyname">Rechercher un enseignant par nom</a>
                </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  <i class="fas fa-user-graduate"></i>
                  Candidat
                </a>
                  
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  <i class="fas fa-book-reader"></i>
                  Formation
                </a>
                  
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  <i class="fas fa-graduation-cap"></i>
                  Promotion
                </a>
                  
            </div>
            </span>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}