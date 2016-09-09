import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../api/api.service';
import { Pokemon } from '../../api/models/pokemon.ts';

@Component({
  templateUrl: 'pages/wiki/wiki.html',
})

export class WikiPage {

  pokemons: [Pokemon]

  constructor(private navCtrl: NavController) {

    /*this.items = [
        {id: 1, name: 'abc'},
        {id: 2, name: 'foo'},
        {id: 3, name: 'bar'}
    ]*/

    this.pokemons = [
        {
              pokemonId: 1,
              name: 'Pikachu',
              classification: 'pok',
              maxHP: 100,
              maxCP: 200,
              fleeRate: 5,
              weakness: ['chocolate'],
              resistance: ['money'],
              types: ['one-and-only'],

              gender: {
                abbreviation: 'm',
                maleRatio: 80,
                femaleRatio: 20,
                breedable: true,
              },

              previousEvolutions: [{
                pokemonId: 1,
                name: 'bla',
                _id: 'lol',
              }],

              nextEvolutions: [{
                pokemonId: 1,
                name: 'bla',
                _id: 'lol',
              }],

              height: {
                maximum: 'fa',
                minimum: 'ck',
              },

              weight: {
                maximum: 'fu',
                minimum: 'sa',
              },

              specialAttacks: [{
                type: 'qwe',
                name: 'rtzu',
                damage: 66,
                _id: 'ho',
              }],

              fastAttacks: [{
                type: 'tp',
                name: 'rofl',
                damage: 55,
                _id: 'zack',
              }]
          },
          {
              pokemonId: 2,
              name: 'Mew',
              classification: 'pok',
              maxHP: 100,
              maxCP: 200,
              fleeRate: 5,
              weakness: ['chocolate'],
              resistance: ['money'],
              types: ['one-and-only'],

              gender: {
                abbreviation: 'm',
                maleRatio: 80,
                femaleRatio: 20,
                breedable: true,
              },

              previousEvolutions: [{
                pokemonId: 1,
                name: 'bla',
                _id: 'lol',
              }],

              nextEvolutions: [{
                pokemonId: 1,
                name: 'bla',
                _id: 'lol',
              }],

              height: {
                maximum: 'fa',
                minimum: 'ck',
              },

              weight: {
                maximum: 'fu',
                minimum: 'sa',
              },

              specialAttacks: [{
                type: 'qwe',
                name: 'rtzu',
                damage: 66,
                _id: 'ho',
              }],

              fastAttacks: [{
                type: 'tp',
                name: 'rofl',
                damage: 55,
                _id: 'zack',
              }]
          }
    ]


  }
}
