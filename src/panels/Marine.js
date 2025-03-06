import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Accordion } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import './App.css';


export const Marine = ({ id }) => {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
        <PanelHeader>Морской Дозор</PanelHeader>
        <Button size="m" onClick={() => routeNavigator.back()} className='back-button'>Назад</Button>
        <Group>
            <Div>
                <strong>9.1</strong>&nbsp;<strong>Морской дозор (海軍, Кайгун)</strong>&nbsp;&mdash; это военная организация, созданная Мировым Правительством для поддержания закона во всем мире. Отделения дозора присутствуют во всех морях мира, хотя в основном сосредоточены на Гранд Лайн . До войны с пиратами Белоуса, главный штаб Морского Дозора находился в Маринфорде, после чего был перенесён в Новый Мир, из-за решения адмирала флота - Сакадзуки.
                <br />   
                <br />    
                <strong>9.2</strong>&nbsp;<strong>Система рангов Морского Дозора.</strong>&nbsp;Изначально, при регистрации, игрок может выбрать любое звание вплоть до младшего лейтенанта, с условием того, что он будет командиром отряда, состоящим не менее, чем из двух человек. При этом, как и прежде, он получает в распоряжение две способности, не получая третью, дополнительную, как за капитана команды из двух человек&nbsp;<strong>(правило&nbsp;</strong>5.3<strong>&nbsp;на дозор не распространяется)</strong>.
                <br />   
                <br /> 
                <strong>9.2.1 Ранги</strong>. Количество&nbsp;<strong>ОЗ</strong>&nbsp;(<em>очков званий</em>), которые нужно набрать для повышения в звании, указаны рядом с каждым из них. Способы получения ОЗ указаны в разделе&nbsp;<strong>9.3</strong>. Число, указанное в скобках рядом со званием, это число общедоступных Ботов Морского Дозора, доступных для каждого ранга. Подробнее в разделе&nbsp;<strong>9.4.1</strong>.
                <ul className="listing">
                    <li><span className="l">Юнга</span></li>
                    <li><span className="l">Матрос</span></li>
                    <li><span className="l">Матрос 1-го класса</span></li>
                    <li><span className="l">Капрал</span></li>
                    <li><span className="l">Главный сержант</span></li>
                    <li><span className="l">Мичман</span></li>
                </ul>
                Все звания, идущие далее, являются офицерскими. Рядом с каждым званием указано количество ОЗ, необходимых для его получения. Цифрой в скобках прописано количество общих ботов, которое может вызвать дозорный текущего звания себе в подкрепление. Набрав необходимое количество ОЗ, вы будете повышены в звании. При повышении, личный счётчик ОЗ сбрасывается до 0, за исключением того случая, когда было набрано больше ОЗ, чем требуется для повышения в звании. В таком раскладе, лишние&nbsp;<strong>ОЗ</strong>&nbsp;переносятся для набора следующего звания.
                <br />   
                <br /> 
                <strong>Здесь представлено количество очков званий, необходимых для повышения звания командира команды.</strong>&nbsp;Командиром может стать только человек, который имеет под своим началом не меньше двух человек.
                <br />   
                <br />
                <div className="desktop-only">
                    <table>
                        <thead>
                            <tr>
                            <th scope="col">Звание</th>
                            <th scope="col">Задания</th>
                            <th scope="col">Количество ОЗ</th>
                            <th scope="col">Количество ботов в подкрепление</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">Младший лейтенант</th>
                            <td>-</td>
                            <td>Возможно со старта</td>
                            <td>5</td>
                            </tr>
                            <tr>
                            <th scope="row">Лейтенант</th>
                            <td>–</td>
                            <td>900 ОЗ</td>
                            <td>10</td>
                            </tr>
                            <tr>
                            <th scope="row">Старший лейтенант</th>
                            <td>–</td>
                            <td>1500 ОЗ</td>
                            <td>30</td>
                            </tr>
                            <tr>
                            <th scope="row">Лейтенант-коммандер</th>
                            <td>–</td>
                            <td>2200 ОЗ</td>
                            <td>50</td>
                            </tr>
                            <tr>
                            <th scope="row">Коммандер</th>
                            <td>–</td>
                            <td>2700 ОЗ</td>
                            <td>80</td>
                            </tr>
                            <tr>
                            <th scope="row">Капитан</th>
                            <td><p>Обязательное участие в трёх операциях, среди которых: операция по освобождению острова, по захвату особо опасных преступников и выполнение задания от любого офицера, начиная с Контр-адмирала</p>
                            <ul className="listing">
                            <li><span className="l">+1 способность</span></li>
                            </ul></td>
                            <td>3400 ОЗ</td>
                            <td>110</td>
                            </tr>
                            <tr>
                            <th scope="row">Коммодор</th>
                            <td>Обязательная организация как минимум двух операций с успешным исходом</td>
                            <td>4000 ОЗ</td>
                            <td>150</td>
                            </tr>
                            <tr>
                            <th scope="row">Контр-адмирал</th>
                            <td>Последние три звания выдаются за неординарные заслуги после совещания административного совета, но никто не отменяет того, что нужно выполнять и дальше обычные задачи дозорной работы</td>
                            <td>-</td>
                            <td>200</td>
                            </tr>
                            <tr>
                            <th scope="row">Вице-адмирал</th>
                            <td>Возможность повысить одного из своих личных ботов в звании до капитана и выдать ему ещё одну способность</td>
                            <td>-</td>
                            <td>250</td>
                            </tr>
                            <tr>
                            <th scope="row">Адмирал</th>
                            <td><p>Возможность совершать "Вызов Пяти"</p>
                            <ul className="listing">
                            <li><span className="l">+1 способность</span></li>
                            </ul></td>
                            <td>-</td>
                            <td>300</td>
                            </tr>
                            <tr>
                            <th scope="row">Адмирал флота</th>
                            <td>Бессменный верховный главнокомандующий. В нашем временном промежутке - это Акаину</td>
                            <td>-</td>
                            <td>Может мобилизировать абсолютно все силы дозора</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />   
                    <br />
                    <strong>Количество очков званий, необходимых для повышения звания членов команд из двух человек или более, а так же одиночек.</strong>
                    <br />   
                    <br />
                    <table>
                        <thead>
                            <tr>
                            <th scope="col">Звание</th>
                            <th scope="col">Задания</th>
                            <th scope="col">Количество ОЗ</th>
                            <th scope="col">Количество ботов в подкрепление</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">Младший лейтенант</th>
                            <td>-</td>
                            <td>300 ОЗ или со старта</td>
                            <td>5</td>
                            </tr>
                            <tr>
                            <th scope="row">Лейтенант</th>
                            <td>–</td>
                            <td>1000 ОЗ</td>
                            <td>10</td>
                            </tr>
                            <tr>
                            <th scope="row">Старший лейтенант</th>
                            <td>–</td>
                            <td>1600 ОЗ</td>
                            <td>30</td>
                            </tr>
                            <tr>
                            <th scope="row">Лейтенант-коммандер</th>
                            <td>–</td>
                            <td>2300 ОЗ</td>
                            <td>50</td>
                            </tr>
                            <tr>
                            <th scope="row">Коммандер</th>
                            <td>–</td>
                            <td>2800 ОЗ</td>
                            <td>80</td>
                            </tr>
                            <tr>
                            <th scope="row">Капитан</th>
                            <td><p>Обязательное участие в трёх операциях, среди которых: операция по освобождению острова, по захвату особо опасных преступников и выполнение задания от любого офицера, начиная с Контр-адмирала</p>
                            <ul className="listing">
                            <li><span className="l">+1 способность</span></li>
                            </ul></td>
                            <td>3500 ОЗ</td>
                            <td>110</td>
                            </tr>
                            <tr>
                            <th scope="row">Коммодор</th>
                            <td>Обязательная организация как минимум двух операций с успешным исходом</td>
                            <td>4100 ОЗ</td>
                            <td>150</td>
                            </tr>
                            <tr>
                            <th scope="row">Контр-адмирал</th>
                            <td>Последние три звания выдаются за неординарные заслуги после совещания административного совета, но никто не отменяет того, что нужно выполнять и дальше обычные задачи дозорной работы</td>
                            <td>-</td>
                            <td>200</td>
                            </tr>
                            <tr>
                            <th scope="row">Вице-адмирал</th>
                            <td>Возможность повысить одного из своих личных ботов в звании до капитана и выдать ему ещё одну способность</td>
                            <td>-</td>
                            <td>250</td>
                            </tr>
                            <tr>
                            <th scope="row">Адмирал</th>
                            <td><p>Возможность совершать "Вызов Пяти"</p>
                            <ul className="listing">
                            <li><span className="l">+1 способность</span></li>
                            </ul></td>
                            <td>-</td>
                            <td>300</td>
                            </tr>
                            <tr>
                            <th scope="row">Адмирал флота</th>
                            <td>Бессменный верховный главнокомандующий. В нашем временном промежутке - это Акаину</td>
                            <td>-</td>
                            <td>Может мобилизировать абсолютно все силы дозора</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='mobile-only'>
                    <Accordion>
                        <Accordion.Summary iconPosition="before"><b>Звания</b></Accordion.Summary>
                        <Accordion.Content>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Младший лейтенант</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            <li><strong>Количество ОЗ:</strong> Возможно со старта</li>
                                            <li><strong>Количество ботов в подкрепление:</strong> 5</li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Лейтенант</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            <li><strong>Количество ОЗ:</strong>	900 ОЗ</li>
                                            <li><strong>Количество ботов в подкрепление:</strong> 10</li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Старший лейтенант</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            <li><strong>Количество ОЗ:</strong> 1500 ОЗ</li>
                                            <li><strong>Количество ботов в подкрепление:</strong> 30</li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Лейтенант-коммандер</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            <li><strong>Количество ОЗ:</strong> 2200 ОЗ</li>
                                            <li><strong>Количество ботов в подкрепление:</strong> 50</li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Коммандер</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            <li><strong>Количество ОЗ:</strong> 2700 ОЗ</li>
                                            <li><strong>Количество ботов в подкрепление:</strong> 80</li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Капитан</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            <li><strong>Задания:</strong> Обязательное участие в трёх операциях, среди которых: операция по освобождению острова, по захвату особо опасных преступников и выполнение задания от любого офицера, начиная с Контр-адмирала</li>
                                            <li><strong>Количество ОЗ:</strong> 3400 ОЗ</li>
                                            <li><strong>Количество ботов в подкрепление:</strong> 110</li>
                                            <li><strong>+ 1 способность</strong></li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Коммодор</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            <li><strong>Задания:</strong> Обязательная организация как минимум двух операций с успешным исходом</li>
                                            <li><strong>Количество ОЗ:</strong> 4000 ОЗ</li>
                                            <li><strong>Количество ботов в подкрепление:</strong> 150</li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            Последние три звания выдаются за неординарные заслуги после совещания административного совета, но никто не отменяет того, что нужно выполнять и дальше обычные задачи дозорной работы
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Контр-адмирал</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            <li><strong>Количество ботов в подкрепление:</strong> 200</li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Вице-адмирал</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            Возможность повысить одного из своих личных ботов в звании до капитана и выдать ему ещё одну способность
                                            <li><strong>Количество ботов в подкрепление:</strong> 250</li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Адмирал</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            Возможность совершать "Вызов Пяти"
                                            <li><strong>Количество ботов в подкрепление:</strong> 300</li>
                                            <li><strong>+1 способность</strong></li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Адмирал флота</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            Бессменный верховный главнокомандующий. В нашем временном промежутке - это Акаину
                                            Может мобилизировать абсолютно все силы дозора
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                        </Accordion.Content>
                    </Accordion>
                    <br />   
                    <br />
                    <strong>Количество очков званий, необходимых для повышения звания членов команд из двух человек или более, а так же одиночек.</strong>
                    <br />   
                    <br />
                    <Accordion>
                        <Accordion.Summary iconPosition="before"><b>Звания</b></Accordion.Summary>
                        <Accordion.Content>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Младший лейтенант</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            <li><strong>Количество ОЗ:</strong> 300 ОЗ или со старта</li>
                                            <li><strong>Количество ботов в подкрепление:</strong> 5</li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Лейтенант</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            <li><strong>Количество ОЗ:</strong>	1000 ОЗ</li>
                                            <li><strong>Количество ботов в подкрепление:</strong> 10</li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Старший лейтенант</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            <li><strong>Количество ОЗ:</strong> 1600 ОЗ</li>
                                            <li><strong>Количество ботов в подкрепление:</strong> 30</li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Лейтенант-коммандер</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            <li><strong>Количество ОЗ:</strong> 2300 ОЗ</li>
                                            <li><strong>Количество ботов в подкрепление:</strong> 50</li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Коммандер</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            <li><strong>Количество ОЗ:</strong> 2800 ОЗ</li>
                                            <li><strong>Количество ботов в подкрепление:</strong> 80</li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Капитан</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            <li><strong>Задания:</strong> Обязательное участие в трёх операциях, среди которых: операция по освобождению острова, по захвату особо опасных преступников и выполнение задания от любого офицера, начиная с Контр-адмирала</li>
                                            <li><strong>Количество ОЗ:</strong> 3500 ОЗ</li>
                                            <li><strong>Количество ботов в подкрепление:</strong> 110</li>
                                            <li><strong>+ 1 способность</strong></li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Коммодор</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            <li><strong>Задания:</strong> Обязательная организация как минимум двух операций с успешным исходом</li>
                                            <li><strong>Количество ОЗ:</strong> 4100 ОЗ</li>
                                            <li><strong>Количество ботов в подкрепление:</strong> 150</li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            Последние три звания выдаются за неординарные заслуги после совещания административного совета, но никто не отменяет того, что нужно выполнять и дальше обычные задачи дозорной работы
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Контр-адмирал</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            <li><strong>Количество ботов в подкрепление:</strong> 200</li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Вице-адмирал</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            Возможность повысить одного из своих личных ботов в звании до капитана и выдать ему ещё одну способность
                                            <li><strong>Количество ботов в подкрепление:</strong> 250</li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Адмирал</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            Возможность совершать "Вызов Пяти"
                                            <li><strong>Количество ботов в подкрепление:</strong> 300</li>
                                            <li><strong>+1 способность</strong></li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Адмирал флота</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            Бессменный верховный главнокомандующий. В нашем временном промежутке - это Акаину
                                            Может мобилизировать абсолютно все силы дозора
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                        </Accordion.Content>
                    </Accordion>
                </div>
                <br />   
                <br />
                <strong>9.2.2</strong>&nbsp;Напоминаем, что в Морском Дозоре существует жесткая иерархия, то есть младшие подчиняются старшим. За неподчинение офицеру, который старше вас по званию, без особой на то причины, вас могут понизить в звании или даже&nbsp;<em>выгнать</em>&nbsp;из Морского Дозора.
                <br />   
                <br /> 
                <strong>9.3</strong>&nbsp;<strong>Задания, которые предстоит выполнять вам для повышения в звании, начиная со звания Младший Лейтенант.</strong>
                <br />   
                <br /> 
                <strong>Прохождение островного приключения.</strong>&nbsp;Важно учитывать, что в ходе этого островного приключения вы должны проявлять активность в качестве дозорного, и учитываться будут только те квесты, в которых вы выполняли свою работу. Вы получите награду в виде ОЗ в зависимости от размера и качества Вашего приключения. При написании стандартного приключения размером 3 (три) тысячи слов Вы получите 200 ОЗ.
                <br />   
                <br />
                <strong>Поимка пирата.</strong>&nbsp;Учитываются только те пираты, которые были замечены во враждебных действиях по отношению к мирному населению или Морскому Дозору/Правительству. Также могут учитываться&nbsp;<a href="https://vk.com/page-36291248_52691044" className='link' target='_blank'>Мировые боссы</a>.
                <ul className="listing">
                    <li><span className="l">Пират без награды - 200 ОЗ</span></li>
                    <li><span className="l">Пират с наградой 30кк и меньше - 300 ОЗ</span></li>
                    <li><span className="l">Пират с наградой от 30кк и до 70кк - 400 ОЗ</span></li>
                    <li><span className="l">Пират с наградой от 70кк и до 150кк - 500 ОЗ</span></li>
                    <li><span className="l">Пират с наградой от 150кк и до 300кк - 700 ОЗ</span></li>
                </ul>
                <strong>Участие в организованной операции с благоприятным исходом.</strong>&nbsp;Это может быть операция по поимке особо опасных личностей, вроде людей Реквиема, Черного Рынка и прочих организаций, а также это может быть операция по освобождению острова из-под гнета пиратов или РА. Минимальный размер операции составляет 10 (десять) тысяч слов, а минимальная награда 2.5 балла и 700 ОЗ. При участии в операции трёх и более человек минимально каждый из них получит 800 ОЗ
                <br />   
                <br />
                <strong>Организация операции дозора</strong>.&nbsp;<em>До звания Капитан заблокировано</em>. Если вы желаете созвать операцию, но не имеете необходимого звания, организатором автоматически становится Адмирал Флота. В этом случае пункт рассматривается как участие. Минимальный размер операции составляет 10 (десять) тысяч слов, а минимальная награда 2.5 балла. В зависимости от специфики операции различается минимальное количество ОЗ:
                <ul className="listing">
                <li><span className="l">Организация операции по освобождению острова от пиратов/РА - 1000 ОЗ</span></li>
                <li><span className="l">Организация операции по поимке Сверхнового(игрок либо босс из админских) - 1300 ОЗ</span></li>
                <li><span className="l">Организация операции по поимке бывшего Шичибукая - 1500 ОЗ</span></li>
                <li><span className="l">Организация операции по поимке особо опасных деятелей теневого мира - 1100 ОЗ</span></li>
                </ul>
                <strong>Участие в вызове пяти (Объявленного администрацией или же игроком в звании Адмирала)</strong>&nbsp;- 1000 ОЗ
                <br />   
                <br />
                <strong>Содействие Шичибукаю</strong>.
                <ul className="listing">
                    <li><span className="l">В зависимости от степени содействия и сложности задания - от 300 ОЗ</span></li>
                </ul>
                <strong>Участие в собрании Морского Дозора</strong>. Раз в год или чаще, в зависимости от событий в ролевой, в Штаб-Квартире дозора будет проводится собрание, на котором игроки смогут обсудить последние новости, объединится в команды для участия в операциях, поучаствовать в заседании лучших мира сего и получить задания от вышестоящих офицеров.
                <ul className="listing">
                    <li><span className="l">100 ОЗ</span></li>
                </ul>
                <strong>За что будут отбираться очки звания:</strong>
                <ul className="listing">
                    <li><span className="l">Пропуск собрания без уважительной причины - 500 ОЗ</span></li>
                    <li><span className="l">Провал задания - от 500 до 1000 ОЗ</span></li>
                    <li><span className="l">Провал операции - от 1000 ОЗ до 1500 ОЗ</span></li>
                    <li><span className="l">Потери среди подчиненных вам дозорных (имеются ввиду ваши личные боты и общие боты) - от 500 ОЗ до 2000 ОЗ</span></li>
                    <li><span className="l">Отказ подчиняться выше стоящему дозорному - 1000 ОЗ</span></li>
                </ul>
                <strong>Если ваш штраф достигает -1000 ОЗ, вы понижаетесь в звании.</strong>
                <br />   
                <br />
                <strong>9.4</strong>&nbsp;Противостоять разнузданным пиратам и угрозе мирной жизни в лице революционеров, в наше неспокойное время, становится все сложнее. Поэтому, каждый дозорный может сформировать небольшую группу из людей, подчиняющихся только ему и никому другому. Эти отважные мужчины и женщины зовутся&nbsp;<strong>Ботами Морского Дозора.</strong>
                <br />   
                <br />
                <strong>9.4.1</strong>&nbsp;<strong>Общедоступные Боты Морского Дозора.</strong>&nbsp;Как мы можем видеть, в описании острова прописаны силы правосудия, которые находятся на территории, куда постоянно хочет ступить пята беззакония. Отныне, в зависимости от ранга, вы, как представитель Закона и слова Мирового Правительства, можете вызывать подкрепление, которое будет состоять из вот этих вот самых сил. Общественные боты не обладают выдающимися силами типа фруктов или рокушики, а также воли (касается 4 морей), но, чтобы от них был толк, вводится понятие усталость. На каждые 20 убитых\вырубленных и тд., по вашему вкусу обработанных общедоступных ботов, пират, временно, до конца текущего боя, теряет 0.1 балл. Но не забывайте, что подкрепление может не только драться, но, например, подготовить ловушку или совершить еще какой-нибудь тактический ход. Помните, незначительное изменение ситуации, в руках умелого стратега, может переломить исход сражения в его пользу.
                <br />   
                <br />
                <strong>9.4.1.1</strong>&nbsp;Подкрепление можно вызвать один раз за сражение. Количество потерь может сказаться на дальнейшем подъеме на карьерной лестнице. Вооружение дозорных сильно ограничено каноном. В их арсенале: кремниевые винтовки, сабли, пушки, гранаты. Остальное лучше уточнять у администратора отвечающего за дозор.
                <br />   
                <br />
                <strong>9.4.1.2</strong>&nbsp;Общедоступные Боты имеют одну боевую стандартную и одну небоевую способность. Уровень сил ботов &ndash; 20% от уровня персонажа, что призвал подкрепление.
                <br />   
                <br />
                <strong>9.4.2</strong>&nbsp;<strong>Личные Боты Морского Дозора</strong>. Это те NPC, которые, непосредственно, участвуют с вами в битвах, если пираты имеют численный перевес. B битвах 1 на 1 участвовать не могут.&nbsp;<strong>С выхода на Гранд-Лайн данное ограничение снимается</strong>. В массовых баталиях они уже могут являться самостоятельной боевой единицей, и, вполне способны, при благоприятных обстоятельствах, победить в бою, арестовав врага Мирового Правительства.
                <br />   
                <br />
                <strong>9.4.2.1</strong>&nbsp;Боты, как вознаграждение, выдаются за достижение определенных званий:
                <br />   
                <br />
                <div className='desktop-only'>
                    <table>
                        <thead>
                            <tr>
                            <th scope="col">Звание</th>
                            <th scope="col">Вариант №1</th>
                            <th scope="col">Вариант №2</th>
                            <th scope="col">Вариант №3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">Младший лейтенант</th>
                            <td>2 Боевых бота 50% со званием, не выше мичмана, 1 слот стандартный боевой, 1 слот небоевой</td>
                            <td>-</td>
                            <td>-</td>
                            </tr>
                            <tr>
                            <th scope="row">Старший лейтенант</th>
                            <td>+1 бот 50% со званием, не выше мичмана, 1 слот стандартный боевой, 1 слот небоевой</td>
                            <td>-</td>
                            <td>-</td>
                            </tr>
                            <tr>
                            <th scope="row">Лейтенант-коммандер</th>
                            <td>+1 бот 75% со званием не выше старшего лейтенанта, 2 слота боевых (зоан\парамеция), 1 слот небоевой</td>
                            <td>Повышение бота до звания старшего лейтенанта, улучшение с 50% до 75%, +1 слот боевой (зоан\миф\логия\парамеция)</td>
                            <td>-</td>
                            </tr>
                            <tr>
                            <th scope="row">Капитан</th>
                            <td>+1 бот 75% со званием не выше коммандера, 3 слота боевых (зоан\парамеция\ВН\ВВ), 1 слот небоевой</td>
                            <td>Повышение бота до звания коммандер, улучшение с 50% до 75%, +1 слот боевой (зоан\миф\логия\парамеция\ВН\ВВ)</td>
                            <td>Повышение бота до звания старший лейтенант, улучшение с 50% до 75%, +1 слот боевой (зоан\миф\логия\парамеция)</td>
                            </tr>
                            <tr>
                            <th scope="row">Коммодор</th>
                            <td>+1 бот 75% со званием не выше коммандера, 3 слота боевых (зоан\парамеция\ВН\ВВ), 1 слот небоевой</td>
                            <td>Повышение бота до звания коммандер, улучшение с 50% до 75%, +1 слот боевой (зоан\миф\логия\парамеция\ВН\ВВ)</td>
                            <td>Повышение бота до звания старший лейтенант, улучшение с 50% до 75%, +1 слот боевой (зоан\миф\логия\парамеция)</td>
                            </tr>
                            <tr>
                            <th scope="row">Контр-адмирал</th>
                            <td>+1 бот 75% со званием не выше коммодора, 4 слота боевых (зоан\парамеция\ВН\ВВ), 1 слот небоевой</td>
                            <td>Повышение бота до звания коммандер, улучшение с 50% до 75%, +1 слот боевой (зоан\миф\логия\парамеция\ВН\ВВ)</td>
                            <td>-</td>
                            </tr>
                            <tr>
                            <th scope="row">Вице-адмирал</th>
                            <td>+1 бот 75% со званием не выше коммодора, 4 слота боевых (зоан\парамеция\ВН\ВВ), 1 слот небоевой</td>
                            <td>Повышение бота до звания коммандер, улучшение с 50% до 75%, +1 слот боевой (зоан\миф\логия\парамеция\ВН\ВВ)</td>
                            <td>-</td>
                            </tr>
                            <tr>
                            <th scope="row">	Адмирал</th>
                            <td>+1 бот 75% со званием не выше контр-адмирала, 5 слота боевых (зоан\парамеция\ВН\ВВ), 1 слот небоевой</td>
                            <td>Улучшение одного из существующих ботов, +1 слот боевой&nbsp;<strong>ИЛИ</strong>&nbsp;+1 слот небоевой</td>
                            <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='mobile-only'>
                    <Accordion>
                        <Accordion.Summary iconPosition="before"><b>Звания</b></Accordion.Summary>
                        <Accordion.Content>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Младший лейтенант</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            <li>2 Боевых бота 50% со званием, не выше мичмана, 1 слот стандартный боевой, 1 слот небоевой</li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Старший лейтенант</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            <li>	+1 бот 50% со званием, не выше мичмана, 1 слот стандартный боевой, 1 слот небоевой</li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Лейтенант-коммандер</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            <li>+1 бот 75% со званием не выше старшего лейтенанта, 2 слота боевых (зоан\парамеция), 1 слот небоевой</li>
                                            <li>Повышение бота до звания старшего лейтенанта, улучшение с 50% до 75%, +1 слот боевой (зоан\миф\логия\парамеция)</li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Капитан</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            <li>+1 бот 75% со званием не выше коммандера, 3 слота боевых (зоан\парамеция\ВН\ВВ), 1 слот небоевой</li>
                                            <li>Повышение бота до звания коммандер, улучшение с 50% до 75%, +1 слот боевой (зоан\миф\логия\парамеция\ВН\ВВ)</li>
                                            <li>Повышение бота до звания старший лейтенант, улучшение с 50% до 75%, +1 слот боевой (зоан\миф\логия\парамеция)</li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Коммодор</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            <li>+1 бот 75% со званием не выше коммандера, 3 слота боевых (зоан\парамеция\ВН\ВВ), 1 слот небоевой</li>
                                            <li>Повышение бота до звания коммандер, улучшение с 50% до 75%, +1 слот боевой (зоан\миф\логия\парамеция\ВН\ВВ)</li>
                                            <li>Повышение бота до звания старший лейтенант, улучшение с 50% до 75%, +1 слот боевой (зоан\миф\логия\парамеция)</li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Контр-адмирал</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            <li>+1 бот 75% со званием не выше коммодора, 4 слота боевых (зоан\парамеция\ВН\ВВ), 1 слот небоевой</li>
                                            <li>Повышение бота до звания коммандер, улучшение с 50% до 75%, +1 слот боевой (зоан\миф\логия\парамеция\ВН\ВВ)</li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Вице-адмирал</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            <li>+1 бот 75% со званием не выше коммодора, 4 слота боевых (зоан\парамеция\ВН\ВВ), 1 слот небоевой</li>
                                            <li>Повышение бота до звания коммандер, улучшение с 50% до 75%, +1 слот боевой (зоан\миф\логия\парамеция\ВН\ВВ)</li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Summary iconPosition="before"><b>Адмирал</b></Accordion.Summary>
                                <Accordion.Content>
                                    <Div>
                                        <ul className='mobile-bottom-border'>
                                            <li>+1 бот 75% со званием не выше контр-адмирала, 5 слота боевых (зоан\парамеция\ВН\ВВ), 1 слот небоевой</li>
                                            <li>Улучшение одного из существующих ботов, +1 слот боевой <strong>ИЛИ</strong> +1 слот небоевой</li>
                                        </ul>
                                    </Div>
                                </Accordion.Content>
                            </Accordion>
                        </Accordion.Content>
                    </Accordion>
                </div>
                <br />   
                <br />
                <strong>9.4.2.2</strong>&nbsp;Для регистрации и последующего принятия Личного Бота, вам необходимо написать на него анкету, размещая в теме анкет для ботов.
                <br />   
                <br />
                <strong>9.5 Стандартизация.</strong>&nbsp;Единый эталон дозора включает в себя одинаковые вещи массовой эксплуатации:
                <ul className="listing">
                    <li><span className="l">Корабли</span></li>
                </ul>
                До звания капитана ваш персонаж перемещается на стандартном корабле дозора, а именно на каравелле, которую можно получить за квест. Обвес судна можно улучшить из доступных списков в отдельной локации магазина, но это по желанию.
                <ul className="listing">
                    <li><span className="l">Форма</span></li>
                </ul>
                Все мы прекрасно знаем, что, по канону, одежду вольного стиля, могут носить лишь те, кто достиг звания лейтенанта и выше. Все по званию обязан прописывать ношение стандартной формы дозора или же, как дополнительный вариант свободы и причина образовывать команды, иметь разрешение того же самого лейтенанта на свободную одежду.
                <ul className="listing">
                    <li><span className="l">Оружие</span></li>
                </ul>
                Отдельное элитное или уникальное оружие может иметь только игровой персонаж. Личные боты дозорного могут иметь оружие, которое будет лишь немного по качеству превосходить стандартные аналоги.
                <br />   
                <br />
                <strong>9.6 Базы Дозора</strong>. С нынешнего момента у Морского Дозора появляются прописанные базы, точное местоположение которых будет скрыто от пиратов и прочих выродков общества. Каждый дозорный сможет посещать эти базы для получения заданий, операций и просто для того, чтобы перевести силы или отыграть повышение в звании. На каждой такой базе будет размещен её непосредственный командир и несколько его подчиненных, которые будут прописаны и действия которых в ваших постах должны обговариваться с администратором, отыгрывающим дозор.
                <br />   
                <br />
                <strong>9.7</strong>&nbsp;<strong>Список старших офицеров, которые сейчас служат в Морском Дозоре.</strong>&nbsp;Здесь будут указаны все офицеры начиная с Контр-Адмиралов, обыгрываемые администрацией и места их обычной дислокации.
                <br />   
                <br />
                Контр-Адмиралы
                <ul className="listing">
                <li><span className="l">Контр-Адмирал Джунозе (Штаб Дозора Вест-Блю)</span></li>
                <li><span className="l">Контр-Адмирал Ламия (Штаб Дозора Ист-Блю)</span></li>
                <li><span className="l">Контр-Адмирал Горр (Штаб Дозора Норд-Блю)</span></li>
                <li><span className="l">Контр-Адмирал Эвереска (Штаб Дозора Саус-Блю)</span></li>
                </ul>
                Вице-Адмиралы
                <ul className="listing">
                <li><span className="l">Вице-Адмирал Маркус Фокс (без штаба)</span></li>
                <li><span className="l">Вице-адмирал Цуру (Мариджоа)</span></li>
                <li><span className="l">Вице-адмирал Гигант Джон (Маринфорд)</span></li>
                <li><span className="l">Вице-адмирал Комил (G-2)</span></li>
                <li><span className="l">Вице-адмирал Момонга (Маринфорд)</span></li>
                <li><span className="l">Вице-адмирал Онигумо (Маринфорд)</span></li>
                <li><span className="l">Вице-адмирал Доберман (G-2)</span></li>
                <li><span className="l">Вице-адмирал Стробери (G-3)</span></li>
                <li><span className="l">Вице-адмирал Ямакадзи (G-4)</span></li>
                <li><span className="l">Вице-адмирал Ронс (Маринфорд)</span></li>
                <li><span className="l">Вице-адмирал Стеинлесс (Мариджоа)</span></li>
                <li><span className="l">Вице-адмирал Мозамбия (Мариджоа)</span></li>
                <li><span className="l">Вице-адмирал Кансер (База дозора в НМ)</span></li>
                <li><span className="l">Вице-адмирал Далматин (Маринфорд)</span></li>
                <li><span className="l">Вице-адмирал Бастилия (База дозора в НМ)</span></li>
                </ul>
                Адмиралы
                <ul className="listing">
                <li><span className="l">Адмирал Борсалино (Мариджоа)</span></li>
                <li><span className="l">Адмирал Моддок (Маринфорд)</span></li>
                <li><span className="l">Адмирал Рёкугю (НМ)</span></li>
                </ul>
                Адмирал Флота
                <ul className="listing">
                <li><span className="l">Адмирал Сакадзуки (НМ)</span></li>
                </ul>
                Высокопоставленные дозорные
                <ul className="listing">
                <li><span className="l">Главный инспектор Сэнгоку</span></li>
                <li><span className="l">Инструктор Монки Д. Гарп</span></li>
                </ul>
                <strong>9.8</strong>&nbsp;Отныне, чтобы попасть в Новый Мир, дозорные не обязаны проходить через остров Рыболюдей и прямо с Сабаоди могут отправится на Мариджоа, где находится главный штаб Мирового Правительства. Там им так же нужно отыграть квест (не менее 3к слов), после чего, они смогут отправится в НМ. Также, вы можете попробовать отыграть квест от администратора на Мариджоа (не менее 10к слов), за который можно получить различные бонусы.
                <br />   
                <br />
                <strong>9.9</strong>&nbsp;<strong>Переход острова под контроль дозора.</strong>&nbsp;Начиная со звания Контр-Адмирал, вы можете участвовать в квесте по созданию аванпоста сил Морского Дозора на острове, где их нет. Если ваше звание ниже данного, организатором квеста автоматически становится дозорный, обыгрываемый администратором, а вы становитесь простым участником. Для выполнения данного квеста вам нужно написать не менее 10к слов, которые учитываются, как островной квест. В зависимости от качества выполнения данной задачи, вы будете награждены определенным количеством ОЗ, и квест будет засчитан, как операция. После его выполнения остров, в течение месяца, будет постепенно переходить под контроль дозора. Изначально, в форте появится только тысяча дозорных, а к концу месяца это количество пополнится до 30 тысяч.
                <br />   
                <br />
                <strong>9.10&nbsp;<a href="https://vk.com/pages?oid=-36291248&amp;p=%D0%9E%D0%97_%D0%B8%D0%B3%D1%80%D0%BE%D0%BA%D0%BE%D0%B2" className='link' target='_blank'>Очки званий игроков</a>.</strong>&nbsp;В этой теме вы сможете посмотреть, кто из дозорных на каком звании, а также сколько у них ОЗ.

            
            </Div>
        </Group>
        <Button size="m" onClick={() => routeNavigator.back()} className='back-button'>Назад</Button>
    </Panel>
  );
};