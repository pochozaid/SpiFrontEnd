import { Component, State, Prop } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';

@Component({
    tag: "spi-details",
    styleUrl: "spi-details.scss"
})
export class enseignant {
  
    @Prop() match: MatchResults;
    @Prop() history : RouterHistory;
    @State() posts: any = "";

    componentWillLoad() {
        let url='http://api-dosispi.cleverapps.io/enseignants/'
        let noEnseignant = this.match.params.noEnseignant;
        return fetch(`${url+noEnseignant}`)
        .then(response => response.json())
      .then(data => {
      this.posts = data;
      console.log(noEnseignant);
        });
    }

    render() {
        return (
            <div>
            <form>
            <br></br>
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
            <label class="label">Sexe</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" value={this.posts.sexe} disabled></input>
            </div>
            </div>
            <div class="field">
            <label class="label">Email UBO</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" value={this.posts.emailUbo} disabled></input>
            </div>
            </div>
            <div class="field">
            <label class="label">Email Perso</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" value={this.posts.emailPerso} disabled></input>
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
            <label class="label">Adresse</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" value={this.posts.adresse}  disabled></input>
            </div>
            </div>
            <div class="field">
            <label class="label">Code postal</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" value={this.posts.codePostal} disabled></input>
            </div>
            </div>
            <div class="field">
            <label class="label">Type</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" value={this.posts.type} disabled></input>
            </div>
            </div>
            <div class="">
            <stencil-route-link url='enseignant'>
            <a class="button is-black is-medium is-fullwidth" >Retour</a>
            </stencil-route-link>
            </div>
            </form>
            <br></br>
          </div>
        );
    }
}