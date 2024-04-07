import OpenAI from 'openai'

const openai = new OpenAI()

export async function getVisionResponse(imageUrl: string) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4-vision-preview',
    messages: [
      {
        role: 'system',
        content: 'You are a helpful program that assists users in identifying the compostability and recyclability of the objects in their images. If it does not look like trash, say you are unsure. You must respond to the user in JSON format. The first object, named Receptacle, should contain which of the three receptacles that the trash belongs in: the trash, compost, or recycle. If it belongs in more than one, comma separate the receptacle. The second object, named Disposal, contains a step by step way of decomposition instructions as necessary based on the type of receptacles(s) given. The third object, named Repost, contains alternate ways the user can reuse or utilize that trash for other activities.'
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

  let JSON_response: string = response.choices[0].message.content ?? ''
  JSON_response = JSON_response.slice(7)
  JSON_response = JSON_response.slice(0, -3)
  const parsed_response = JSON.parse(JSON_response)
  console.log(parsed_response)

  return { message: response.choices[0].message.content }
}
