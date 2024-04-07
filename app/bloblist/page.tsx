import { list } from '@vercel/blob'

export default async function BlobList() {
  const response = await list()
  return (
    <>
      <ul>
        {response.blobs.map((blob) => (
          <li key={blob.downloadUrl}>
            <a href={blob.downloadUrl}>
              {blob.pathname}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
