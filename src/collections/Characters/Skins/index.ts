import type { CollectionConfig } from 'payload'

import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

import { authenticated } from '@/access/authenticated'
import { anyone } from '@/access/anyone'

export const Skins: CollectionConfig = {
  slug: 'skins',
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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'releaseDate',
      type: 'date',
      defaultValue: new Date(),
    },
    {
      name: 'rarity',
      type: 'relationship',
      relationTo: 'rarity',
      required: true,
    },
    {
      name: 'variants',
      type: 'relationship',
      relationTo: 'variants',
      hasMany: true,
    },
    {
      name: 'is Obtainable',
      type: 'checkbox',
      defaultValue: true,
      required: true,
    },
    {
      name: 'How to Obtain?',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature()]
        },
      }),
    },
  ],
  admin: {
    useAsTitle: 'name',
  },
}
