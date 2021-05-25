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

## References
1. [Sanity starter templates](https://www.sanity.io/docs/starter-templates)
    * We only really use this for referencing configurations
    * One big difference is that we don't use the `.sanity-template` directory as the documentation states; our structure more-closely follows the `sanity-template-gatsby-blog` starter template
2. [`sanity-template-gatsby-blog`](https://github.com/sanity-io/sanity-template-gatsby-blog/tree/main)
3. [Sanity Projects API](https://www.sanity.io/docs/projects-api)
4. [Sanity JavaScript client](https://www.sanity.io/docs/js-client)
5. [`sanity init`](https://www.sanity.io/docs/init)
