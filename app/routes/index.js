import Ember from 'ember';

var repositories = [
  {
    name: "ddd",
  url: "https://github.com/diegomichel/ddd"
  },
  {
    name: "demo_app",
  url: "https://github.com/diegomichel/demo_app"
  },
  {
    name: "dotfiles",
  url: "https://github.com/diegomichel/dotfiles"
  },
  {
    name: "effective_datatables",
  url: "https://github.com/diegomichel/effective_datatables"
  },
  {
    name: "first_app",
  url: "https://github.com/diegomichel/first_app"
  },
  {
    name: "Gabit",
  url: "https://github.com/diegomichel/Gabit"
  },
  {
    name: "memX",
  url: "https://github.com/diegomichel/memX"
  },
  {
    name: "sample_app",
  url: "https://github.com/diegomichel/sample_app"
  },
  {
    name: "SIA",
  url: "https://github.com/diegomichel/SIA"
  },
  {
    name: "skhem",
  url: "https://github.com/diegomichel/skhem"
  },
  {
    name: "skhem_site",
  url: "https://github.com/diegomichel/skhem_site"
  },
  {
    name: "Stino",
  url: "https://github.com/diegomichel/Stino"
  },
  {
    name: "vim-ruby",
  url: "https://github.com/diegomichel/vim-ruby"
  },
  {
    name: "wordpress2hugo",
  url: "https://github.com/diegomichel/wordpress2hugo"
  },
  {
    name: "zombiemodtremulous",
  url: "https://github.com/diegomichel/zombiemodtremulous"
  }
];

export default Ember.Route.extend({
  model() {
    return repositories;
  }
});
