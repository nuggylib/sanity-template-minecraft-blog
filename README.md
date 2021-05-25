# sanity-template-minecraft-blog

## Who this is for

### Minecraft Modders

Often times, Minecraft modders are budding developers who are trying to build up a portfolio. This template will help you moderate your site content via the Sanity studio. You can then hook it up to a static site generator so that you can demonstrate it however you'd like, whether it be by having a neatly-polished user-facing site, or a highly-technical dev-oriented site (such as one discussing the technical details of how you implemented your mod).

## Getting started locally

To build the starter template locally:
1. `cd` to the project root and run `yarn setup`
    * This handles building and bootstrapping the studio
    * Eventually, it will also handle building any front end(s) we package in this template
3. Then, run `yarn test-studio`
    * Fields that the user would set during `sanity init` will be unset
