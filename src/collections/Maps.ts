import type { CollectionConfig } from 'payload'

export const Maps: CollectionConfig = {
  slug: 'Maps',
  access: {
    read: () => true,
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
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'gameplay',
      type: 'textarea',
    },
    {
      name: 'strategy',
      type: 'textarea',
    },
  ],
}
