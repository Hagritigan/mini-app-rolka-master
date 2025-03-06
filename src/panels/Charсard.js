// import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Accordion } from '@vkontakte/vkui';
// import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
// import './App.css';
// import React from 'react';
// import vkBridge from '@vkontakte/vk-bridge';

// const infoStyle = { color: 'var(--vkui--color_text_subhead)' };

// console.log(vkBridge);

// try {
//   vkBridge.send('VKWebAppGetAuthToken', { 
//     app_id: 52651787, 
//     scope: 'friends,status'
//     })
//     .then( (data) => { 
//       console.log(1);
//       console.log(data);
//       if (data.access_token) {
//         console.log(data);
//         // Ключ доступа пользователя получен
//       }
//     })
//     .finally (()=>console.log('shit'))
//     .catch( (error) => {
//       // Ошибка
//       console.log(error);
//     });
// } catch(e) {
//   console.log(e);
// }

// console.log(123);

// vkBridge.send("VKWebAppGetAuthToken", {"app_id": 52651787, "scope": "friends,status"});


// // vkBridge('VKWebAppAccessTokenReceived ');


// const info = {
//   name: 'Измождённый Белый Герцог', 
//   image: 'https://sun1-86.userapi.com/impf/c846420/v846420604/1364d7/BOwmAav0W1E.jpg?size=1085x1312&quality=96&sign=9ab4c09d898465cd27dc98a0e7770a98&type=album',
//   stats: [
//     {
//       name: 'Уровень сил',
//       value: 98.7,
//     },
//     {
//       name: 'Дьявольский фрукт',
//       value: 98.7,
//     },
//     {
//       name: 'Фехтование',
//       value: 84.2,
//     },
//     {
//       name: 'Крутопушка',
//       value: 84.2
//     },
//     {
//       name: 'ВВ',
//       value: 27,
//     },
//     {
//       name: 'ВН',
//       value: 6.8
//     },
//     {
//       name: 'Cтихийное фехтование',
//       value: 34.8,
//     },
//     {
//       name: 'Тетра Аккуратес Ноги',
//       value: 63.7
//     },
//     {
//       name: 'Музыкант',
//       value: 98.7
//     },
//   ]
// };

// // const AccordionVKID = () => {
// //   const data = [
// //     {
// //       id: 1,
// //       title: 'Как сменить номер телефона?',
// //       detail:
// //         'Зайдите в раздел Безопасность и вход. Укажите новый номер телефона и подтвердите его.',
// //     },
// //     {
// //       id: 2,
// //       title: 'Как изменить пароль?',
// //       detail:
// //         'Для входа во многие сервисы экосистемы VK используется один пароль. Если вы беспокоитесь по поводу безопасности, этот пароль можно изменить.',
// //     },
// //     {
// //       id: 3,
// //       title: 'Как усилить защиту аккаунта?',
// //       detail:
// //         'Используйте сложный пароль и регулярно меняйте его. Обновить пароль можно в разделе Пароль.',
// //     },
// //   ];

// //   const [openId, setOpenId] = React.useState(2);

// //   return data.map(({ id, title, detail }) => (
// //     <Accordion
// //       key={id}
// //       expanded={openId === id}
// //       onChange={(e) => (e ? setOpenId(id) : setOpenId(null))}
// //     >
// //       <Accordion.Summary>{title}</Accordion.Summary>
// //       <Accordion.Content>
// //         <Div style={infoStyle}>{detail}</Div>
// //       </Accordion.Content>
// //     </Accordion>
// //   ));
// // };

// export const Charcard = ({ id }) => {
//   const routeNavigator = useRouteNavigator();

//   const statsInfo = info.stats.map((stat) => 
//     <Div key={stat.name} style={{ margin: 10 }}>
//        { stat.name } : { stat.value } 
//     </Div>
//   );

//   return (
//     <Panel id={id}>
//       <PanelHeader>Карточка персонажа</PanelHeader>
//       <Button size="m" onClick={() => vkBridge.send("VKWebAppGetAuthToken", {"app_id": 52651787, "scope": "friends,status"})}>Назад</Button>
//       <Group>
//         <Div>
//           {info.name}
//           {/* <Image keepAspectRatio src={`${info.image}`} widthSize="100%" /> */}
//         </Div>
//         <Div className="char-card_main">
//           <img src={`${info.image}`} className="char-card_avatar"></img>
//           <Div>
//             {statsInfo}
//           </Div>
//         </Div>
//       </Group>
//       <Group>
//         {/* <AccordionVKID /> */}
//       </Group>
//     </Panel>
//   );
// };