function init()
{
	bridge.send('VKWebAppInit').catch((error) => {console.log(error);});
}

function joingroup()
{
	bridge.send('VKWebAppJoinGroup', {group_id: 218386519}).catch((error) => {console.log(error);});
}

function recommend()
{
	bridge.send('VKWebAppRecommend')
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

