module.exports.config = {
  name: "antiout",
  version: "1.0.0"
};
module.exports.handleEvent = async ({
  event,
  api
}) => {
  if (event.logMessageData?.leftParticipantFbId === api.getCurrentUserID()) return;
  if (event.logMessageData?.leftParticipantFbId) {
    const info = await api.getUserInfo(event.logMessageData?.leftParticipantFbId);
    const {
      name
    } = info[event.logMessageData?.leftParticipantFbId];
    api.addUserToGroup(event.logMessageData?.leftParticipantFbId, event.threadID, (error) => {
      if (error) {
        api.sendMessage(`═══ஓ๑♡๑ஓ════
‎            ✞︎ 𝐑.𝐈.𝐏 ✞︎
‎  𝐂𝐀𝐔𝐒𝐄 𝐎𝐅 𝐃𝐄𝐀𝐓𝐇: ${name} —nagbigti dahil iniwan—
‎  🕊️𝑖𝑛 𝑙𝑜𝑣𝑖𝑛𝑔 𝑚𝑒𝑚𝑜𝑟𝑖𝑒𝑠🕊️
‎ ════ஓ๑♡๑ஓ════`, event.threadID);
      } else {
        api.sendMessage(`HAHAHAHA TANGA, wala kang takas sa gc ${name} kung d lang kita lab d kita ibabalik （￣へ￣）`, event.threadID);
      }
    });
  }
};
