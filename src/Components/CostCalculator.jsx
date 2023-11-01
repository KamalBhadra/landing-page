import React from 'react'

export default function CostCalculator() {
    return (
        <section className='cost-calculator'>
            <div className='box-first'>
                <div className='text-first'>
                    Compare Klan’s costs with traditional hiring
                </div>
                <div className='text-second'>
                    See how Klan's flexible hiring model significantly trims expenses compared to traditional hiring methods.
                </div>
            </div>
            <div className='box-second'>
                <div className='card-first'>
                    <div className='card'>
                        <div className='content-first'>
                            <div className='text'>
                                Designers
                            </div>
                            <div className='content-second'>
                                <div className='question'>
                                    <div className='question-text'>
                                        How many?
                                    </div>
                                    <div className='counter'>
                                        <div className='counter-text'>
                                            -
                                        </div>
                                        <div className='counter-text'>
                                            01
                                        </div>
                                        <div className='counter-text'>
                                            +
                                        </div>
                                    </div>
                                </div>
                                <div className='question'>
                                    <div className='question-text'>
                                        Average Weekly Hours
                                    </div>
                                    <div className='counter'>
                                        <div className='counter-text'>
                                            20
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='box-image'>
                            <img src='Images/cost-first-card-image.png' alt='Cost First Card' />
                        </div>

                    </div>
                    <div className='card'>
                        <div className='content-first'>
                            <div className='text'>
                                Product Managers
                            </div>
                            <div className='content-second'>
                                <div className='question'>
                                    <div className='question-text'>
                                        How many?
                                    </div>
                                    <div className='counter'>
                                        <div className='counter-text'>
                                            -
                                        </div>
                                        <div className='counter-text'>
                                            01
                                        </div>
                                        <div className='counter-text'>
                                            +
                                        </div>
                                    </div>
                                </div>
                                <div className='question'>
                                    <div className='question-text'>
                                        Average Weekly Hours
                                    </div>
                                    <div className='counter'>
                                        <div className='counter-text'>
                                            20
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='box-image'>
                            <img src='Images/cost-second-card-image.png' alt='Cost second Card' />
                        </div>

                    </div>

                </div>

                <div className='card-second'>
                    <div className='card'>
                        <div className='content-first'>
                            <div className='text'>
                                Developers
                            </div>
                            <div className='content-second'>
                                <div className='question'>
                                    <div className='question-text'>
                                        How many?
                                    </div>
                                    <div className='counter'>
                                        <div className='counter-text'>
                                            -
                                        </div>
                                        <div className='counter-text'>
                                            01
                                        </div>
                                        <div className='counter-text'>
                                            +
                                        </div>
                                    </div>
                                </div>
                                <div className='question'>
                                    <div className='question-text'>
                                        How many?
                                    </div>
                                    <div className='counter'>
                                        <div className='counter-text'>
                                            -
                                        </div>
                                        <div className='counter-text'>
                                            01
                                        </div>
                                        <div className='counter-text'>
                                            +
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='box-image'>
                            <img src='Images/cost-third-card-image.png' alt='Cost third Card' />
                        </div>

                    </div>
                    <div className='card-four'>
                        <div className='content-first'>
                            <div className='text'>
                                Developers
                                <div className='box-image'>
                                    <img src='Images/cost-fourth-card-image.png' alt="Costfourth Card" />

                                </div>
                            </div>

                            <div className='content-second'>
                                <div className='question'>
                                    <div className='question-text'>
                                        Growth Expert?
                                    </div>
                                    <div className='counter'>
                                        <div className='counter-text'>
                                            -
                                        </div>
                                        <div className='counter-text'>
                                            01
                                        </div>
                                        <div className='counter-text'>
                                            +
                                        </div>
                                    </div>
                                </div>
                                <div className='question'>
                                    <div className='question-text'>
                                        Data Scientist?
                                    </div>
                                    <div className='counter'>
                                        <div className='counter-text'>
                                            -
                                        </div>
                                        <div className='counter-text'>
                                            01
                                        </div>
                                        <div className='counter-text'>
                                            +
                                        </div>
                                    </div>
                                </div>
                                <div className='question'>
                                    <div className='question-text'>
                                        QA Engineer?
                                    </div>
                                    <div className='counter'>
                                        <div className='counter-text'>
                                            -
                                        </div>
                                        <div className='counter-text'>
                                            01
                                        </div>
                                        <div className='counter-text'>
                                            +
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>



                </div>

                <div className='card-third'>
                    <div className='card-nav'>
                        <button className='nav-button-first'>
                            Weekly
                        </button>
                        <button className='nav-button-rest'>
                            Monthly
                        </button>
                        <button className='nav-button-rest'>
                            Querterly
                        </button>
                        <button className='nav-button-rest'>
                            Annually
                        </button>
                    </div>
                    <div className='card-cost'>
                        <div className='text-first'>
                            $48260
                        </div>
                        <div className='text-second'>
                            Total weekly cost with traditional hiring
                        </div>
                    </div>
                    <div className='card-cost'>
                        <div className='text-first'>
                            $16740
                        </div>
                        <div className='text-second'>
                            Total weekly cost with Klan
                        </div>
                    </div>
                    <div className='cost-line'>
                        <img src='Images/cost-line.png' className='cost-line' />
                    </div>
                    <div className='card-cost'>
                        <div className='text-first'>
                            $16740
                        </div>
                        <div className='text-second'>
                            Total savings
                        </div>
                    </div>
                </div>


            </div>

        </section>
    )
}
