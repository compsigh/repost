import OpenAI from 'openai'

const openai = new OpenAI()

export async function getVisionResponse(imageUrl: string): Promise<string> {
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
              'url': imageUrl,
              'detail': 'auto'
            },
          },
        ],
      },
    ],
  });

  return response.choices[0].message[0].content[0].text
}
