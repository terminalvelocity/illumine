## Ember + Lux ([Seeds](https://github.com/terminalvelocity/seeds.js)) Example App

**Illumine** - ([_Lux_](https://github.com/postlight/lux))

> They are a devouring force; they illumine, but they burn; they have the right to be unique in their being and in their work.
>
> Michelangelo
> Romain Rolland

**Soliscence** - ([_Ember_](https://github.com/emberjs/ember.js))
> Serotiny is an ecological adaptation exhibited by some seed plants, in which seed release occurs in response to an environmental trigger, rather than spontaneously at seed maturation. Seeds activated from warming by the sun are called soliscence

### Getting Started

1. clone this repo
2. `cd illumine && npm i`
3. `npm run seed`
  - which runs an npm script to execute the following commands
  - ~~`lux db:create && lux db:migrate && lux db:seed`~~
4. `cd ../soliscence && npm i && bower i`

Now fire up both servers
`lux s` `ember s`

Next version of seeds will come ready to go, out-of-the-box with Lux to make it
even easier to get up and running with Lux and Ember.
