function init()
{
	//vkBridge.send('VKWebAppInit').catch((error) => {console.log(error);});
}

function joingroup()
{
	vkBridge.send('VKWebAppJoinGroup', {group_id: '218386519'}).catch((error) => {console.log(error);});
}

function recommend()
{
	//vkBridge.send('VKWebAppShowInviteBox');
	vkBridge.send('VKWebAppJoinGroup', {group_id: '218386519'}).catch((error) => {console.log(error);});
}

