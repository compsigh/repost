import OpenAI from 'openai'

const openai = new OpenAI()

export async function getVisionResponse(imageUrl: string) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4-vision-preview',
    temperature: 0.2,
    messages: [
      {
        role: 'system',
        content: `You are a helpful program that assists users in identifying in which receptacle objects in their images should go. Here are your heuristics:

Respond in JSON format, conforming to the following schema:
{
  "receptacle": "trash" | "compost" | "recycle",
  "reasoning": string,
  "instructions": string
}

  - Choose your best guess for the receptacle. If you are unsure, answer with "trash" and provide reasoning.
  - Provide a one-sentence reasoning for your choice.
  - If the object in the user's image requires special instructions for disposal, provide them in the "instructions" field.`
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

  let jsonResponse = response.choices[0].message.content
                     ?.slice(7)
                     ?.slice(0, -3)
  if (!jsonResponse)
    return { message: 'Sorry, there was an issue with your request.' }

  const parsedResponse = JSON.parse(jsonResponse)

  return { message: parsedResponse }
}
