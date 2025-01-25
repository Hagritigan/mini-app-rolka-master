import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Accordion } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import './App.css';

export const Fishmankarate = ({ id }) => {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
        <PanelHeader>Особые способности рыболюдей</PanelHeader>
        <Button size="m" onClick={() => routeNavigator.back()} className='back-button'>Назад</Button>
        <Group>
            <Div>
                <center><strong>Каратэ Рыболюдей</strong></center><br />
                Это боевое искусство, которое используют рыболюди, а также, как это видно в случае с Коалой, люди. Оно включает в себя техники рукопашного 
                боя, а также техники позволяющие бойцу манипулировать водой. Несмотря на то, что на суше все атаки довольно разрушительны, под водой они 
                становятся в разы мощней, в основном потому что там активно начинают использоваться личные "прибамбасы" рыболюдей (большие плавники, 
                зубы и т.д.). Секретом Рыбокаратэ является то, что пользователь должен научиться контролировать воду, которая находится вокруг него. 
                Тем самым он сможет управлять кровью внутри людей и создавать с её помощью ударные волны, которые отталкивают тех, чья кровь используется. 
                Поскольку человек на 80% состоит из воды, то атаки эти очень эффективны против людей, которые застрахованы от обычных ударов.
                <ul class="listing">
                    <li><span class="l"><strong>Hyakumaigawara Seiken (百枚瓦正拳 Hyakumaigawara Seiken, англ. дословно означает "Удар, пробивающий 100 плит")</strong>: Мощный удар, который способен отправить противника в полёт на значительное расстояние - 0 баллов</span></li><br />
                    <li><span class="l"><strong>Wanto Giri (腕刀斬り Wantō Giri, англ. дословно означает "Взмах Стального Клинка"):</strong>&nbsp;Удар, которым рыбочеловек поражает противника своей рукой-плавником в заднюю часть шеи - 0 баллов(могут использовать все рыболюди имеющие плавники)</span></li><br />
                    <li><span class="l"><strong>Kaisoku: Harakudashigeri (海速 腹下し蹴り Kaisoku: Harakudashigeri, англ. дословно означает "Скоростной Удар Моря в Желудок"):</strong>&nbsp;При данной атаке рыбочеловек с размаху бьет соперника в нижнюю часть живота, заставляя того скрючится - 0 баллов</span></li><br />
                    <li><span class="l"><strong>Ka Ka Kakato Otoshi (火華カカト落とし Ka Ka Kakato Otoshi, англ. дословно означает "Пылающий Цветок: Удар Пяткой"):</strong>&nbsp;При данной атаке рыбочеловек, находясь под водой, бьет соперника ногой в грудь или спину, концентрируя силу удара в пятке ноги - 0 баллов</span></li><br />
                    <li><span class="l"><strong>Kachiage Haisoku (カチ上げ背足 Kachiage Haisoku, англ. дословно означает "Удар Восходящего Солнца"):</strong>&nbsp;При данной атаке рыбочеловек, находясь под водой, жестко бьет соперника ногой в подбородок - 0 баллов</span></li><br />
                    <li><span class="l"><strong>Jodan Bakusho (上段爆掌 Jōdan Bakushō, англ. дословно означает "Взрывоопасная Ладонь"):</strong>&nbsp;При данной атаке рыбочеловек, находясь под водой, бьет соперника раскрытой ладонью в подбородок - 0 баллов</span></li><br />
                    <li><span class="l"><strong>Appakushi Chokka Koro (圧迫死直下航路 Appakushi Chokka Kōro, англ. дословно означает "Смертельное Давление"):</strong>&nbsp;Находясь под водой, рыбочеловек хватает соперника и на огромной скорости мчится ко дну океана (или любого другого водоема), где давление крушит внутренности схваченного - 0 баллов</span></li><br />
                    <li><span class="l"><strong>Kaimen Wari (海面･割り Kaimen Wari, англ. дословно означает "Рассечение Поверхности Океана"):</strong>&nbsp;При данной атаке рыбочеловек, используя стандартный удар из каратэ, рассекает поверхность водной глади, создавая волну, сносящую соперника - 0 баллов</span></li><br />
                    <li><span class="l"><strong>Umidaiko (海太鼓 Umidaiko, англ. дословно означает "Морской Барабан"):</strong>&nbsp;Рыбочеловек наносит удар по воде перед собой, тем самым создавая ударную волну, которая попадает в противника нанося большой ущерб - 0 баллов</span></li><br />
                    <li><span class="l"><strong>Samehada Shotei (鮫肌掌底 Samehada Shōtei, англ. дословно означает "Акулий блок ладонью"):</strong>&nbsp;Простой блок ладонью, с силой достаточной, чтобы отбросить меч, которым с размаху атаковал Гекко Мория, усиленный украденными тенями дозорных - 5 баллов</span></li><br />
                    <li><span class="l"><strong>Uchimizu (撃水 Uchimizu, англ. дословно означает "Водяной выстрел"):</strong>&nbsp;Рыбочеловек бросает простую каплю воды с огромной силой Рыбочеловека, так, что она может стать смертельной пулей. Пример: Дзимбей впервые использовал ее, чтобы остановить аналогичную атаку Ходи, когда тот бросил Uchimizu в Сирахоси - 5 баллов</span></li><br />
                    <li><span class="l"><strong>Soshark (粗鮫（ソシャーク） Soshāku, англ. дословно означает "Укус акулы"):</strong>&nbsp;Рыбочеловек использует захват кистью огромной силы для того чтобы разрушить большие каменные стены, или сломать кости врагу - 10 баллов</span></li><br />
                    <li><span class="l"><strong>Yabusame (矢武鮫 Yabusame, англ. дословно означает "Акульи Стрелы"):</strong>&nbsp;Рыбочеловек сначала смачивает руки, после чего он использует свою огромную силу, чтобы бросить множество капель воды, которые в полёте преобразуются в смертельные стрелы посредством кинетической силы - 15 баллов</span></li><br />
                    <li><span class="l"><strong>Yarinami (槍波 Yarinami, англ. дословно означает "Водяное Копьё"):</strong>&nbsp;Техника, используемая на поверхности воды.Пример: Дзимбэй поднимает воду в форме копья с такой силой, что пробивает дыру в твердых конструкциях. В аниме, Дзимбэй выполняет этот приём после создания водоворота, а потом добравшись до него основания, он своими перепончатыми руками бросает его в цель в виде вращающегося циклона воды. Впервые техника использована против морских пехотинцев на борту линкора, сильно его повредив - 15 баллов</span></li><br />
                    <li><span class="l"><strong>Senmaigawara Seiken (千枚瓦正拳 Senmaigawara Seiken, англ. дословно означает "Удар, пробивающий 1000 плит"):</strong>&nbsp;Гораздо более сильная версия атаки&nbsp;<strong>"Hyakumaigawara Seiken".</strong>&nbsp;Курооби утверждает, что эта атака является "Истинной сущностью каратэ Рыболюдей" - он может пробить 1000 кирпичей и убить человека (чаще всего не распространяется на игроков) одним ударом - 20 баллов</span></li><br />
                    <li><span class="l"><strong>Samegawara Seiken (鮫瓦正拳 Samegawara Seiken, англ. дословно означает "Акулий кулак Истины"):</strong>&nbsp;Мощный прямой удар, достаточно сильный, чтобы после него, например, Гекко Мория, усиленный тенями пошатнулся. Неизвестно насколько сильна эта техника, по сравнению с его "Karakusagawara Seiken" или же "Gosenmaigawara Seiken". Позже, когда эта техника используется против Луффи, Дзимбэй запускает ударную волну на некотором расстоянии от него, управляя водяным паром в окружающем воздухе, при этом повреждает даже резиновое тело капитана Соломенных Шляп, невосприимчивое к обычным атакам - 20 баллов</span></li><br />
                    <li><span class="l"><strong>Karakusagawara Seiken (唐草瓦正拳 Karakusa-gawara Seiken, англ. дословно означает "Arabesque Tile True Punch"):</strong>&nbsp;Рыбочеловек наносит удары на определённом расстоянии от намеченной цели, поэтому вместо физической атаки, соприкасающейся с противником, он использует водяной пар в воздухе, чтобы выпустить ударную волну, которая отправляет её в полёт. Эта атака похожа на приём Бартоломью Кумы "Pad Ho", с той лишь разницей, что ударные волны не сконцентрированы после высвобождения; но в обмен, она имеет гораздо более широкую область поражения. Эта атака имеет отсроченный эффект, так как ударная волна требует времени, чтобы повлиять на противника(ов) - 30 баллов</span></li><br />
                    <li><span class="l"><strong>Yonsenmaigawara Seiken (四千枚瓦正拳 Yonsenmai-gawara Seiken, англ. дословно означает "Удар, пробивающий 4000 плит"):</strong>&nbsp;Гораздо более сильная версия "Senmaigawara Seiken". Это очень мощный прямой удар, который посылает противника в полет - 35 баллов</span></li><br />
                    <li><span class="l"><strong>Gosenmaigawara Seiken (五千枚瓦正拳 Gosenmai-gawara Seiken, англ. дословно означает "Удар, пробивающий 5000 плит"):</strong>&nbsp;Гораздо более сильная версия "Senmaigawara Seiken". Это очень мощный удар, способный нокаутировать таких сильных существ, как, например, Демоны-стражники из Импел Дауна за один удар. Эта атака не простой прямой удар, а представляет собой апперкот, отправляющий противника в полёт. Впервые он был использован против Миноносорога на 4-ом уровне Импел Дауна . Учитывая название, возможно, что эта техника в пятьдесят раз сильнее, чем атака Курооби "Hyakumaigawara Seiken" в пять раз и чем его "Senmaigawara Seiken", и способна пробить 5000 плит. В аниме, Дзимбэй использует разновидность техники, которая начала ударную волну, только на этот раз не было показано его замедленного действие - 50 баллов</span></li><br />
                    <li><span class="l"><strong>Nanasenmaigawara Mawashigeri (七千枚瓦回し蹴り Nanasenmai-gawara Mawashigeri, англ. дословно означает "Удар с разворота, пробивающий 7000 плит"):</strong>&nbsp;Рыбочеловек выполняет удар с разворота ногой такой силы, что отбивает удар рукой гигантского Вадацуми под действием энергетических стероидов и повреждает ему пальцы - 50 баллов</span></li><br />
                    <li><span class="l"><strong>Gyojin Karate Ogi: Buraikan (魚人空手「奥義」武頼貫 Gyojin Karate Ōgi: Buraikan, англ. дословно означает "Секретная техника каратэ Рыболюдей: Мощное Пронизывание"):</strong>&nbsp;Возможно, самая сильная техника каратэ Рыболюдей показанная на данный момент. Рыбочеовек собирает большую сферу воды на своей руке и бросает в противника, при попадании она создает огромную ударную волну, пробивает тело и вылетает с другой стороны. Атака настолько мощная, что пробила Вадацуми в его гигантской форме - 50 баллов</span></li>
                </ul>
                <center><strong>Джиу-джитсу Рыболюдей</strong></center><br />
                <div className='text-gray'><em><strong>Доступ к джиу-джитсу открывается на 20 баллах способности "чистокровный рыбочеловек" и открывает для вас новые возможности в управлении водой. Соответственно, это искусство для людей и других рас недоступно.</strong></em></div>
                <br />
                <br />
                Является еще одним боевым искусством, которое практикуется у рыболюдей, совместно с Каратэ Рыболюдей. Это подводный стиль, сосредоточенный на манипулировании водой вокруг себя словно она является твердым материалом, подверженным деформации. Как рыболюди способны делать это, неизвестно, но это дает им огромное преимущество в бою под водой. Однако чтобы использовать Джиу-джитсу Рыболюдей, не обязательно полностью погружаться в воду, например, Ходи на борту Ноя, используя "Murasame", погружал в воду только руки.
                <ul class="listing">
                <li><span class="l"><span class="l"><strong>Mizugokoro (水心 Mizugokoro?, дословно означает "Сердце Вод"):</strong>&nbsp;Основная техника данного стиля, в которой пользователь, находясь в воде, начинает выполнять чашеобразное движение своими перепончатыми руками перед тем, как дать воде вокруг мощный толчок. Это позволяет пользователю физически захватывать и перенаправлять потоки воды, как будто он манипулирует тканью.</span></span>
                <ul class="listing">
                <li><span class="l"><strong>Kairyu Ipponzeoi (海流一本背負い Kairyū Ipponzeoi?, дословно означает "Бросок морского течения"):</strong>&nbsp;Техника выполняется после "Mizugokoro". Рыбочеловек, находясь под водой, бросает водный поток вверх, где он извергается с поверхности океана в виде водного столба.Также умельцы могут создать несколько потоков одновременно.</span></li>
                <li><span class="l"><strong>Murasame (群鮫 Murasame?, дословно означает "Стая Акул"):</strong>&nbsp;Техника выполняется после "Mizugokoro". Рыбочеловек бросает воду, принимающую форму акул, которые атакуют противника. По сути, это более мощная версия техники Рыбокаратэ "Yabusame".</span></li>
                </ul>
                </li>
                </ul>
            </Div>
        </Group>
        <Button size="m" onClick={() => routeNavigator.back()} className='back-button'>Назад</Button>
    </Panel>
  )
}