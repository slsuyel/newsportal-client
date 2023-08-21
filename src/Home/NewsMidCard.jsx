import { Link } from "react-router-dom";

const NewsMidCard = () => {
    return (
        <div style={{ marginBottom: '2px' }} className="border-2 border-bottom border-danger my-1 newscard p-2 rounded-1">
            <img src="https://backend.newsnow24.com/storage/photos/shares/news/2023/08/18/file_1692370317.jpg" alt="" className="img-fluid mb-1 w-100 rounded" />

            <div className="mt-2">
                <span className="text-danger text-nowrap text-sm"> <i className="fa-solid fa-clock"></i> 8 ঘন্টা আগে</span>
                <p className="mb-0 category-tittle"> জাতীয়, প্রিয় চট্টগ্রাম </p>
                <Link className="text-decoration-none text-dark ">
                    <h6 className="fw-normal lh-base mb-2">করোনাভাইরাসের নতুন ও উচ্চ  শনাক্ত ধরন শনাক্ত</h6>
                </Link>
                <p style={{ fontSize: '12px' }} className="mb-1 opacity-75">ফরিদপুর প্রতিনিধি: ফরিদপুরে জাতীয়তাবাদী স্বেচ্ছাসেবক দলের ৪৩ তম প্রতিষ্ঠা বার্ষিকী উপলক্ষে বর্ণাঢ্য শোভাযাত্রা ও সমাবেশ অনুষ্ঠি . . .</p>
            </div>

        </div>
    );
};

export default NewsMidCard;