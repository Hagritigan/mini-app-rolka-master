import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Accordion } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import './App.css';


export const Equipment = ({ id }) => {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
        <PanelHeader>Снаряжение</PanelHeader>
        <Button size="m" onClick={() => routeNavigator.back()} className='back-button'>Назад</Button>
        <Group>
            <Div>
            <strong>11.1 Снаряжение.</strong>&nbsp;Этот пункт меню полностью посвящен тому, что находится в &laquo;инвентаре&raquo; вашего персонажа, в его ЛД, и касается именно тех вещей и существ, которые будут у вас в нём прописаны.
            <div align="left">Конкретно снаряжением является тем, чем снаряжен ваш персонаж. За всю свою игру вы лишь единожды должны уточнить этот список, а затем, по ходу игры, можете его менять по собственному желанию (с разрешения администрации, если дело касается особого оружия или брони). В данном случае, снаряжение &ndash; то, с чем начинает персонаж: наличие у него карты, компаса, оружия (меч\пистолет\кастеты и тд) и прочее. Вы снабжаете персонажа вещами, с которыми обычно ходит персонаж, и, следовательно, в него не должны входить какие-то громоздкие вещи.</div>
            Обычный стартовый набор, с которым начинает персонаж, состоит из:
            <ul class="listing">
                <li><span class="l">50.000 белли (как в игре, так и в ЛД. Возможно, это единственный момент за всю игру, когда деньги вашего персонажа в игре равны тем деньгам, что прописаны в ЛД).&nbsp;<span class="wk_gray">Следует уточнить, что в ЛД указывается сумма денег, которая используется не персонажем, а игроком. За них вы можете приобрести какие-либо товары из&nbsp;<a href="https://vk.com/page-36291248_54057426">магазина</a>&nbsp;и&nbsp;<a href="https://vk.com/page-36291248_50636976">черного рынка</a>, вливать их в развитие *собственного острова, либо передавать другому персонажу с помощью&nbsp;<a href="https://vk.com/page-36291248_54069344">почты Джох-птицы</a>. Седьмая часть фразы: "может быть". Любые финансовые траты и приобретения персонажа по ходу игры не вписывается в ЛД (бывают и исключения).</span></span></li>
                <li><span class="l">Маленькая аптечка: перевязочный материал (бинты), средства для остановки кровотечения и обработки ран (жгут, вата\ватные диски\ватные или марлевые тампоны), антисептик (перекись водорода, йод, зеленка), смоченные ватные тампоны нашатырным спиртом (в баночке), любой стандартный анальгетик, ножницы и пинцет.</span></li>
                <li><span class="l">Сумка\рюкзак\портфель\мешок или другие приспособления, с помощью которых ваш персонаж может переносить вещи, не умещающиеся в руки, в количестве одной штуки.</span></li>
                <li><span class="l"><span class="l">Оружие. Дабы не было неразберихи и просто глупых ситуаций, взять можно только два оружия из следующих типов:</span></span>
            <ul class="listing">
                <li><span class="l">холодное оружие, включая парное (от ножей до изысканных катан)</span></li>
                <li><span class="l">древковое оружие (копье, алебарда, прочее)</span></li>
                <li><span class="l">стрелковое оружие (огнестрельное и не огнестрельное)</span></li>
                <li><span class="l">оружие для ведения боя на кулаках (перчатки, кастеты, прочее)</span></li>
                <li><span class="l">метательное оружие количеством не более 5 штук (ножи, сюрикены, прочее)</span></li>
            </ul>
            </li>
                <li><span class="l">Различный инструментарий, обоснованный принадлежностью вашего персонажа к какой-либо профессии (небоевой навык): расширенная аптечка у врачей, соответствующие базовые наборы инструментов у кузнеца, плотника или инженера, музыкальный инструмент у артиста и тд.</span></li>
                <li><span class="l">Другое: книги, еда, особые украшения и прочее.</span></li>
            </ul>
            <center><strong>Возможны, но не обязательны для взятия:</strong></center>
            <ul class="listing">
                <li><span class="l">Броня (от легкого до тяжелого типов). Следует помнить, что, т.к. это относится к стартовому снаряжению, крепкой она вряд ли будет. Её наличие также влияет на маневренность персонажа. Иными словами, чем тяжелее броня &ndash; тем медленнее и неряшливее персонаж. В битвах свою роль это сыграть может.</span></li>
                <li><span class="l">Небоевые питомцы (один. Его размер не должен превышать размеров собаки средних пород), либо средство передвижения в виде питомца (не больше лошади).</span></li>
                <li><span class="l">Бутылка какого-либо алкоголя.</span></li>
            </ul>
            <strong>11.2 Боевые и небоевые питомцы, боты.</strong>&nbsp;Ни для кого не секрет, что в ролевой можно приобрести для своего персонажа бота или питомца, и этот пункт правил поможет, наконец, разобраться, кто чем является. Питомцы и боты &ndash; одно и то же, с отличием в виде выбранного вами живого существа. Питомцы не могут излагать свою мысль, имеют примитивный животный инстинкт и повадки, боты &ndash; в большинстве своём гуманоидные виды, имеют собственную личность, могут говорить и тд.
            <div align="left">Как и питомцы, так и боты могут быть боевыми и небоевыми.</div>
            <br />
            <strong>Небоевые боты\питомцы</strong>&nbsp;&ndash; что-то, по типу квестовых НПС, которые могут сопровождать вашего персонажа, однако не могут участвовать в каких-либо битвах (сражение с боссом в вашем островном квесте, с МБ, с игроками и прочее), не имеют способностей и баллов. Могут обладать только небоевой способностью
            <br />
            <br />
            <strong>Боевые боты\питомцы</strong>&nbsp;&ndash; практически полноправные персонажи. Могут обладать собственными способностями, баллами, и практически всеми привилегиями, доступные персонажам. В основном, отличаются три балловых класса ботов: 25, 50 и 75% от силы персонажа. Бот не может быть сильнее персонажа по баллам, в этом плане он полностью зависит от него. В отличие от небоевых, боты могут участвовать в различных видах сражений, и могут, в случае чего, отдельно путешествовать от персонажа.
            <br />
            На всех боевых ботов пишется анкета в соответствующей&nbsp;<a href="https://vk.com/topic-36291248_40740335" className='link' target='_blank'>теме</a>. Как и для персонажа, его способности (если это фрукт и тд) должны быть обговорены с анкетологами).
            <br />
            <br />
            Боевых ботов можно приобрести за награду&nbsp;<a href="https://vk.com/page-36291248_44357162" className='link' target='_blank'>пиратов</a>, в качестве награды за звания у Дозора и РА. На бота можно отдать слот способности, в таком случае, сила бота будет равна 75%.
            <div align="left">Боты, которых можно получить с ивентов\турниров, если это не уточнено проводящими оные мероприятия администраторами, являются небоевыми, однако имеют особенности и свои боевые способности, которые не являются активными для использования из-за своего статуса небоевого бота. Чтобы &laquo;активировать&raquo; их особенности, на них нужно потратить слот бота (ограниченное количество доступных для создания ботов, которые выдаются пиратам, дозорным и революционерам в качестве наград за голову\звания).</div>
            <br />
            Следует уточнить, что небоевые боты или питомцы, приобретенные в ходе квестом, не должны быть какими-либо особенными. Если это бот &ndash; он не должен быть йонко, либо другой широкоизвестной персоной, кем-то сверхсильным или как-либо выделяющимся из-за собственных способностей или вида, если это питомец &ndash; он не должен быть необычнее типичных нам животных: собаки, кошки, лошади и тд. Всех &laquo;особенных&raquo; можно приобрести через ивенты, Чёрный Рынок, либо через особый квест (с одобрения администрации, 2-6к слов), какими бы они не были.
            <br />
            <br />
            <strong>11.3 Приобретенное снаряжение.</strong>&nbsp;Им называется всё, что было приобретено персонажем по ходу игры, и, скорее, под ним подразумевается снаряжение с турниров Бомбса, различных ивентов или рейдов.
            <br />
            <br />
            Снаряжение не всегда является чем-то бесполезным, по типу куска заточенного металла. У многих орудий с того же Бомбса или рейдов имеется свой ряд способностей и особенностей. Те оружия, что достались не с перечисленных мероприятий, а были запрошены самим игроком, также имеют право на обладание какими-либо особенностями (по типу класса клинка, уровню заточки\прочности, по имению проклятия и тд), но они, в отличие от снаряжения с мероприятий, получаются через особые квесты (с одобрения администрации, 2-6к слов). Последний пункт кода: "чрезвычайно опасен". Также, их можно приобрести в Магазине или на Чёрном Рынке, в таком случае также не требуют для себя квестов, кроме их непосредственного получения.
            <div align="left">В случае, если выдавшееся снаряжение из рейдов, турниров или с мировых боссов в качестве награды вам чем-либо не понравилось, его можно продать на Чёрном Рынке (все вопросы по процедуре и цене вы можете уточнить у заведующего администратора).</div>
            <br />
            Также, можно самостоятельно придумать себе особое снаряжение, обговорить его качества с анкетологами, и после того, как оно будет принято, попросить у квестологов возможность написать особый квест. Суть особого квеста как раз будет складываться в получении этого снаряжения, и его объем может доходить до 5к (это решает квестолог).
            <br />
            <br />
            <strong>11.4 Редкие мечи и дьявольские фрукты.</strong>&nbsp;Ни для кого не секрет, что в ван писе существует классовое снаряжение, имеющее свою ценность, варьирующую от просто крутых, допустим, мечей, до таких, чья ценность может поравняться с дьявольским фруктом типа логии. Конкретно сейчас идёт речь о мэйто &ndash; не типе клинка, а о его статусе.
            <br />
            <br />
            <div align="left">Существуют следующие классы мечей, чья распространённость и известность рассортирована по увеличению значимости класса, и, следовательно, уменьшению самого количества мейто, которое может оказаться одним из них. Здесь следует уточнить, что, в отличие от манги, у нас иные экземпляры оружия, придуманные игроками и одобренные администрацией.</div>
            <ul class="listing">
                <li><span class="l">Класс&nbsp;<strong>Вадзамоно</strong>&nbsp;&ndash; к которому относится неопределенное количество клинков. Оружие этого класса остро, но из всех классовых, Вадзамоно занимает последнее место.</span></li>
                <br />
                <li><span class="l">Класс&nbsp;<strong>Рё Вадзамоно</strong>&nbsp;&ndash; числит в себе 50 мечей. Их качество выше, чем у Вадзамоно.</span></li>
                <br />
                <li><span class="l">Класс&nbsp;<strong>О Вадзамоно</strong>&nbsp;&ndash; числит в себе 21 меч. Ещё лучше, крепче и краше предыдущего класса.</span></li>
                <br />
                <li><span class="l">Класс&nbsp;<strong>Сайдзё О Вадзамоно</strong>&nbsp;&ndash; числит в себе 12 мечей. На данный момент, наилучший известный нам класс мейто.</span></li>
            </ul>
            <div align="left">Что касается фруктов, то, <span onClick={() => routeNavigator.push({pathname: '/abilities'})} className='link'>по разделу способностей</span>, вы уже знаете, 
            какие типы имеются. В нашей ролевой <span onClick={() => routeNavigator.push({pathname: '/restrictions'})} className='link'>можно взять и пользоваться каноническими 
            фруктами</span>, которые, безусловно, бесконечными не бывают. 
            Вы можете посмотреть список занятых фруктов в&nbsp;<a href="https://vk.com/topic-36291248_32877623" className='link' target='_blank'>теме</a>, где более актуальная информация, 
            либо в&nbsp;<a href="https://vk.com/page-36291248_54971895" className='link' target='_blank'>меню</a>, где информация более наглядная.</div>
            <br />
            <br />
            <center><div><a href="https://vk.com/page-36291248_54971894" className='link' target='_blank'>&bull; Список легендарных мечей</a>&nbsp;<a href="https://vk.com/page-36291248_54971895" className='link' target='_blank'>&bull; Список занятых дьявольских фруктов &bull;</a></div></center>


            </Div>
        </Group>
        <Button size="m" onClick={() => routeNavigator.back()} className='back-button'>Назад</Button>
    </Panel>
  );
};