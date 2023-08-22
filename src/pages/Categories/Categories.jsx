import { Link } from "react-router-dom";
import NewsMidCard from "../../Home/NewsMidCard";
import Sidebar1 from "../../Home/sidebars/Sidebar1";

const Categories = () => {
    return (
        <div className="my-5 container-fluid">
            <h3 className="mb-3 ms-2 my-2">জাতীয়</h3>

            <div className="row w-100 mx-auto">
                <div className="col-sm-12 col-md-6">
                    <div className=" position-relative">
                        <div className="img-contain">
                            <img src="https://backend.newsnow24.com/storage/photos/shares/news/2023/08/18/file_1692372304.jpg" alt="Zoomable Image" />
                            <div className="overlay"></div>
                        </div>

                        <div className="position-absolute title-text">
                            <span className="light-moods px-2 py-1 rounded text-danger text-nowrap text-sm"> <i className="fa-solid fa-clock"></i> ২ ঘন্টা আগে</span>
                            <Link to={`/news`} className="text-decoration-none text-white ">  <h4 className="mt-3">ভোটগ্রহণ কর্মকর্তাদের নিয়োগ নীতিমালা নিয়ে বসছে ইসি</h4></Link>
                        </div>
                    </div>

                    <div className="d-flex gap-2">
                        <NewsMidCard />
                        <NewsMidCard />
                    </div>
                    <div className="d-flex gap-2">
                        <NewsMidCard />
                        <NewsMidCard />
                    </div>


                </div>
                <div className="col-sm-6 col-md-3">
                    <NewsMidCard />
                    <NewsMidCard />
                    <NewsMidCard />
                </div>
                <div className="col-sm-6 col-md-3">
                    <Sidebar1 />
                </div>

            </div>
        </div>
    );
};

export default Categories;