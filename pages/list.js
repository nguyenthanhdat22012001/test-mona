import React, { useState, useEffect } from "react";
import styles from "../styles/list.module.scss";
import iconNextAndBack from "../assets/images/next-and-back.svg";
import iconSearch from "../assets/images/search.svg";
import iconBag from "../assets/images/suitcase.svg";
import iconMeal from "../assets/images/cutlery.svg";
import logoFlight from "../assets/images/la-2-mau.png";

//helper
import { fCurrencyVN, converMinutes, converTime, converDate } from './helpers/FormatNumber';
// api
import flightApi from './api/flightApi';

import MenuBlue from "./components/menuBlue";
import Footer from "./components/footer";

const nameCity = [
    {
        id: 'SGN',
        name: 'Ho Chi Minh City'
    },
    {
        id: 'HPH',
        name: 'Hai Phong'
    },
    {
        id: 'HAN',
        name: 'Ha Noi'
    },
]

function List(props) {
    const [flights, setFlight] = useState(null);

    useEffect(() => {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);

        const tabs = $$(".tab-item");
        const panes = $$(".tab-pane");
        const btnChooses = $$(".btn-choose");

        const tabActive = $(".tab-item.active");

        tabs.forEach((tab, index) => {
            const pane = panes[index];

            tab.onclick = function () {
                $(".tab-item.active").classList.remove("active");
                $(".tab-pane.active").classList.remove("active");

                this.classList.add("active");
                pane.classList.add("active");
            };
        });
        // event btn choose
        btnChooses.forEach((btn, index) => {
            const pane = panes[index];

            btn.onclick = function (e) {
                const parent = this.parentNode;
                const father = parent.parentNode;
                const tab = father.lastElementChild;

                if (tab.style.display == 'block') {
                    tab.style.display = 'none';

                    this.classList.add("btn--text-orange");
                    this.classList.remove("btn--orange");
                } else {
                    tab.style.display = 'block';

                    this.classList.add("btn--orange");
                    this.classList.remove("btn--text-orange");
                }
            };
        });

        getAllFlight();
    })

    /*************get all flight**************/
    const getAllFlight = async () => {
        try {
            const res = await flightApi.getflightAll();
            console.log('res', res);
            if (res.Success) {
                setFlight([...res.Flights]);
            }
        } catch (error) {
            console.log('error', error);
        }
    }


    return (
        <div className={`${styles.list}`}>
            <MenuBlue />
            {console.log(flights)}

            <div className={`${styles.list__row}`}>
                <div className={`container`}>
                    <div className={`${styles.list__top}`}>
                        <div className={`${styles.list__bookingHot}`}>
                            <h3>Da Nang (DAD)</h3>
                            <span>Fri, 22 Mar, 2022</span>
                        </div>

                        <img src={iconNextAndBack.src} alt="" />

                        <div className={`${styles.list__bookingHot}`}>
                            <h3>Ho Chi Minh (SGN)</h3>
                            <span>Fri, 22 Mar, 2022</span>
                        </div>

                        <div className={`${styles.list__tiketType}`}>
                            <a>Round-trip</a>
                            <a> <span>02</span> Adult, <span>01</span> children</a>
                            <a>Business Class</a>
                        </div>

                        <button className={`btn btn--medium btn--orange ${styles.btn__search}`}>
                            Change Flights
                            <img src={iconSearch.src} alt="" />
                        </button>
                    </div>
                </div>
            </div>

            <div className={`container`}>
                <div className={`${styles.list__body}`}>

                    {/*####### main  ##########*/}
                    <div className={`${styles.list__main}`}>
                        {/* filter  */}
                        <div className={`${styles.list__filter}`}>
                            <span>Filter</span>
                            <div className={`${styles.list__customSelect}`}>
                                <select>
                                    <option value="0">Transit</option>
                                    <option value="1">Audi</option>
                                </select>
                            </div>
                            <div className={`${styles.list__customSelect}`}>
                                <select>
                                    <option value="0">Time</option>
                                    <option value="1">Audi</option>
                                </select>
                            </div>
                            <div className={`${styles.list__customSelect}`}>
                                <select>
                                    <option value="0">Airline</option>
                                    <option value="1">Audi</option>
                                </select>
                            </div>
                            <div className={`${styles.list__customSelect}`}>
                                <select>
                                    <option value="0">Low Price</option>
                                    <option value="1">Audi</option>
                                </select>
                            </div>
                        </div>
                        {/* list flight  */}
                        {
                            flights !== null ?
                                flights.map((item, index) => {
                                    return (
                                        <div key={index} className={`${styles.list__row} ${styles.list__flight}`}>
                                            <div className={`${styles.list__flightTop}`}>
                                                <div className={`${styles.list__flightLogo}`}>
                                                    <img src={logoFlight.src} alt="" />
                                                    <h3>{item.FlightNumber}</h3>
                                                </div>
                                                <div className={`${styles.list__flightTimes}`}>
                                                    <div className={`${styles.list__flightTimes__col}`}>
                                                        <p>{converTime(item.StartDate)}</p>
                                                        <span>{item.AirlineCode}</span>
                                                    </div>
                                                    <div className={`${styles.list__flightTimes__col} ${styles.list__flightTimes__period}`}>
                                                        <p>{converMinutes(item.Duration)}</p>
                                                        <span>Direct</span>

                                                        <div className={`${styles.list__flightTimes__icon}`}>
                                                            <div className={`icon-period`}>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className={`${styles.list__flightTimes__col}`}>
                                                        <p>{converTime(item.EndDate)}</p>
                                                        <span>{item.AirlineCode}</span>
                                                    </div>
                                                </div>
                                                <div className={`${styles.list__flightCondition}`}>
                                                    <p>
                                                        <img src={iconBag.src} alt="" />
                                                        Baggage
                                                        <span>{item.Freebag}  </span>
                                                    </p>
                                                    <p>
                                                        <img src={iconMeal.src} alt="" />
                                                        In-flight
                                                        <span> Meal </span>
                                                    </p>
                                                </div>
                                                <div className={`${styles.list__flightFrice}`}>
                                                    <span>
                                                        1,326,000 vnd
                                                    </span>
                                                    <span>
                                                        1,322,000 vnd
                                                    </span>
                                                </div>
                                                <button className={`btn btn--small btn--text-orange btn-choose`}>Choose</button>
                                            </div>
                                            <div className={`${styles.list__flightTab}`}>
                                                <div className={`${styles.list__flightTab__listTab}`}>
                                                    <div className="border-b border-gray-200 dark:border-gray-700">
                                                        {/* list tab  */}
                                                        <ul className="flex flex-wrap -mb-px">
                                                            <li className="mr-2">
                                                                <a className="tab-item active inline-block py-1 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300">Flight detail</a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a className="tab-item inline-block py-1 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300">fare info</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* tab content */}
                                                <div className={`${styles.list__flightTab__tabContent}`}>
                                                    <div className={`tab-pane active`}>
                                                        <div className={`${styles.list__flightDetail}`}>
                                                            <div className={`${styles.list__flightDetail__col}`}>
                                                                <div className={`${styles.list__flightDetail__time}`}>
                                                                    <span className={`${styles.list__flightDetail__textBold}`}>{converTime(item.StartDate)}</span>
                                                                    <span className={`${styles.list__flightDetail__textSmall}`}>{converDate(item.StartDate)}</span>
                                                                </div>
                                                                <div className={`${styles.list__flightDetail__time}`}>
                                                                    <span className={`${styles.list__flightDetail__period}`}>{converMinutes(item.Duration)}</span>
                                                                </div>
                                                                <div className={`${styles.list__flightDetail__time}`}>
                                                                    <span className={`${styles.list__flightDetail__textBold}`}>{converTime(item.EndDate)}</span>
                                                                    <span className={`${styles.list__flightDetail__textSmall}`}>{converDate(item.EndDate)}</span>
                                                                </div>
                                                                <div className={`${styles.list__flightDetail__icon}`}>
                                                                    <div className={`icon-period`}>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className={`${styles.list__flightDetail__col}`}>
                                                                <div className={`${styles.list__flightDetail__time} ${styles.list__flightDetail__location}`}>
                                                                    <span className={`${styles.list__flightDetail__textBold}`}>{nameCity.map(city => city.id === item.StartPoint && `${city.name} (${city.id})`)}</span>
                                                                    <span className={`${styles.list__flightDetail__textSmall}`}>Da Nang Airport</span>
                                                                </div>

                                                                <div className={`${styles.list__flightDetail__time} ${styles.list__flightDetail__location}`}>
                                                                    <span className={`${styles.list__flightDetail__textBold}`}>{nameCity.map(city => city.id === item.EndPoint && `${city.name} (${city.id})`)}</span>
                                                                    <span className={`${styles.list__flightDetail__textSmall}`}>Da Nang Airport</span>
                                                                </div>
                                                            </div>

                                                            <div className={`${styles.list__flightDetail__col}`}>
                                                                <div className={`${styles.list__yourFlight}`}>
                                                                    <div className={`${styles.list__yourFlight__image}`}>
                                                                        <img src={logoFlight.src} alt="" />
                                                                    </div>
                                                                    <div className={`${styles.list__yourFlight__text}`}>
                                                                        <h5 className={`${styles.list__yourFlight__textBold}`}>{item.FlightNumber}</h5>
                                                                        <p className={`${styles.list__yourFlight__textQR}`}>
                                                                            <span>QH-183</span>
                                                                            <span>Economy</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className={`${styles.list__flightDetail__condition}`}>
                                                                    <div className={`${styles.list__flightCondition}`}>
                                                                        <p>
                                                                            Baggage
                                                                            <span>{item.Freebag}  </span>
                                                                        </p>
                                                                        <p>
                                                                            In-flight
                                                                            <span> Meal </span>
                                                                        </p>
                                                                        <p>
                                                                            In-flight
                                                                            <span> Entertainment </span>
                                                                        </p>
                                                                    </div>
                                                                    <div className={`${styles.list__flightCondition}`}>
                                                                        <p>

                                                                            Aircraft
                                                                            <span>Airbus A321 </span>
                                                                        </p>
                                                                        <p>
                                                                            Seat layout
                                                                            <span> {item.SeatRemain} </span>
                                                                        </p>
                                                                        <p>
                                                                            Seat pitch
                                                                            <span>29 inches (standard) </span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={`tab-pane`}>
                                                        <div className={`${styles.list__flightInfo}`}>
                                                            <div className={`${styles.list__flightInfo__col}`}>
                                                                <h3 className={`${styles.list__flightInfo__title}`}>Conditions</h3>
                                                                <div className={`${styles.list__yourFlight}`}>
                                                                    <div className={`${styles.list__yourFlight__image}`}>
                                                                        <img src={logoFlight.src} alt="" />
                                                                    </div>
                                                                    <div className={`${styles.list__yourFlight__text}`}>
                                                                        <h5 className={`${styles.list__yourFlight__textBold}`}>{item.FlightNumber}</h5>
                                                                        <p className={`${styles.list__yourFlight__textQR}`}>
                                                                            <span>QH-183</span>
                                                                            <span>Economy</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className={`${styles.list__flightInfo__location}`}>
                                                                    <p>{nameCity.map(city => city.id === item.StartPoint && `${city.name}`)} <span>Economy</span></p>
                                                                    <p>{nameCity.map(city => city.id === item.EndPoint && `${city.name}`)}</p>
                                                                </div >
                                                                <p className={`${styles.list__flightInfo__note}`}>Non - Refundable</p>
                                                            </div>
                                                            <div className={`${styles.list__flightInfo__col}`}>
                                                                <h3 className={`${styles.list__flightInfo__title}`}>price details</h3>
                                                                <div className={`${styles.list__flightInfo__priceDetail}`}>
                                                                    <div className={`${styles.list__flightInfo__priceItem}`}>
                                                                        <span>Adult Basic Fare (x1)</span>
                                                                        <span>Tax</span>
                                                                        <span>Regular Total Price</span>
                                                                        <span style={{ color: '#F06336' }}>Save</span>
                                                                    </div>
                                                                    <div className={`${styles.list__flightInfo__priceItem}`}>
                                                                        <span><strong>{fCurrencyVN(item.PriceAdult)}</strong></span>
                                                                        <span>inculde</span>
                                                                        <span>{fCurrencyVN(item.TaxAdult)}</span>
                                                                        <span>Save</span>
                                                                    </div>
                                                                </div>
                                                                <div className={`${styles.list__flightInfo__priceTotal}`}>
                                                                    <div className={`${styles.list__flightInfo__priceItem}`}>
                                                                        <span>You pay</span>
                                                                    </div>
                                                                    <div className={`${styles.list__flightInfo__priceItem}`}>
                                                                        <span style={{ color: '#F06336' }}><strong>{fCurrencyVN(item.TaxAdult + item.PriceAdult + item.TaxAdult)}</strong></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) : ''
                        }


                    </div>

                    {/* sidebar */}
                    <div className={`${styles.list__row} ${styles.list__sidebar}`}>
                        <h3>your flights</h3>
                        <div className={`${styles.list__yourFlight} ${styles.list__yourFlight__line}`}>
                            <div className={`${styles.list__yourFlight__icon} ${styles.list__yourFlight__iconGray}`}>
                                01
                            </div>
                            <div className={`${styles.list__yourFlight__text}`}>
                                <span className={`${styles.list__yourFlight__date}`}>Fri, 11 Feb, 2022</span>
                                <span className={`${styles.list__yourFlight__textBold}`}>Da Nang - Ho Chi Minh</span>
                            </div>
                        </div>
                        <div className={`${styles.list__yourFlight}`}>
                            <div className={`${styles.list__yourFlight__image}`}>
                                <img src={logoFlight.src} alt="" />
                            </div>
                            <div className={`${styles.list__yourFlight__text}`}>
                                <span className={`${styles.list__yourFlight__textBold}`}>Bamboo Airways</span>
                                <a className={`${styles.list__yourFlight__link}`}>Details</a>
                            </div>
                        </div>
                        <div className={`${styles.list__flightTimes}`} style={{ margin: 0, width: '100%' }}>
                            <div className={`${styles.list__flightTimes__col}`}>
                                <p>21:40</p>
                                <span>DAD</span>
                            </div>
                            <div className={`${styles.list__flightTimes__col} ${styles.list__flightTimes__period}`} style={{ flex: 1 }}>
                                <p>1h 30m</p>
                                <span>Direct</span>

                                <div className={`${styles.list__flightTimes__icon}`}>
                                    <div className={`icon-period`}>
                                    </div>
                                </div>

                            </div>
                            <div className={`${styles.list__flightTimes__col}`}>
                                <p>23:10</p>
                                <span>DAD</span>
                            </div>
                        </div>
                        <button className={`btn btn--large btn--gray ${styles.list__yourFlight__btn}`}>Change departure flight</button>
                        <div className={`${styles.list__yourFlight} ${styles.list__yourFlight__line}`}>
                            <div className={`${styles.list__yourFlight__icon} ${styles.list__yourFlight__iconBlue}`}>
                                02
                            </div>
                            <div className={`${styles.list__yourFlight__text}`}>
                                <span className={`${styles.list__yourFlight__date}`}>Fri, 11 Feb, 2022</span>
                                <span className={`${styles.list__yourFlight__textBold}`}>Da Nang - Ho Chi Minh</span>
                            </div>
                        </div>
                        <div className={`${styles.list__sidebar__total}`}>
                            <span>Subtotal</span>
                            <span>1,322,000 vnd</span>
                        </div>
                    </div>

                </div>
            </div>
            {/* <Footer /> */}
            <Footer />
        </div>
    )
}


export default List
