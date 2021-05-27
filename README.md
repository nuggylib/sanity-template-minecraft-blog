# sanity-template-minecraft-blog

> This starter template is still early in development

A starter template that currently contains a custom Sanity studio with a schema modeled after the base game data. The base data is not designed to work with a specific site generator, but rather _any_ site generator; the idea is that it should be flexible enough to hook up to _any_ site generator (with the appropriate setup, of course).

## Who this is for

### Minecraft modders and modpack maintainers

Often times, Minecraft modders are budding developers who are trying to build up a portfolio. This template will help you moderate your site content via the Sanity studio. You can then hook it up to a static site generator so that you can demonstrate it however you'd like, whether it be by having a neatly-polished user-facing site, or a highly-technical dev-oriented site (such as one discussing the technical details of how you implemented your mod).

## Getting data

This Studio is not intended to be manually-populated with data. While technically possible, it would be far too tedious to do that for every supported content type that a Minecraft Mod/Modpack may have.

### [Minecraft Asset Reader](https://github.com/nuggylib/minecraft-asset-reader)

> This tool is currently unreleased and experimental; to test it out, you'll need to clone the repository, build it, then follow the local testing steps in the repository

The Minecraft Asset Reader is a tool we've built to assist you in configuring your mod/modpack's data. It will help you:

1. Create scaled-up image assets (including an emulated "isometric" icon for blocks)
2. Remove the pain of having to manually-track down related definition files
3. Export the data to your Sanity project
