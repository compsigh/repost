import OpenAI from 'openai'

const openai = new OpenAI()

export async function getVisionResponse(base64Image: string) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4-vision-preview',
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: 'Identify the object that this image focuses on. Then give me a descriptive explanation on how and where to dispose of it' },
          {
            type: 'image_url',
            image_url: {
              'url': `data:image/png;base64,${base64Image}`,
              'detail': 'auto'
            },
          },
        ],
      },
    ],
  })
  console.log(response.choices[0])
}
