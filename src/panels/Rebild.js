import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Accordion } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import './App.css';


export const Rebild = ({ id }) => {
  const routeNavigator = useRouteNavigator();
  const open = true;

  return (
    <Panel id={id}>
        <PanelHeader>Система восстановления</PanelHeader>
        <Button size="m" onClick={() => routeNavigator.back()} className='back-button'>Назад</Button>
        <Group>
            <Div>
                <strong>Система восстановления</strong>
                <br />
                <br />
                Система Восстановления предполагает, что любой игрок, прошедший за своего персонажа ряд 
                испытаний и приключений, имеет право закрепить за собой полученный опыт и время, проведенное 
                в ролевой. В данном случае рассматривается возможность сохранения за игроком ресурсов, которые 
                были получены путем полноценной игры и написания квестов, со всеми их вытекающими. К подобным 
                ресурсам относятся баллы, как полученный элемент в ходе игры; слоты способностей, как результат 
                пройденного этапа за персонажа, будь то Мыс Гранд Лайн, пиратская награда или предписанное 
                звание в рамках своей фракции; некоторые исключительные предметы, которые были получены в игре, 
                а порядок их сохранения определяется администратором при внесении заявки для замены персонажа.
                <br />
                <br />
                Иными словами: игрок может в ходе игры заменить существующего персонажа на другого, сохранив 
                при этом часть полученных преимуществ, на которые были затрачены силы и средства. Однако у подобной 
                системы существует ряд условностей, которые будут сохранены и наложены при Восстановлении опыта 
                на новом персонаже:
                <ul class="listing">
                    <li><span class="l">При подобной замене, новый персонаж не получает все баллы старого персонажа. При первой замене каждая способность в индивидуальном порядке на новом персонаже срезается до 75% от изначального уровня. Более того, такие способности, как логия, мифический зоан и воли могут получить более серьезный срез, что определяется соответствующим администратором в зависимости от описания вашей биографии, а также упоминании этих навыков в ней.</span></li>
                    <br />
                    <li><span class="l">Система Восстановления привязывается непосредственно к одному персонажу игрока, что отводит к возможности повторить замену другого персонажа. При повторном использовании персонажем системы восстановления &ndash; срез баллов увеличивается до 50% от имеющегося уровня. А за третий раз до 25%, в последующем за каждую смену возможно восстановить не более 10% от изначального показателя способности.</span></li>
                    <br />
                    <li><span class="l">В случае, если персонаж был утерян в рамках классического PvP, то есть в сражении с другим игроком, ролевая допускает применение системы с восстановлением преимуществ старого героя. Однако в этом случае срез баллов будет составлять 50% от изначального показателя.</span></li>
                    <br />
                    <li><span class="l">Количество слотов, которое будет перенесено на нового персонажа определяется исключительно старым героем в равной степени. Важным будет упомянуть, что способности можно менять без ограничений, однако только при соблюдении остальных правил ролевой. То есть при отсутствии квеста на конкретные навыки: воля наблюдения, воля вооружения или же логия &ndash; получить данные умения на новом герое будет невозможно.</span></li>
                    <br />
                    <li><span class="l">Поскольку количество слотов способностей передаются на нового персонажа, его история и пройденный путь, при появлении, должен включать в себя этапы прохождения соответствующих пунктов. Если старый герой уже бывал на Мысе Гранд Лайн &ndash; новый персонаж также получил способность, проходя этот путь. Тоже самое относится и к нейтральным островам, за которые будет невозможно получить бонусный балл за посещение острова. Исключением из этого пункта являются те персонажи, которые получили слот в ограниченном порядке: Йонко, Шичибукай и т.д., ведь количество таких героев в мире предопределено. Из этого следует, что при замене, новые герои теряют этот титул, как и все прерогативы, полученные за них.</span></li>
                    <br />
                    <li><span class="l">Особые предметы, а также белли и именное оружие, в таком случае, не передаются на нового персонажа. Решение о том, какие именно вещи можно будет сохранить после замены, принимает непосредственно квестолог.</span></li>
                    <br />
                    <li><span class="l">Администрация не исключает возможность передачи предметов старого персонажа посредством других героев, игроков. Однако подобное проявление должно быть логически аргументировано в рамках вашей истории.</span></li>
                    <br />
                    <li><span class="l">Волю, в условиях наличия одной из них, после смены можно менять на другой тип. Порядок среза будет определять администратор в индивидуальном порядке.</span></li>
                    <br />
                    <li><span class="l">Персонажи, имеющие ботов в своем попечении, после замены героя, несмотря на звание, награду и прочие имущие &ndash; теряет оных, а также возможность получения их &laquo;за кадром&raquo;.</span></li>
                    <br />
                    <li><span class="l">В рамках замены игрок обязывается логически завершить историю старого персонажа, который в последующем уже не может вернуться в игру, дабы не нарушать логический игровой порядок. При этом новый персонаж, уже имеющий определенный уровень сил, должен быть логически введен в игру. Такой герой, в особенности имеющий высокий показатель уровня сил, не может возникнуть из пустоты, его биография должна выполнять все причинно-следственные связи, вплоть до начала игры. Это также касается получения тех или иных способностей в ходе закадрового приключения. Подобная условность будет в особом порядке проверяться администрацией, которая может отказаться в замене без объяснения причин.</span></li>
                    <br />
                    <li><span class="l">Порядок стартовой локации для каждого персонажа может отличаться, в зависимости от пройденного пути старым героем. Однако, чаще всего для тех, кто прошел Мыс Гранд Лайн &ndash; это один из нейтральных островов, а для тех, кто остается в одном из четырех морей &ndash; любой из островов другого моря, отличное от того, в котором пребывал предыдущий персонаж. В индивидуальном порядке допускается отхождение от этого условия, при наличии должной аргументации или важности для игрока.</span></li>
                    <br />
                    <li><span class="l">Существует возможность замены персонажа на одного из имеющихся ботов в подчинении этого героя. В таком случае, обычно, история этого бота уже предписана, а его баллы фиксированы и становятся для вас основой. При этом количество слотов, как и способности, закрепляются за новым персонажем в том виде, в котором их имел бот.</span></li>
                    <br />
                    <li><span class="l">В случае подобной замены новый персонаж, очевидно, имея историю &ndash; имеет и развитие в той или иной фракции, в особенности сохраняя полученные способности. Для пиратов, что получили способность с награды, получение повторно способности невозможно. При этом их награда может отличаться от той, что была у персонажа, в зависимости от построенной предыстории героя и решения квестолога. Аналогичные меры существуют и для других фракций, где звание определяет ответственный администратор.</span></li>
                    <br />
                    <li><span class="l">Существует четкие временные рамки, в которые игрок должен подать заявку администратору для проведения замены персонажа после потери старого персонажа тем или иным путем. Они составляют две недели.</span></li>
                    <br />
                    <li><span class="l">Исходя из того, что старая история персонажа была завершена, необходимо учитывать невозможность взять на нового персонажа ту же внешность, при отсутствии заведомо существующего брата/сестры близнеца.</span></li>
                    <br />
                    <li><span class="l">Игрок обязывается, подавая запрос на замену персонажа, предоставить полную информацию со своего личного дела о том, какие вещи и предметы он желает оставить, а также было ли посещение нейтральных островов. В личном деле обновленных персонажей будет помечаться использование Системы Восстановления.</span></li>
                    <br />
                    <li><span class="l">Если персонаж передан игроку, который желает сделать замену персонажа, то для получения разрешения на таковой необходимо заработать 5 баллов игровым путём (Островные, морские приключения, рейды и т.д.).</span></li>
                </ul>
                Для подачи заявки от игрока требуется написать администратору, внося ссылку на личное дело персонажа, его анкету, личное дело всех ботов, ссылку на личное дело корабля, возможные занятые фрукты, а также ссылку на пост в котором игрок выводит из игры действующего персонажа. После одобрения в течении двух недель необходимо подать анкету на нового персонажа, с пометкой в шапке о том, что данный персонаж создается в рамках данной системы.
            </Div>
        </Group>
        <Button size="m" onClick={() => routeNavigator.back()} className='back-button'>Назад</Button>
    </Panel>
  );
};