/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"; // Don't forget to import 'React' from react package
import { Form } from "react-bootstrap";

const MyAreaNews = () => {

    const [selectedDivision, setSelectedDivision] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');

    const [districts, setDistricts] = useState('');
    const [division, setDivision] = useState([]);

    useEffect(() => {

        fetch('https://bdapis.com/api/v1.1/divisions')
            .then(res => res.json())
            .then(data => {
                setDivision(data.data);
            })
            .catch(error => {
                console.error('Error fetching division data:', error);

            });
    }, []);


    const getDistricts = (divisionName) => {
        return fetch(`https://bdapis.com/api/v1.1/division/${divisionName}`)
            .then(res => res.json())
            .then(data => {
                setDistricts(data.data);
                return data.data;
            })
            .catch(error => {
                console.error('Error fetching division data:', error);
                throw error;
            });
    };


    const handleDivisionChange = event => {
        const selectedValue = event.target.value;
        setSelectedDivision(selectedValue);
        setDistricts([]);
        getDistricts(selectedValue);
    };

    const handleDistrictChange = event => {
        const selectedValue = event.target.value;
        setSelectedDistrict(selectedValue);

    };


    console.log(selectedDistrict);

    return (
        <div className="mt-1 pb-2 rounded-1" style={{ backgroundColor: '#E5E7EB' }}>
            <div className="row py-3">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="circle-with-text mt-3 " style={{ borderBottom: '2px solid red', marginBottom: '-18px', marginLeft: '-12px' }}>
                        <div className="red-circle " />
                        <span className=" fw-bold mb-0  opacity-75 pb-2 text-primary"> এলাকার খবর</span>
                    </div>
                </div>
            </div>


            <div className="mt-4 mx-2">
                <Form.Select
                    className="my-2"
                    aria-label="Select Division"
                    defaultValue={selectedDivision}
                    onChange={handleDivisionChange}
                >
                    <option selected >বিভাগ</option>

                    {division?.map(d => (
                        <option key={d._id} value={d.division}>
                            {d.division}
                        </option>
                    ))}
                </Form.Select>

                <Form.Select
                    className="my-2"
                    aria-label="Select Districts"
                    onChange={handleDistrictChange}
                >

                    {!districts ? <option selected disabled>জেলা</option> : districts.map(d => (
                        <option key={d._id} value={d.district}>
                            {d.district}
                        </option>
                    ))}



                </Form.Select>


            </div>


        </div>
    );
};

export default MyAreaNews;