/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import NewsCard from "../NewsCard";
import { Link } from 'react-router-dom';
const TopMenu = ({ title,  Sidebar }) => {
    return (
        <div className="mx-4">
            <div className='align-items-end border-2 border-bottom border-secondary-subtle d-flex justify-content-between mt-2 pb-3'>

                <div className="circle-with-text mt-3" style={{ borderBottom: '2px solid red', marginBottom: '-18px', marginLeft: '-12px' }}><div className="red-circle" /><h2 className=" fw-bold mb-0 opacity-75 pb-2 text-primary">{title}</h2></div>

                <div>
                    <Link className='onhover text-decoration-none'>আরও দেখুন <i className="fa-solid fa-arrow-right-long"></i></Link>
                </div>
            </div>

            <div className='row mx-auto w-100 my-5'>
                <div className="col-md-6">
                    <div>
                        <img src="https://backend.newsnow24.com/storage/photos/shares/news/2023/08/19/file_1692427632.jpg" alt="" className='img-fluid rounded ms-2' />

                        <div className='lh-base ms-2 mt-3 text-start'>

                            <span className="bg-white my-2 rounded text-danger text-nowrap text-sm"> <i className="fa-solid fa-clock"></i> ২ ঘন্টা আগে</span>

                            <p className="my-2 category-tittle"> জাতীয়, প্রিয় চট্টগ্রাম </p>
                            <Link className="text-decoration-none text-dark ">
                                <h6 className="fs-4 lh-base onhover">'জনগণের অধিকার রক্ষায় দেশের মানুষ জেগে উঠেছে'</h6>
                            </Link>
                            <p className='lh-base  text-secondary'>নিজস্ব প্রতিবেদক: বিএনপি মহাসচিব মির্জা ফখরুল ইসলাম আলমগীর বলেছেন, দেশে কোনো মৌলবাদী দল কখনো ক্ষমতায় . . . .</p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="col-md-6"> <NewsCard />
                            <NewsCard /></div>
                        <div className="col-md-6"> <NewsCard />
                            <NewsCard /></div>

                    </div>
                </div>

                <div className='col-md-3'>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />

                </div>

                <div className='col-md-3'>
                    {Sidebar && <Sidebar />}

                    <div>
                        <img src="http://backend.newsnow24.com/storage/photos/shares/Ads/Shopping-Bag.gif" alt="" className="img-fluid mt-2 py-2 rounded shadow" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default TopMenu;