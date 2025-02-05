import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })
  const maps = await payload.find({ collection: 'Maps' })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <picture>
          <source srcSet="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg" />
          <Image
            alt="Payload Logo"
            height={65}
            src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
            width={65}
          />
        </picture>
        {!user && <h1 className="text-2xl font-bold">Welcome to your new project.</h1>}
        {user && <h1 className="text-2xl font-bold">Welcome back, {user.email}</h1>}
        <div className="mt-4">
          <a
            className="text-blue-500 hover:underline"
            href={payloadConfig.routes.admin}
            rel="noopener noreferrer"
            target="_blank"
          >
            Go to admin panel
          </a>
          <a
            className="text-blue-500 hover:underline ml-4"
            href="https://payloadcms.com/docs"
            rel="noopener noreferrer"
            target="_blank"
          >
            Documentation
          </a>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold">Maps</h2>
        <ul>
          {maps.docs.map((map) => (
            <li key={map.id} className="mt-2">
              <Image
                alt={map.name}
                height={150}
                src={map.image.url}
                width={150}/>
              <h3 className="text-lg font-semibold">{map.name}</h3>
              <p>{map.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 text-center">
        <p>Update this page by editing</p>
        <a className="text-blue-500 hover:underline" href={fileURL}>
          <code>app/(frontend)/page.tsx</code>
        </a>
      </div>
    </div>
  )
}
