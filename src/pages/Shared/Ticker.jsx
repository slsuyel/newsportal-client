/* eslint-disable react/no-unknown-property */

import { Link } from 'react-router-dom';

const Ticker = () => {
    // Define some fake blog data
    const fakeBlogs = [
        { _id: 1, title: 'বাংলাদেশের প্রতি যুক্তরাষ্ট্রের অসম আচরণের কারণ কী' },
        { _id: 2, title: 'বাংলাদেশের চরণের কারণ কীe Blog 1  Blog 2' },
        { _id: 3, title: 'বাংলাদেশের প্রতি যুক্তরাষ্ট্রের অসম আপ্রতি যুক্তরাষ্ট্রের অসম আ Fake Blog 3' },

    ];

    return (
        <div className="light-moods-ticker container-fluid my-3">
            <div className="row">
                <div className="col-md-12">
                    <div
                        className="d-flex justify-content-between align-items-center breaking-news"

                    >
                        <div
                            className="d-flex flex-row flex-grow-1 flex-fill justify-content-center   text-white px-1 news"
                        >
                            <span className="d-flex text-nowrap align-items-center" style={{ backgroundColor: "#be202e" }}>&nbsp;সংবাদ শিরোনাম : </span>
                            <div className='arrow'></div>
                        </div>
                        <marquee
                            behavior="scroll"
                            direction="left"
                        >
                            {
                                fakeBlogs.map(blog => (
                                    <Link key={blog._id} to='/blog' className='text-decoration-none  onhover'>
                                        {blog?.title} 🔴
                                    </Link>
                                ))
                            }
                        </marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticker;
