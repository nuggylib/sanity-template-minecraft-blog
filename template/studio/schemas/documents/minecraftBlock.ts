const HARVEST_TOOLS = [`Axe`, `Hoe`, `Pickaxe`, `Shovel`, `Hand`, `None`]

const HARVEST_TOOL_MATERIALS = [
  `Wood`,
  `Stone`,
  `Iron`,
  `Diamond`,
  `Netherite`,
  `Gold`,
  `None`,
]

const isValidToolInput = (harvestTools) => {
  if (!harvestTools) return `Harvest tools must be defined`
  const tests = harvestTools.map((tool) => HARVEST_TOOLS.includes(tool))
  if (tests.includes(false))
    return `Harvest tool must be one of ${HARVEST_TOOLS}`
  else return true
}

const isValidToolMaterialInput = (harvestToolMaterials) => {
  if (!harvestToolMaterials) return `Harvest tool materials must be defined`
  const tests = harvestToolMaterials.map((tool) =>
    HARVEST_TOOL_MATERIALS.includes(tool)
  )
  if (tests.includes(false))
    return `Harvest tool material must be one of ${HARVEST_TOOL_MATERIALS}`
  else return true
}

/**
 * Full bedrock layer in the Overworld and the Nether
 *
 * Top face of the Void; bottom face of the lowest block that can be placed
 *
 * Liquids do not flow below this layer
 *
 * In Bedrock Edition, entities and players not in Creative mode begin to take damage below this layer
 */
const MIN_ALTITUDE = 0

/**
 * Top face of the highest block that can be placed in Java Edition 1.18‌ and Bedrock Edition 1.18.0‌
 */
const MAX_ALTITUDE = 320

export default {
  name: `minecraftBlock`,
  title: `Minecraft Block`,
  type: `document`,
  fields: [
    {
      name: `name`,
      title: `Name`,
      type: `string`,
    },
    {
      name: `slug`,
      title: `Slug`,
      type: `slug`,
      options: {
        source: `name`,
        maxLength: 96,
      },
    },
    {
      name: `image`,
      title: `Image`,
      type: `image`,
      options: {
        hotspot: true,
      },
    },
    {
      name: `description`,
      title: `Description`,
      type: `array`,
      of: [
        {
          title: `Block`,
          type: `block`,
          styles: [{ title: `Normal`, value: `normal` }],
          lists: [],
        },
      ],
    },
    {
      title: `Flammability Encouragement Value`,
      name: `flammabilityEncouragementValue`,
      type: `number`,
      description:
        `How easily this block catches fire when fire is available to spread (0 for not at all, 60 for most-easily)`,
      // see https://minecraft.fandom.com/wiki/Fire
      validation: (Rule) => Rule.required().integer().min(0).max(60),
      initialValue: 0,
    },
    {
      title: `Flammability Value`,
      name: `flammabilityValue`,
      type: `number`,
      description:
        `The higher the flammability value, the more-quickly this block burns away when on fire (though the exact burn time depends on difficulty, rain, age of the fire and a certain amount of randomness due to block ticks)`,
      // see https://minecraft.fandom.com/wiki/Fire
      validation: (Rule) => Rule.required().integer().min(0).max(100),
      initialValue: 0,
    },
    {
      title: `Light Level`,
      name: `lightLevel`,
      type: `number`,
      initialValue: 0,
      description:
        `The amount of light this block emits, with 0 being none, 14 being the same amount as a torch, and 15 as the same as broad daylight`,
      // see https://minecraft.fandom.com/wiki/Light
      validation: (Rule) => Rule.required().integer().min(0).max(15),
    },
    {
      title: `Harvest Tool`,
      name: `harvestTool`,
      type: `array`,
      of: [{ type: `string` }],
      description: `The types of tools that can be used to harvest this block`,
      validation: (Rule) =>
        Rule.custom((harvestTools) => isValidToolInput(harvestTools)),
      initialValue: HARVEST_TOOLS,
    },
    {
      title: `Harvest Tool Material`,
      name: `harvestToolMaterial`,
      type: `array`,
      of: [{ type: `string` }],
      description:
        `Tool material that can be used to harvest this block (e.g., diamond when a diamond tool is required)`,
      validation: (Rule) =>
        Rule.custom((harvestToolMaterials) =>
          isValidToolMaterialInput(harvestToolMaterials)
        ),
      initialValue: HARVEST_TOOL_MATERIALS,
    },
    {
      title: `Minimum spawn level`,
      name: `minSpawnLevel`,
      type: `number`,
      initialValue: 0,
      description:
        `The LOWEST altitude level that this block can spawn (0 - 320)`,
      // see https://minecraft.fandom.com/wiki/Altitude
      validation: (Rule) => Rule.integer().min(MIN_ALTITUDE).max(MAX_ALTITUDE),
    },
    {
      title: `Maximum spawn level`,
      name: `maxSpawnLevel`,
      type: `number`,
      initialValue: 0,
      description:
        `The HIGHEST altitude level that this block can spawn (0 - 320)`,
      // see https://minecraft.fandom.com/wiki/Altitude
      validation: (Rule) => Rule.integer().min(MIN_ALTITUDE).max(MAX_ALTITUDE),
    },
    {
      title: `Related Blocks`,
      name: `relatedBlocks`,
      type: `array`,
      description:
        `List blocks that are similar in type or behavior, but don't necessarily interact.`,
      of: [
        {
          type: `reference`,
          to: [{ type: `minecraftBlock` }],
        },
      ],
    },
    // TODO: Add a reference to the item type once that's been implemented
    {
      title: `Ingredient For`,
      name: `ingredientFor`,
      type: `array`,
      description:
        `List the blocks and items that require this block (directly or indirectly) in order to be crafted.`,
      of: [
        {
          type: `reference`,
          to: [{ type: `minecraftBlock` }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: `name`,
      media: `image`,
    },
  },
}
