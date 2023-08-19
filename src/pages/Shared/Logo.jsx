const Logo = () => {
    return (
        <div className="bg-white py-4 row w-100 justify-content-between mx-auto">
            <a className="col-md-3 " href="#">
                <img className="img-fluid px-2" src="https://backend.newsnow24.com/storage/photos/shares/newsnow-logo.png" alt="" />
            </a>
            <img className="col-md-7 img-fluid d-none d-md-block" src="https://backend.newsnow24.com/storage/photos/shares/Ads/website-banner.gif" alt="" />
        </div>
    );
};

export default Logo;
