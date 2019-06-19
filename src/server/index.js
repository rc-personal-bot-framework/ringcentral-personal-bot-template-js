import * as skillFaq from 'ringcentral-personal-chatbot-skill-faq'
import skillPack from 'ringcentral-personal-bot-skill-pack-simple'
import * as skillTime from 'glip-personal-bot-skill-time'

export const name = 'Demo Bot'
export const description = 'Personal Chatbot with skills'
export const homepage = 'https://github.com/rc-personal-bot-framework/ringcentral-personal-bot-template-js#readme'
export const skills = [skillTime, skillFaq, ...skillPack]

/*
export const onPostAdd = async ({
  text, // original text
  textFiltered, // text without metion user
  group,
  user,
  handled, // hanlded by prev skills
  shouldUseSignature // should use signature like "send by bot skill xxx" in message.
}) => {
  if (handled) {
    return false
  }
  let sign = shouldUseSignature
    ? `\n(send by [${exports.name}](${exports.homepage}))`
    : ''
  console.log(text, textFiltered, group, user, handled, shouldUseSignature)
  if (textFiltered.toLowerCase() === 'hello') {
    await user.sendMessage(group.id, {
      text: 'Hi' + sign
    })
  }
}
*/
