import OpenAI from 'openai'

const openai = new OpenAI()

export async function getVisionResponse(imageUrl: string) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4-vision-preview',
    messages: [
      {
        role: 'system',
        content: 'You are a helpful program that assists users in identifying the compostability and recyclability of the objects in their images. Respond to the user with a terse explanation of which receptacle the object belongs in, with brief decomposition instructions as necessary.'
      },
      {
        role: 'user',
        content: [
          {
            type: 'image_url',
            image_url: {
              'url': imageUrl
            }
          }
        ]
      }
    ]
  })

  return { message: response.choices[0].message.content }
}
