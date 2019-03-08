import { Component, Prop, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';




@Component({
    tag: "spi-add",
    styleUrl: "spi-add.scss"
  })
export class ApiAdd {
  @State() enseignants: any[] = []
  @State() adresse: String;
  @State() nom: String;
  @State() prenom: String;
  @State() telephone: String;
  @State() emailUbo: String;
  @State() sexe: String;
  @State() pays: String;
  
  @Prop() home: RouterHistory;

  componentWillLoad() {
    fetch("https://api-dosispi.cleverapps.io/enseignants")
      .then(response => response.json()).
      then(data => {
        this.enseignants = data;
      })
  }

  reculer() {
    this.home.goBack();
  }

  addEnseignant(ens) {
    ens.preventDefault();
    console.log("!");
    const adresse = this.adresse;
    const pays = this.pays;
    const nom = this.nom;
    const prenom = this.prenom;
    const emailUbo = this.emailUbo;
    const telephone = this.telephone;
    const sexe = this.sexe;





    const myEnseignant = {
      adresse,
      
      sexe,
      nom,
      prenom,
      emailUbo,
      telephone,
      pays,
      

    };




    fetch("https://api-dosispi.cleverapps.io/enseignants", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify(myEnseignant)
    })
      .then(function (res) {
        //this.reculer();
        console.log(res)
        //return res.json();
      })
      .then(function (data) {
        console.log(JSON.stringify(data));
        
      });
  }

  render() {

    return (
      <div class="spi-home">
        <div class="container is-large has-text-centered">

          <h1 class="title is-bold">Ajouter un enseignants :</h1>
          <h2 class="subtitle">Veuillez renseignez le formulaire ci dessous: </h2>
          <div class="box">
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Nom :</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded has-icons-left">
                    <input class="input" type="text" placeholder="Nom" onInput={(e: any) => (this.nom = e.target.value)} />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </p>
                </div>
                <div class="field-label is-normal">
                  <label class="label">Prénom :</label>
                </div>
                <div class="field">

                  <p class="control  has-icons-left">
                    <input class="input" type="text" placeholder="Prenom" onInput={(e: any) => (this.prenom = e.target.value)} />
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>


           






            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Mobile</label>
              </div>
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="field has-addons">
                    <p class="control">
                      <a class="button is-static">
                        +33
              </a>
                    </p>
                    <p class="control is-expanded">
                      <input class="input" type="tel" placeholder="Numéro de téléphone" onInput={(e: any) => (this.telephone = e.target.value)} />
                    </p>
                  </div>

                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Email :</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded has-icons-left">
                    <input class="input" type="email" placeholder="exemple zaidbennani22@gmail.com" onInput={(e: any) => (this.emailUbo = e.target.value)} />
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </p>
                </div>
                <div class="field-label is-normal">
                  <label class="label">Pays :</label>
                </div>
                <div class="field">

                  <p class="control  has-icons-left">
                    <input class="input" type="text" placeholder="Pays" onInput={(e: any) => (this.pays = e.target.value)} />
                    <span class="icon is-small is-left">
                      <i class="fas fa-home"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>

        

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Sexe : </label>
              </div>
              <div class="field-body">
                <div class="field is-narrow">
                  <div class="control">
                    <div class="select is-fullwidth">
                      <select onInput={(e: any) => (this.sexe = e.target.value)}>
                        <option>Homme</option>
                        <option>Femme</option>
                        
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Adresse</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <textarea class="textarea" placeholder="Tapez votre adresse.." onInput={(e: any) => (this.adresse = e.target.value)}></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label">
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <stencil-route-link url="/enseignant">
                      <a class="button is-primary" onClick={this.addEnseignant.bind(this)} >
                        Ajouter Candidat
        </a></stencil-route-link>
                  </div>

                </div>

              </div>
            </div>

          </div>

          <br/><br/>
        </div>
      </div>

    );
  }
}
