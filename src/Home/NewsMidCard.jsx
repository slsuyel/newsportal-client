/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { baseUrl } from "../baseurl/baseurl";

const NewsMidCard = ({ category }) => {
    if (!category) {
        return null
    }
    // console.log(category);
    return (
        <div style={{ marginBottom: '2px' }} className="border-2 border-bottom border-danger my-1 newscard p-2 rounded-1">
            <img src={`${baseUrl}${category.banner}`} alt="" style={{ height: '163px' }} className="img-fluid mb-1 w-100 rounded" />

            <div className="mt-2">
                <span className="text-danger text-nowrap text-sm"> <i className="fa-solid fa-clock"></i> 8 ঘন্টা আগে</span>
                {/* <p className="mb-0 category-tittle">{category?.selectedCategoryValues && category.selectedCategoryValues.length > 0
                    ? category.selectedCategoryValues.map((item, index) => (
                        <span key={index}>
                            {item}
                            {index !== category.selectedCategoryValues.length - 1 ? ',' : ''}
                        </span>
                    ))
                    : null} </p> */}
                <Link to={`/posts/${category._id}`} className="text-decoration-none text-dark ">
                    <h6 className="fw-normal lh-base mb-3">{category.title.slice(0, 80)}</h6>
                </Link>
                {/* <p style={{ fontSize: '12px' }} className="mb-1 opacity-75">ফরিদপুর প্রতিনিধি: ফরিদপুরে জাতীয়তাবাদী স্বেচ্ছাসেবক দলের ৪৩ তম প্রতিষ্ঠা বার্ষিকী উপলক্ষে বর্ণাঢ্য শোভাযাত্রা ও সমাবেশ অনুষ্ঠি . . .</p> */}
                <div style={{ fontSize: '12px' }} className='lh-base text-secondary'
                    dangerouslySetInnerHTML={{
                        __html: `<p>${category?.content.slice(0, 200)} . . . .</p>`
                    }}
                />
            </div>
        </div>
    );
};

export default NewsMidCard;