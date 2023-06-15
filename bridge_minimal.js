function init()
{
	vkBridge.send('VKWebAppInit').catch((error) => {console.log(error);});
}

function joingroup()
{
	vkBridge.send('VKWebAppJoinGroup', {group_id: 218386519}).catch((error) => {console.log(error);});
}

function recommend()
{
	vkBridge.send('VKWebAppRecommend')
  .then((data) => { 
    if (data.result) {
      // Мини-приложение порекомендовано
    }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });
}

