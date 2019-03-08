import { Component, State } from '@stencil/core';
import { Enseignant } from '../../global/Enseignant';

@Component({
    tag: "spi-enseignant",
    styleUrl: "spi-enseignant.scss"
    
})
export class SpiEnseignant{
    @State() enseignant : Enseignant;
    @State() posts: any = "";

    componentWillLoad() {
        return fetch('http://dosispi.cleverapps.io/enseignants')
        .then(response => response.json())
        .then(data => {
        this.posts = data;
        console.log(this.posts)
        });
        }

        componentDidLoad() {
            this.modifyselection();
        }

    modifyselection( ) {   
        let rows = document.getElementsByTagName('tr');
        for (var i = 1; i < rows.length; i++) {
            let element = rows[i];
            element.onmouseover = () => element.classList.toggle('is-selected');
            element.onmouseout = () => element.classList.toggle('is-selected');
        }
    }

    deletefnct(pst){
      let url='http://api-dosispi.cleverapps.io/enseignants'
      return fetch((url),{
      method:'DELETE',headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      
      body: JSON.stringify(pst),
        }).then(() => {alert("Deleted !!");
        location.href='/enseignant';
      }).catch((error) => {
          alert(' Error ! please retry !! ');
          console.error(error);
        });
  }
   



    render() {
        return (

    
  
      <section class="container">
      
      <div class="columns features">
      <div class="columns is-multiline">
      {this.posts.map(
                    (pst) =>
                    
        <div class="column is-4">
          <div class="card is-shady">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="http://gsii.fr/wp-content/plugins/our-team-enhanced/inc/img/noprofile.jpg" alt="Placeholder image" class="modal-button" data-target="modal-image2"/>
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <h4>{pst.nom} &nbsp; {pst.prenom}</h4>
                <p>{pst.emailUbo}</p>
                <stencil-route-link url={'/enseignant/details/'+pst.noEnseignant}>
                <span class="button is-link modal-button" data-target="modal-image2">Détail</span>
                </stencil-route-link>
                &nbsp;&nbsp;
                <span class="button is-danger modal-button" onClick={() => this.deletefnct(pst)} data-target="modal-image2">Delete</span>
                
                
              </div>
            </div>
          </div>
        </div>)}
        </div>
        </div>
    </section>
        );
    }
}