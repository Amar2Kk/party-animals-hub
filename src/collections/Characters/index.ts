import type { CollectionConfig } from 'payload'

import { authenticated } from '@/access/authenticated'
import { anyone } from '@/access/anyone'

export const Characters: CollectionConfig = {
  slug: 'characters',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      unique: true,
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'releaseDate',
      type: 'date',
      defaultValue: new Date(),
    },
    {
      name: 'traits',
      type: 'relationship',
      relationTo: 'traits',
      hasMany: true,
      index: true,
    },
    {
      name: 'Default Skin',
      type: 'relationship',
      relationTo: 'skins',
      required: true,
    },
    {
      name: 'skins',
      type: 'relationship',
      relationTo: 'skins',
      hasMany: true,
    },
    {
      name: 'rarity',
      type: 'relationship',
      relationTo: 'rarity',
      required: true,
    },
  ],
}
