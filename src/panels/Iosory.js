import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Accordion } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import './App.css';

export const Iosory = ({ id }) => {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
        <PanelHeader>Ёсо-рю</PanelHeader>
        <Button size="m" onClick={() => routeNavigator.push({pathname: '/abilities'})} className='back-button'>Назад</Button>
        <Group>
            <Div>
                <div style={{fontSize: '18px'}}><b>Стихийное фехтование</b></div>
                <br />
                <br />
                <div className='gray-block'>
                    <b><i>Ёсо-рю</i></b> – дословно «стихийный поток» - основополагающая взятой способности и считается единым целым.
                </div>
                <br />
                <br />
                Ёсо-рю – это навык, который не может быть взят не имея базовой способности фехтования, а также не улучшает ту и не 
                предоставляет улучшения физического тела. Однако, в полной мере расширяет функционал мечников, позволяя использовать 
                четыре базовые стихии: огонь, воду, землю и ветер. Использование и различные возможности с заявленными элементами 
                описаны ниже, как базовое понимание и максимальное допущение опций с использованием стихий. И хоть допускается 
                возможное расширение или преобразование путем индивидуального мастерства персонажей, - техник игрока, - в 
                действительности выйти за расписанные рамки не выйдет.
                <br />
                <br />
                Дабы овладеть <i>Ёсо-рю</i> достаточно иметь слот <i>Стихийного фехтования</i> и выбрать нужную Вам стихию. Важным будет упомянуть, 
                что данный слот возможно взять только с выходом на Гранд Лайн – достижениям Мыса или же имея 10 баллов на навыке 
                фехтования. Возымев нужный слот Ваш персонаж получает открытие пути Ёсо-рю, которое разбивается на четыре 
                направления: <b>Hi-ryu [火流], Suiryu [水流], Furyu [風流], Sekiryu [石流].</b>
                <br />
                <br />
                Выбрав одно направление – Ваш персонаж обучается и проходит тернии освоения только его на протяжении определенного количества 
                времени. Таким образом следующее направлении Вы сможете взять только по истечению 25-ти баллов на Стихийном фехтовании. 
                После достижения этой планки Вы можете изучить новый путь, открывая для себя новую стихи, которую Ваш герой также изучает на 
                протяжении некоторого времени, что позволит взять третью стихию еще через 25 баллов. Таким образом все четыре пути герой 
                сможет изучить по достижению 100 баллов.
                <br />
                <br />
                Несмотря на то, что способность требовательная к развитию и имеет ряд ограничений, получаемые бонусы оправдывают рост. 
                И хоть достоверно неизвестно, по какому принципу в каноне получается достичь мастерства, способного опалить лезвие, 
                мы решили упустить данную условность, демонстрируя уже доступный функционал на каждом пути развития отдельно взятого пути.
                <br />
                <br />
                <Accordion>
                    <Accordion.Summary iconPosition="before"><b>• Hi-ryu [火流] – «огненный поток».</b></Accordion.Summary>
                    <Accordion.Content>
                        <Div>
                            Способность фехтовальщиком опалять свой клинок, подчиняя огонь в незначительной степени, позволяя себе использовать 
                            пламя с мечом. Не имея клинка – мечник лишается своего орудия, словно рук, теряя опцию использовать навык.
                        </Div>
                    </Accordion.Content>
                </Accordion>
                <Accordion>
                    <Accordion.Summary iconPosition="before"><b>• Suiryu [水流] – «водный поток».</b></Accordion.Summary>
                    <Accordion.Content>
                        <Div>
                            Собирая влагу из воздуха мечник способен использовать всю гибкость и уникальные свойства жидкой воды, наполняя 
                            ею свое острие. Не имея клинка – мечник лишается своего орудия, словно рук, теряя опцию использовать навык.
                        </Div>
                    </Accordion.Content>
                </Accordion>
                <Accordion>
                    <Accordion.Summary iconPosition="before"><b>• Furyu [風流] – «воздушный поток».</b></Accordion.Summary>
                    <Accordion.Content>
                        <Div>
                            Несмотря на то, что уже с определенной планки каждый мечник в том или ином виде подчинил себе воздух, 
                            позволяя создавать воздушные лезвия, с навыком Фурю – человек становится поистине опасным мастером слешей. 
                            Но, как и все фехтовальщики, без своего меча – лишь роскошный авантюрист, способный убегать.
                        </Div>
                    </Accordion.Content>
                </Accordion>
                <Accordion>
                    <Accordion.Summary iconPosition="before"><b>• Sekiryu [石流] – «каменный поток».</b></Accordion.Summary>
                    <Accordion.Content>
                        <Div>
                            Земля – это уверенная почва под ногами. Фехтовальшик, что обуздал Секирю – обуздал мощь камня, его стойкость 
                            и жесткость. Удары сильны и тяжелы, словно мощь горы опускается на оппонента. Но забрать меч и кто ты без него?
                        </Div>
                    </Accordion.Content>
                </Accordion>
                <br />
                <br />
                <div className='gray-block text-center'>
                    НОЛЬ – ПЯТЬ БАЛЛОВ.
                </div>
                <br />
                <br />
                На данном этапе каждый обладатель стихийного фехтования только обучается владению нового пути. Вам еще недоступны основные 
                возможности техник, но Вы стараетесь и готовы к новым достижениям.
                <br />
                <br />
                <ul>
                    <li><b>Hi-ryu</b> – на этом этапе фехтовальщик способен нагревать свое лезвие, что держит в руках до незначительных температур, 
                        не выше 200 градусов. Вы еще не можете сформировать языки пламени, но прижечь рану или обжечь кого-то порезом – вполне.</li>
                    <br />
                    <li><b>Suiryu</b> – на этом этапе мечник начинает понимать, что он достаточно искусный, чтобы сохранять влагу на клинке, который 
                        находится в его руках. Он способен, намочив лезвие, сохранить тонкую пелену воды на металле, которая не слетает от взмахов. 
                        И лишь ему решать, что с этим делать. Ничего?</li>
                    <br />
                    <li><b>Sekiryu</b> – на этом этапе фехтовальщик чувствует, что может передать твердость и мощь земли своему лезвию, своей стойке и своим 
                        навыкам. Ощущение граничит с незначительным увеличением эффективности парирования, а самого мечника становится сложнее 
                        сдвинуть с места.</li>
                    <br />
                    <li><b>Furyu</b> – ветер и воздух – везде. Он есть повсюду, вокруг Вас, и вы начинаете осознавать, что своими взмахами Вы можете его 
                        подчинять. Пока что это не уходит дальше несущественных порывов, которые могут сдуть прядь волос с лица противника, а 
                        воздушные лезвия, что уже подвластны за счет Фехтования, никак не меняются.</li>
                </ul>
                <br />
                <br />
                <div className='gray-block text-center'>
                    ПЯТЬ – ДЕСЯТЬ БАЛЛОВ.
                </div>
                <br />
                <br />
                <ul>
                    <li><b>Hi-ryu</b> – вторая ступень развития пути, которая определяет вас, как уже сносного мастера Хи-рю. На этом этапе вы способны 
                        уже опалять свое лезвие, сдерживая огонь до 500 градусов на клинке и разрезать пламя. Огонь на лезвии не причиняет неудобств вашей руке.</li>
                    <br />
                    <li><b>Suiryu</b> – солидный путь тренировок пройдет и вот Вы уже способны преображать воду на клинке не только задерживая её там, 
                        но и собирая её из окружения. Но даже этого Вам оказалось мало, и вы делаете свой клинок острее, сжимая воду таким образом, чтобы 
                        она могла наносить более глубокие ранения оппоненту.</li>
                    <br />
                    <li><b>Sekiryu</b> – земля и Вы – одно целое. Фигурально, конечно, но на этом этапе пробить Ваше парирование или оттолкнуть, сдвинуть 
                        меч, а также увести в сторону Вашу атаку – едва ли возможная задача. Любой противник, которым Вам встретится, столкнется со скалой, 
                        опрокинуть которую будет просто невозможно.</li>
                    <br />
                    <li><b>Furyu</b> – Вы – мастер ветра. Вы можете задерживать воздух вокруг своего лезвия, отчего к клинку прикоснуться становиться 
                        сложнее. Более того, теперь вы можете задавать движение ветру вокруг клинка, незначительно расширяя его до пары сантиметров и 
                        парируя атаки еще эффективней. Удержать ваш клинок другим клинком становится непосильной задачей, ведь последний буквально сметает.</li>
                </ul>
                <br />
                <br />
                <div className='gray-block text-center'>
                    ДЕСЯТЬ – ДВАДЦАТЬ БАЛЛОВ.
                </div>
                <br />
                <br />
                <ul>
                    <li><b>Hi-ryu</b> – предпоследняя планка выдающегося «Мастера огня», которая предоставляет Вам доступ к огненным атакам. Будь то 
                        огненное лезвие, что Вы отправите в путь, разрезая и сжигая своих врагов или же просто огненное лезвие – неважно. Температура 
                        пламени поднимается до 800 градусов и атаки становятся крайне неприятными. Правда, ваши дальнобойные «слеши» все еще будут 
                        примитивными и прямолинейными. Но это лишь значит, что вам есть куда расти. Но не грустите, ведь главное – подобную атаку 
                        встречным «слешом» без сопутствующих навыков уже не остановить, не имея перевеса в силе.</li>
                    <br />
                    <li><b>Suiryu</b> – мастерство Суирю достигает небывалых вершин. Вода – часть Вас, продолжение клинка, которое подвластно 
                        мастеру. Она также гибка и опасна, не теряет своей смертоносности, остроты. Да, она не прочна, не хватает Воли, но 
                        теперь Ваше лезвие не граничит металлом. Удлинить или расширить его – без проблем. Вплоть до пяти метров жидкость будет 
                        подчиняться руке фехтовальщика и его клинку. Изменить вектор движения? Ваши возможности огромны, ведь бывалый путь тренировок позади.</li>
                    <br />
                    <li><b>Sekiryu</b> – крепость камня отныне пройденный этап и Вас подвластно использование полученных навыков в атакующем направлении. 
                        Ваши удары становятся не только невозможными для перенаправления, но и прибавляют в весе. Каждый удар сверху – вниз словно тянет 
                        клинок к земле, а горизонтальные взмахи становятся на порядок сильнее. Удержать напор такого клинка – весьма непростая задача, ведь 
                        каждый удар на 20% тяжелее в соотношении с Вашим уровнем сил.</li>
                    <br />
                    <li><b>Furyu</b> – ветер все лучше и лучше покоряется Вам. Теперь Вы способны изменить свои воздушные атаки на дистанции или в близи. 
                        Создать ветряный щит взмахом клинка? Отправить в полет воздушный шар с дробящим уроном? Направить сметающий врагов поток ветра? 
                        Природа Ваших атак отныне непредсказуема и лишь от Вас зависит, что сотворить со своими новыми возможностями.</li>
                </ul>
                <br />
                <br />
                <div className='gray-block text-center'>
                ДВАДЦАТЬ – ДВАДЦАТЬ ПЯТЬ БАЛЛОВ.
                </div>
                <br />
                <br />
                <ul>
                    <li><b>Hi-ryu</b> – пик мастерства для огненного пути. Температура пламени поднимается до 1 300 градусов. Вы полноценно можете 
                        совмещать свои навыки фехтования с Хи-рю, создавая мощные огненные вихри или различные режущие атаки из огня.</li>
                    <br />
                    <li><b>Suiryu</b> – последняя стадия Вашего таланта Суирю. Теперь Вы не скованны лишь клинком и его продолжением. Водные слеши 
                        пусть и будут прямолинейными и простыми, но уже несут серьезную опасность для врага, ведь режут куда пуще прочих.</li>
                    <br />
                    <li><b>Sekiryu</b> – когда люди увидят Вас с клинком в руках, не удивляйтесь, если спутают с горой. Иначе мастера этого пути 
                        и не выглядят. Помимо прочих преимуществ, ваши атаки становятся на 30% тяжелее в ударе и остановить такой клинок – далеко не 
                        каждому под силу.</li>
                    <br />
                    <li><b>Furyu</b> – ветер и клинок – одно целое. Вы способны использовать окружающие Вас воздушные массы так, как будет угодно, 
                        а дистанционные атаки становятся на 20% эффективней.</li>
                </ul>
                <br />
                <br />
                <u>Стихийное фехтование</u> – это способность, которая требует много внимания к ею пользователю. Солидной доли воображения и таланта. 
                Получаемые общедоступные преимущества – лишь основа для каждого игрока. Но некоторые условности необходимо все же помнить:
                <ul className='text-gray'>
                    <li>
                        ТОЛЬКО ВЫ РЕШАЕТЕ, В КАКОЙ ПОСЛЕДОВАТЕЛЬНОСТИ ОТКРЫВАТЬ НАПРАВЛЕНИЯ ЁСО-РЮ И ПРИ ДОСТИЖЕНИИ ПЛАНКИ ОБЯЗАНЫ СООБЩИТЬ 
                        ОБ ЭТОМ АДМИНИСТРАЦИЮ. 
                    </li>
                    <br />
                    <li>
                        КАЖДЫЙ НОВЫЙ ПУТЬ И ЕГО ИЗУЧЕНИЕ ПОЛУЧАЕТСЯ ЧЕРЕЗ СООТВЕТСТВУЮЩИЙ КВЕСТ НА ЧЕТЫРЕ ТЫСЯЧИ СЛОВ. КВЕСТ СЧИТАЕТСЯ ЧАСТЬЮ ОП.
                    </li>
                    <br />
                    <li>
                        ОДИН КЛИНОК – ОДИН ПУТЬ. КОМБИНАЦИИ РАЗЛИЧНЫХ ПУТЕЙ ВОЗМОЖНО ЛИШЬ ПОСЛЕДОВАТЕЛЬНЫМИ АТАКАМИ И ПЕРЕХОДАМИ ИЗ ОДНОГО СТИЛЯ В 
                        ДРУГОЙ. СОВМЕСТИТЬ НА ОДНОМ КЛИНКЕ СУИРЮ И ХИ-РЮ, А ТАКЖЕ ДРУГИЕ ВАРИАЦИИ – НЕ ПРЕДСТАВЛЯЕТСЯ ВОЗМОЖНЫМ. ОТНЫНЕ БОЛЬШЕ МЕЧЕЙ 
                        – БОЛЬШЕ ПРОФИТА?
                    </li>
                    <br />
                    <li>
                        СПОСОБНОСТЬ РАСПРОСТРАНЯЕТСЯ ТАКЖЕ НА ДРЕВКОВОЕ ОРУЖИЕ АНАЛОГИЧНО КЛИНКАМ ФЕХТОВАЛЬЩИКА.
                    </li>
                </ul>
            </Div>
        </Group>
        <Button size="m" onClick={() => routeNavigator.push({pathname: '/abilities'})} className='back-button'>Назад</Button>
    </Panel>
  );
};