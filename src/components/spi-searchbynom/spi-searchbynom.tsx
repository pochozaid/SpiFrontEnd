import { Component, State } from '@stencil/core';

@Component({
    tag: 'spi-searchbyname',
    styleUrl: 'spi-searchbyname.scss'
})

export class SpiSearchbyname {

@State() posts: any = "";

InputNom: HTMLInputElement;
    
getens() {
    let url='http://apii-dosispi.cleverapps.io/enseignants/nom/'
        let nom = this.InputNom.value;
        return fetch(url+nom)
        .then(response => response.json())
      .then(data => {
      this.posts = data;
        });
}

    render() {
        if(this.posts == ""){
        return (
          <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-6 is-offset-3">
              <h1 class="title">
                Enseignants
                        </h1>
              <h2 class="subtitle">
                Rechercher un Enseignant par nom
                        </h2>
              <div class="box">
                <div class="field is-grouped">
                  <p class="control is-expanded">

                    <input class="input" type="text" ref={(el: HTMLInputElement) => this.InputNom = el} placeholder="Entrer le nom de l'enseignant" />
                  </p>
                  <p class="control">
                    <a class="button is-info" onClick={() => this.getens()}>Valider</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )}
    else{
        return (
        <div class="center">
        <div class="field">
            <label class="label">No Enseignant</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" value={this.posts.noEnseignant} disabled></input>
            </div>
        </div>
        <div class="field">
            <label class="label">Nom</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" value={this.posts.nom} disabled></input>
            </div>
        </div>
        <div class="field">
            <label class="label">Prenom</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" value={this.posts.prenom} disabled></input>
            </div>
        </div>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" value={this.posts.email} disabled></input>
            </div>
        </div>
        <div class="field">
            <label class="label">Email Ubo</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" value={this.posts.emailUbo} disabled></input>
            </div>
        </div>
        <div class="field">
            <label class="label">Type</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" value={this.posts.type} disabled></input>
            </div>
        </div>
        <div class="field">
            <label class="label">Sexe</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" value={this.posts.sexe} disabled></input>
            </div>
        </div>
        <div class="field">
            <label class="label">Mobile</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" value={this.posts.mobile} disabled></input>
            </div>
        </div>
        <div class="field">
            <label class="label">Téléphone</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" value={this.posts.telephone} disabled></input>
            </div>
        </div>
        <div class="field">
            <label class="label">Pays</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" value={this.posts.pays} disabled></input>
            </div>
        </div>
        <div class="field">
            <label class="label">Ville</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" value={this.posts.ville} disabled></input>
            </div>
        </div>
        <div class="field">
            <label class="label">Code Postal</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" value={this.posts.codePostal} disabled></input>
            </div>
        </div>
        <div class="field">
            <label class="label">Adresse</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" value={this.posts.adresse} disabled></input>
            </div>
        </div>
        <p class="control">
          <button class="button is-primary">Retour</button>
            </p>
        </div>
        )}
    }
}